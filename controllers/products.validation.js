const { number } = require("joi");
const Joi = require("joi");

exports.product = Joi.object({
  gtin: Joi.string().alphanum().required(),
  name: Joi.string().required(),
  value: Joi.number().required(),
  lotsize: Joi.number().required(),
  hidden: Joi.boolean(),
});

exports.gtin = Joi.object({
  gtin: Joi.string().alphanum().required(),
});
