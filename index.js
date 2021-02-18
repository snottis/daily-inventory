const Koa = require('koa');
const helmet = require('koa-helmet');
const compression = require('koa-compress');
const body = require('koa-body');

require('dotenv').config();

const router = require('./routes')
const mongo = require('./db')

const app = new Koa();
async function start() {
  await mongo.connect();
  app.use(compression());
  app.use(helmet());
  app.use(body());
  app.use(router.routes());

  app.use(async (ctx) => {
    const list = await mongo.db().admin().listDatabases();
    list.databases.forEach(db => console.log(` - ${db.name}`));
    ctx.body = "Hello world!";
  })

  app.listen(8000);
}

start();
