const db = require('../../db');
const bookQuery = require('./queries.model')
const bookValidation = require('../validation/book.validation')
const utilMessage = require('../constant/constant')



const addBookDetails = async (req, res) => {
    try {
        console.log("11");
        const validationResult = await bookValidation.bookpostValidation(req);
        if (validationResult.error) {
            console.log("11a");
            return res.status(400).json({ error: validationResult.error.details.map(detail => detail.message) })
        }

        const { bookname, description, numberofpages, authorname, publishername } = validationResult.value;

        try {
            console.log('Executed query:', bookQuery.insetBook_details, 'with values:', [bookname, description, numberofpages, authorname, publishername]);
            const BOOKInsert = await db.query(bookQuery.insetBook_details, [bookname, description, numberofpages, authorname, publishername])
            return res.status(utilMessage.HttpStatus.OK).json({ message: utilMessage.message.BOOK_INSERT_SUCCESS, data: BOOKInsert })
        } catch (error) {
            console.log("Error: ", error)
            return res.status(utilMessage.HttpStatus.INTERNAL_SERVER_ERROR).json({ error: utilMessage.ERROR, message: utilMessage.message.INTERNAL_SERVER_ERROR, })
        }

    } catch (error) {
        return res.status(utilMessage.HttpStatus.BAD_REQUEST).json({ error: utilMessage.ERROR, message: utilMessage.message.BAD_REQUEST, })
    }
}

const deletebook = async (req, res) => {
    try {
        const bookId = parseInt(req.params.id);
        const isbookAvailable = await db.query(bookQuery.getBookById, [bookId])
        if (isbookAvailable.rows.length > 0) {
            const result = await db.query(bookQuery.deleteBook, [bookId]);

            return res.status(utilMessage.HttpStatus.OK).json({ message: utilMessage.message.BOOK_DELETE_SUCCESS })
        } else {
            return res.status(utilMessage.HttpStatus.BAD_REQUEST).json({ error: utilMessage.ERROR, message: utilMessage.message.BAD_REQUEST, })
        }

    } catch (error) {
        console.error('Error deleting student:', error);
        return res.status(utilMessage.HttpStatus.INTERNAL_SERVER_ERROR).json({ error: utilMessage.ERROR, message: utilMessage.message.INTERNAL_SERVER_ERROR, });
    }
}

const getBooks = async (req, res) => {
    try {
        const author = req.query.author
        const publisher = req.query.publisher
        const books = await db.query(bookQuery.getBooks, [author, publisher]);
        return res.status(utilMessage.HttpStatus.OK).json({ message: utilMessage.message.SUCCESS, data: books })
    } catch (error) {
        return res.status(utilMessage.HttpStatus.INTERNAL_SERVER_ERROR).json({ error: utilMessage.ERROR, message: utilMessage.message.BOOK_FETCH, });

    }
}

module.exports = {
    addBookDetails,
    deletebook,
    getBooks
}