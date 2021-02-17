const Router = require('@koa/router');

const router = new Router({prefix: '/api'});

router.use(require('./users').routes());


module.exports = router;
