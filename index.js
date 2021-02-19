const Koa = require("koa");
const helmet = require("koa-helmet");
const compression = require("koa-compress");
const body = require("koa-body");

require("dotenv").config();

const mongo = require("./db");
const router = require("./routes");

const errorhandler = require("./middlewares/error-handler");

async function start() {
  await mongo.connect();
  const app = new Koa();
  app.use(errorhandler());
  app.use(compression());
  app.use(helmet());
  app.use(body());
  app.use(router.routes());

  app.use(async (ctx) => {
    const list = await mongo.db().admin().listDatabases();
    list.databases.forEach((db) => console.log(` - ${db.name}`));
    ctx.body = "Hello world!";
  });

  app.listen(process.env.NODE_PORT || 8000);
}

start();
