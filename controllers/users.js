const service = require("../services/users");
const validator = require("./users.validation");

exports.createUser = async (ctx) => {
  await validator.user.validateAsync(ctx.request.body);
  const { username, password, locations, role } = ctx.request.body;
  const r = await service.createUser(username, password, locations, role);
  ctx.body = r;
};

exports.deleteUser = async (ctx) => {
  await validator.username.validateAsync(ctx.request.body);
  const { username } = ctx.request.body;
  const r = await service.deleteUser(username);
  ctx.body = r;
};

exports.updateUser = async (ctx) => {
  await validator.user.validateAsync(ctx.request.body);
  const { username, password, locations, role } = ctx.request.body;
  const r = await service.updateUser(username, password, locations, role);
  ctx.body = r;
};

exports.getOneUser = async (ctx) => {
  await validator.username.validateAsync(ctx.params);
  const { username } = ctx.params;
  const r = await service.getOneUser(username);
  ctx.body = r;
};

exports.getAll = async (ctx) => {
  const r = await service.getUsers();
  ctx.body = r;
};
