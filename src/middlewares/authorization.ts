import jwt from 'jsonwebtoken';
import Koa from 'koa';

import { AuthorizationError } from '../utils/errors';
import config from '../utils/config';

export const checkJwt = async (ctx: Koa.Context, next: Function) => {
  const authHeader = ctx.get('Authorization');
  const [method, token] = authHeader.split(' ');
  if (method === 'Bearer' && token) {
    const decoded = jwt.verify(token, config.JwtSecret);
    ctx.state.user = decoded;
    await next();
  } else {
    throw new AuthorizationError('Access forbidden');
  }
};

export const adminOnly = async (ctx: Koa.Context, next: Function) => {
  if (ctx.state.user.role === 'admin') {
    await next();
  } else {
    throw new AuthorizationError('Access forbidden');
  }
};

export const selfOrAdmin = async (ctx: Koa.Context, next: Function) => {
  if (
    ctx.params.id === ctx.state.user.id ||
    ctx.request.body.username === ctx.state.user.username ||
    ctx.state.user.role === 'admin'
  ) {
    await next();
  } else {
    throw new AuthorizationError('Access forbidden');
  }
};
