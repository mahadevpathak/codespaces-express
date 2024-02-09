const Router = require("express");
const router = Router();
const bookController = require("./book.controller");
const authenticateUser =require('../user/user.middleware')


router.post("/", authenticateUser, bookController.addBookDetails); 
router.get("/", authenticateUser,bookController.getBooks);
router.delete("/:id", authenticateUser, bookController.deletebook);

module.exports = router;
