import Koa from 'koa';

import validator from '../validators/productsValidator';
import service from '../services/productsService';

const create = async (ctx: Koa.Context) => {
  await validator.create.validateAsync(ctx.request.body);
  const { name, gtin, value, lotsize, hidden } = ctx.request.body;
  const res = await service.create({ name, gtin, value, lotsize, hidden });
  ctx.body = res;
};

const getAll = async (ctx: Koa.Context) => {
  const res = await service.getAll();
  ctx.body = res;
};

const update = async (ctx: Koa.Context) => {
  await validator.id.validateAsync(ctx.params);
  await validator.update.validateAsync(ctx.request.body);
  const { id } = ctx.params;
  const { name, gtin, value, lotsize, hidden } = ctx.request.body;
  const res = await service.update(id, { name, gtin, value, lotsize, hidden });
  ctx.body = res;
};

const remove = async (ctx: Koa.Context) => {
  await validator.id.validateAsync(ctx.params);
  const { id } = ctx.params;
  const res = await service.remove(id);
  ctx.body = res;
};

export default { create, getAll, update, remove };
