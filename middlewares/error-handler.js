/**
 * Handle downstream errors. Sanitize MongoErrors
 * @param {context} ctx
 * @param {function} next
 */
module.exports = async (ctx, next) => {
  try {
    await next();
  } catch (error) {
    ctx.app.emit("error", error, ctx);
    /* Do not show MongoErrors to users */
    if (error.name === "MongoError") {
      error.message = "Database error. Check your parameters.";
    }
    ctx.status = error.status || 500;
    ctx.body = error.message || "Unknown internal error";
  }
};
