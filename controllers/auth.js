const service = require("../services/auth");

exports.login = async (ctx) => {
  const { username, password } = ctx.request.body;
  const token = await service.login(username, password);
  ctx.body = { access_token: token };
};
