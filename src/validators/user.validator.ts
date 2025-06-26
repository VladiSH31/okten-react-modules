import Joi from "joi";

const userValidator = Joi.object({
    username: Joi.string().pattern(/^[a-zA-Z0-9]{3,20}$/).required().messages({
        "string.pattern.base": "Only chars and number allowed, min 3 symbols"
    }),
    password: Joi.string().min(4).max(20).required().messages({
        "string.min": "Password must be more than 4 symbols",
        "string.max": "Password cannot be greater than 20 symbols"
    }),
    age: Joi.number().min(1).max(117).required().messages({
        "number.min": "min age 1",
        "number.max": "max age 117"
    })
})

export default userValidator;