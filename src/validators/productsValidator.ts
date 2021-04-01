import Joi from 'joi';

const create = Joi.object({
  gtin: Joi.string().alphanum().required(),
  name: Joi.string().required(),
  value: Joi.number().required(),
  lotsize: Joi.number().required(),
  hidden: Joi.boolean(),
});

const update = Joi.object({
  gtin: Joi.string().alphanum(),
  name: Joi.string(),
  value: Joi.number(),
  lotsize: Joi.number(),
  hidden: Joi.boolean(),
});

const id = Joi.object({
  id: Joi.string().required(),
});

const gtin = Joi.object({
  gtin: Joi.string().alphanum().required(),
});

export default { create, update, id, gtin };
