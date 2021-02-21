const service = require("../services/users");

exports.createUser = async (ctx) => {
  const { username, password, locations, role } = ctx.request.body;
  const r = await service.createUser(username, password, locations, role);
  ctx.body = r;
};

exports.deleteUser = async (ctx) => {
  const { username } = ctx.request.body;
  const r = await service.deleteUser(username);
  ctx.body = r;
};

exports.updateUser = async (ctx) => {
  const { username, password, locations, role } = ctx.request.body;
  const r = await service.updateUser(username, password, locations, role);
  ctx.body = r;
};

exports.getOneUser = async (ctx) => {
  const { username } = ctx.request.body;
  const r = await service.getOneUser(username);
  ctx.body = r;
};

exports.getAll = async (ctx) => {
  const r = await service.getUsers();
  ctx.body = r;
};
