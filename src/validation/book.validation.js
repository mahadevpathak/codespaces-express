const Joi = require('joi')

const bookpostValidation = async (req) => {
   // console.log("4",req.body);
    const bookSchema = Joi.object().keys({
        bookname: Joi.string().min(2).required(),
        description: Joi.string().required(),
        numberofpages: Joi.number().min(1).required(),
        authorname: Joi.string().min(2).required(),
        publishername: Joi.string().min(2).required(),

    });
    // console.log("1999999999999999",bookSchema);
    const validationResult = bookSchema.validate(req.body, { abortEarly: false });
    console.log("validationResult", validationResult);
    if (validationResult.error) {
        console.log("23");
        return { error: validationResult.error };
    }

    return { value: validationResult.value };

}


module.exports = {
    bookpostValidation
}