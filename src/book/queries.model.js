const insetBook_details = 'INSERT INTO "book"("bookname", "description", "numberofpages", "authorname", "publishername") VALUES($1, $2, $3, $4, $5)';
const deleteBook = 'delete from book where id=$1';
const getBooks = 'SELECT * FROM books where author=$1 AND publisher=$2';
const getUserByUsername = 'SELECT * FROM users WHERE username = $1';
module.exports = {

    insetBook_details,
    deleteBook,
    getBooks,
    getUserByUsername
};
