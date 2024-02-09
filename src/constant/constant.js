const message ={
    SUCCESS:'SUCCESS',
    ERROR: 'ERROR',
    UNAVAILABLE : '',
    BOOK_FETCH:'Failed to fetch books',
    BOOK_INSERT_ERROR: 'Unable To Create BOOK',
    BOOK_DELETE_SUCCESS: 'BOOK Deleted Successfully', 
    BOOK_INSERT_SUCCESS:'BOOK Created Successfully',
    CONFLICT_ERROR: "Conflict",
    BAD_REQUEST: "BAD REQUEST",
    INTERNAL_SERVER_ERROR :"INTERNAL SERVER ERROR",
    UNAUTHORIZED : "Unauthorized !!" 
    }
    const HttpStatus = {
        OK: 200,
        CREATED: 201,
        BAD_REQUEST: 400,
        UNAUTHORIZED: 401,
        FORBIDDEN: 403,
        NOT_FOUND: 404,
        INTERNAL_SERVER_ERROR: 500,
        CONFLICT:409
      }; 
    module.exports ={
        message,
        HttpStatus
    }