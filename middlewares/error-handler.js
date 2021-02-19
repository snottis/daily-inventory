module.exports = async (ctx, next) => {
  try {
    await next();
  } catch (error) {
    ctx.status = error.status || 500;
    ctx.body = error.message || "Unknown internal error";
    ctx.app.emit("error", error, ctx);
  }
};
