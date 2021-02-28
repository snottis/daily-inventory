const Joi = require("joi");

exports.location = Joi.object({
  id: Joi.number().required(),
  name: Joi.string().alphanum().required(),
});

exports.id = Joi.object({
  id: Joi.number().required(),
});
