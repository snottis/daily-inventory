const Koa = require("koa");
const helmet = require("koa-helmet");
const compression = require("koa-compress");
const body = require("koa-body");

require("dotenv").config();

const mongo = require("./db");
const createIndexing = require("./db/createIndexes");
const router = require("./routes");
const errorhandler = require("./middlewares/error-handler");

async function start() {
  try {
    await mongo.connect();
  } catch (error) {
    /* eslint-disable no-console */
    console.log(error);
    /* eslint-enable */
    return;
  } finally {
    console.log("Running mongo!");
    createIndexing();
  }
}
start();
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
/* eslint-disable no-console */
console.log("Running server!");
/* eslint-enable */

module.exports = app;
