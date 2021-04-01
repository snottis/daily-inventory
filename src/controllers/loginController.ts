import Koa from 'koa';

import service from '../services/loginService';
import validator from '../validators/loginValidator';

export const login = async (ctx: Koa.Context) => {
  await validator.login.validateAsync(ctx.request.body);
  const { username, password } = ctx.request.body;
  const res = await service.login(username, password);
  ctx.body = res;
};

export default { login };
