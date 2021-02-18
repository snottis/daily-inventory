const Router = require('@koa/router');

const users = require('../../controllers/users.js')

const router = new Router();

router.get('/', users.create);

module.exports = router;
