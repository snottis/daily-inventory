const Joi = require("joi");

exports.user = Joi.object({
  username: Joi.string()
    .regex(/^[a-zA-z]*$/, "Letters a-z only")
    .min(3)
    .max(20)
    .required(),
  password: Joi.string().required(),
  locations: Joi.array().items(Joi.number()).min(1).required(),
  role: Joi.string()
    .regex(/^[a-zA-z]*$/, "Letters a-z only")
    .required(),
});

exports.username = Joi.object({
  username: Joi.string()
    .regex(/^[a-zA-z]*$/, "Letters a-z only")
    .min(3)
    .max(20)
    .required(),
});
