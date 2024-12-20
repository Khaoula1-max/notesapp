// validation for tag with express-validator
const { check, validationResult, checkExact } = require('express-validator');
//validation:POST ,PUT,PATCH
const validations ={
    tagValidation : [
    check('title') 
    .not().isEmpty().withMessage('Title is required'),
    isString ().withMessage ('Title must be a string'),
    ]
}
const handleValidationErrors = (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(422).json({ errors: errors.array() });
        }
        next();
        }
        
        module.exports = { validations, handleValidationErrors };




