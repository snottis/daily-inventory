import Joi from 'joi';

export const login = Joi.object({
  username: Joi.string().required(),
  password: Joi.string().required(),
});

const LoginValidator = { login };

export default LoginValidator;
