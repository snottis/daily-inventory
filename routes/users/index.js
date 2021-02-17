const Router = require('@koa/router');

const router = new Router({prefix: '/users'});

router.use(require('./root').routes())

module.exports = router;
