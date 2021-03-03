const Koa = require("koa");
const helmet = require("koa-helmet");
const compression = require("koa-compress");
const body = require("koa-body");

require("dotenv").config();

const mongo = require("./db");
const createIndexing = require("./db/createIndexes");
const router = require("./routes");
const errorhandler = require("./middlewares/error-handler");

const app = new Koa();
app.use(errorhandler);
app.use(compression());
app.use(helmet());
app.use(body());
app.use(router.routes());

app.use(async (ctx) => {
  ctx.body = "Hello world!";
});
/* eslint-disable no-console */
console.log("Running server!");
/* eslint-enable */

module.exports = app;
