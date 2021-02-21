const jwt = require("jsonwebtoken");
const { AuthorizationError } = require("../utils/errors");
const { secret } = require("../utils/config").jwt;

exports.checkJwt = async (ctx, next) => {
  const authHeader = ctx.get("Authorization");
  const [method, token] = authHeader.split(" ");
  if (method === "Bearer") {
    const decoded = jwt.verify(token, secret);
    ctx.state.user = decoded;
    await next();
  }
};
exports.adminOnly = async (ctx, next) => {
  if (ctx.state.user.role === "admin") {
    await next();
  } else {
    throw new AuthorizationError("Access forbidden");
  }
};

exports.selfOrAdmin = async (ctx, next) => {
  if (
    ctx.params.username === ctx.state.user.username ||
    ctx.request.body.username === ctx.state.user.username ||
    ctx.state.user.role === "admin"
  ) {
    await next();
  } else {
    throw new AuthorizationError("Access forbidden");
  }
};
