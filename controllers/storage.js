const service = require("../services/storage");
const validator = require("./storage.validation");

exports.upsertShelf = async (ctx) => {
  await validator.inv.validateAsync(ctx.request.body);
  const { date, location, inventory } = ctx.request.body;
  const r = service.updateStorage(date, location, inventory, "shelf");
  ctx.body = r;
};

exports.upsertStorage = async (ctx) => {
  await validator.inv.validateAsync(ctx.request.body);
  const { date, location, inventory } = ctx.request.body;
  const r = service.updateStorage(date, location, inventory, "storage");
  ctx.body = r;
};

exports.getShelf = async (ctx) => {
  await validator.get.validateAsync(ctx.request.body);
  const { date, location } = ctx.request.body;
  const r = service.getStorage(date, location, "shelf");
  ctx.body = r;
};

exports.getStorage = async (ctx) => {
  await validator.get.validateAsync(ctx.request.body);
  const { date, location } = ctx.request.body;
  const r = service.getStorage(date, location, "storage");
  ctx.body = r;
};

exports.getRecentStorage = async (ctx) => {
  await validator.recent.validateAsync(ctx.request.body);
  const { location } = ctx.request.body;
  const r = service.getRecentStorage(location, "storage");
  ctx.body = r;
};
