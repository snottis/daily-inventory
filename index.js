const Koa = require("koa");
const helmet = require("koa-helmet");
const compression = require("koa-compress");
const body = require("koa-body");

require("dotenv").config();

const mongo = require("./db");
const router = require("./routes");

const errorhandler = require("./middlewares/error-handler");

async function start() {
  try {
    await mongo.connect();
  } catch (error) {
    console.log(error);
    return;
  }
  const app = new Koa();
  app.use(errorhandler);
  app.use(compression());
  app.use(helmet());
  app.use(body());
  app.use(router.routes());

  app.use(async (ctx) => {
    ctx.body = "Hello world!";
  });

  app.listen(process.env.NODE_PORT || 8000);
  console.log("Running server!");
}

start();
