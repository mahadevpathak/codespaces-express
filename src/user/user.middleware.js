const db = require('../../dbConn'); 
const bcrypt = require('bcrypt'); 
const bookQuery = require('../book/queries.model')
const utilMessage = require('../constant/constant')
const authenticateUser = async (req, res, next) => {
    const { username, password } = req.body;

    try {
        const userQuery = await db.query(bookQuery.getUserByUsername, [username]);
        const user = userQuery.rows[0];
        if (!user || !(await bcrypt.compare(password, user.password))) {
            return res.status(utilMessage.HttpStatus.UNAUTHORIZED).json({ error: utilMessage.ERROR, message: utilMessage.message.UNAUTHORIZED});
        }
        req.user = user;
        next();
    } catch (error) {
        console.error('Error authenticating user:', error);
        return res.status(utilMessage.HttpStatus.INTERNAL_SERVER_ERROR).json({ error: utilMessage.ERROR, message: utilMessage.message.INTERNAL_SERVER_ERROR, })
    }
};
module.exports = authenticateUser