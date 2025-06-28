import Joi from "joi";

export const carsValidator = Joi.object({
    brand: Joi.string().pattern(/^[a-zA-Zа-яА-яёЁіІїЇєЄҐґ]{1,20}$/).max(20).min(1).required().messages({
        'string.pattern.base' : 'Brand can contain only letters (Latin and Cyrillic) from 1 to 20 characters'
        }

    ),
    price: Joi.number().max(1000000).min(0).required().messages({

        'number.max':'Price cannot exceed 1,000,000',
        'number.min':'Price cannot be negative'

    }),
    year: Joi.number().max(2025).min(1990).required().messages({
        'number.max':'Year cannot be later than 2025',
        'number.min':'Year cannot be earlier than 1990'
    })
})