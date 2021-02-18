const Router = require('@koa/router');

const router = new Router({prefix: '/users'});

router.use(require('./root').routes())
router.use('/create', require('./create').routes())

module.exports = router;
