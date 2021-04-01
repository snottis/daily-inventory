import Joi from 'joi';

const location = Joi.object({
  name: Joi.string().alphanum().required(),
});

const id = Joi.object({
  id: Joi.string().required(),
});

export default { location, id };
