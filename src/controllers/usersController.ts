import * as Koa from 'koa';

import service from '../services/usersService';
import validator from '../validators/usersValidator';

const createUser = async (ctx: Koa.Context) => {
  await validator.user.validateAsync(ctx.request.body);
  const { username, password, locations, role } = ctx.request.body;
  const r = await service.createUser(username, password, locations, role);
  if (r) ctx.body = r;
  else {
    ctx.status = 400;
    ctx.body = { error: 'cant add user' };
  }
};

const deleteUser = async (ctx: Koa.Context) => {
  await validator.id.validateAsync(ctx.request.body);
  const { id } = ctx.request.body;
  const r = await service.deleteUser(id);
  if (r) ctx.body = r;
  else {
    ctx.status = 404;
    ctx.body = { error: 'cant delete user' };
  }
};

const updateUser = async (ctx: Koa.Context) => {
  await validator.user.validateAsync(ctx.request.body);
  const { id, username, password, locations, role } = ctx.request.body;
  const r = await service.updateUser(id, username, password, locations, role);
  ctx.body = r;
};

const getOne = async (ctx: Koa.Context) => {
  await validator.id.validateAsync(ctx.params);
  const { id } = ctx.params;
  let r = await service.getOne(id);
  ctx.body = r;
};

const getAll = async (ctx: Koa.Context) => {
  const r = await service.getAll();
  ctx.body = r;
};

export default { getAll, getOne, updateUser, deleteUser, createUser };
