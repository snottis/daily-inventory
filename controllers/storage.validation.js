const Joi = require("joi");

exports.inv = Joi.object({
  date: Joi.date().required(),
  location: Joi.number().required(),
  inventory: Joi.array().items(
    Joi.object({
      gtin: Joi.string().required(),
      name: Joi.string().required(),
      amount: Joi.number().required(),
    })
  ),
});

exports.get = Joi.object({
  date: Joi.date().required(),
  location: Joi.number.required(),
});

exports.recent = Joi.object({
  location: Joi.number().required(),
});
