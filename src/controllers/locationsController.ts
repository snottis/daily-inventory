import Koa from 'koa';

import service from '../services/locationsService';
import validator from '../validators/locationsValidator';

const create = async (ctx: Koa.Context) => {
  await validator.location.validateAsync(ctx.request.body);
  const { name } = ctx.request.body;
  const res = await service.create(name);
  ctx.status = 201;
  ctx.body = res;
};

const remove = async (ctx: Koa.Context) => {
  await validator.id.validateAsync(ctx.params);
  const { id } = ctx.params;
  const res = await service.remove(id);
  ctx.body = res;
};

const getAll = async (ctx: Koa.Context) => {
  const res = await service.getAll();
  ctx.body = res;
};

const update = async (ctx: Koa.Context) => {
  await validator.id.validateAsync(ctx.params);
  await validator.location.validateAsync(ctx.request.body);
  const { id } = ctx.params;
  const { name } = ctx.request.body;
  const res = await service.update(id, name);
  ctx.body = res;
};

export default { create, remove, getAll, update };
