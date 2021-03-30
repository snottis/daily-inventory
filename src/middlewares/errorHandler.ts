import Koa from 'koa';

export default async (ctx: Koa.Context, next: Function) => {
  try {
    await next();
  } catch (error) {
    ctx.app.emit('error', error, ctx);
    if (error.name === 'MongoError') {
      ctx.app.emit('error', error, ctx);
      error.message = 'Database error. Check your parameters';
      ctx.status = 500;
    }
    ctx.status = error.status || 500;
    ctx.body = error.message || 'Unknown error';
  }
};
