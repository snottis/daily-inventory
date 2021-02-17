const Koa = require('koa');
const helmet = require('koa-helmet');
const compression = require('koa-compress');
const body = require('koa-body');

const router = require('./routes')

const app = new Koa();
app.use(compression());
app.use(helmet());
app.use(body());
app.use(router.routes());

app.use(async (ctx) => {
  ctx.body = "Hello world!";
})

app.listen(8000);
