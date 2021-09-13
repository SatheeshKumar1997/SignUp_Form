const Joi = require("joi");

const register = Joi.object({
    First_Name : Joi.string().min(4).max(20).required(),
    Last_Name : Joi.string().min(4).max(20).required(),
    Email : Joi.string().min(4).required().email(),
    Password : Joi.string().min(2).max(20).required(),
});

module.exports = {register};