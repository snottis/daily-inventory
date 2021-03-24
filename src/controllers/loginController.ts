import Koa from 'koa';

import service from '../services/loginService';
import validator from '../validators/loginValidator';

export const login = async (ctx: Koa.Context) => {
  await validator.login.validateAsync(ctx.request.body);
  const { username, password } = ctx.request.body;
  const token = await service.login(username, password);
  ctx.body = { access_token: token };
};

export default { login };
