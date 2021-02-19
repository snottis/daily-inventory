const service = require("../services/users");

exports.create = async (ctx) => {
  const { username, password, locations, role } = ctx.request.body;
  const r = await service.createUser(username, password, locations, role);
  ctx.body = r;
};

exports.getAll = async (ctx) => {
  const r = await service.getUsers();
  ctx.body = r;
};
