const Joi = require('joi');

const user = Joi.object({
  id: Joi.string(),
  username: Joi.string()
    .regex(/^[a-zA-z]*$/, 'Letters a-z only')
    .min(3)
    .max(20)
    .required(),
  password: Joi.string().required(),
  locations: Joi.array().items(Joi.number()).required(),
  role: Joi.string()
    .regex(/^[a-zA-z]*$/, 'Letters a-z only')
    .required(),
});

const username = Joi.object({
  username: Joi.string()
    .regex(/^[a-zA-z]*$/, 'Letters a-z only')
    .min(3)
    .max(20)
    .required(),
});

const id = Joi.object({
  id: Joi.string(),
});

const UserValidator = { user, username, id };

export default UserValidator;
