const service = require("../services/locations");
const validator = require("./locations.validation");

exports.createLocation = async (ctx) => {
  await validator.location.validateAsync(ctx.request.body);
  const { id, name } = ctx.request.body;
  const r = await service.createLocation(id, name);
  ctx.body = r;
};

exports.deleteLocation = async (ctx) => {
  await validator.id.validateAsync(ctx.request.body);
  const { id } = ctx.request.body;
  const r = await service.deleteLocation(id);
  ctx.body = r;
};

exports.getLocations = async (ctx) => {
  const r = await service.getLocations();
  ctx.body = r;
};

exports.updateLocation = async (ctx) => {
  await validator.location.validateAsync(ctx.request.body);
  const { id, name } = ctx.request.body;
  const r = await service.updateLocation(id, name);
  ctx.body = r;
};
