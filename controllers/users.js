const service = require('../services/users');

exports.create = async (ctx) => {
  ctx.body = service.createUser();
}
