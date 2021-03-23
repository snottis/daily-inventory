import koa from 'koa';
import koaHelmet from 'koa-helmet';
import koaCompress from 'koa-compress';
import koaBody from 'koa-body';
import dotenv from 'dotenv';
import errorHandler from './middlewares/errorHandler';

dotenv.config();
import('./config/db');
import Router from './routes';

const app = new koa();
app.use(koaCompress());
app.use(koaHelmet());
app.use(koaBody());
app.use(errorHandler);
app.use(Router.routes());

/* eslint-disable no-console */
console.log('Running server!');
/* eslint-enable */

export default app;
