const Router = require("@koa/router");

const router = new Router({ prefix: "/api" });

router.use(require("./users").routes());
router.use(require("./auth").routes());

module.exports = router;
