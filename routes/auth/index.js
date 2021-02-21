const Router = require("@koa/router");

const router = new Router({ prefix: "/auth" });

router.use(require("./root").routes());

module.exports = router;
