const Router = require("@koa/router");

const { create } = require("../../controllers/users.js");

const router = new Router();

router.post("/", create);

module.exports = router;
