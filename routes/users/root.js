const Router = require('@koa/router');
const client = require('../../db');

const router = new Router();

router.get('/', async ctx => {
  const list = await client.db().admin().listDatabases();
  ctx.body = list;
})

module.exports = router;
