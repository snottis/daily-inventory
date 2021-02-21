const Router = require("@koa/router");
const { login } = require("../../controllers/auth");

const router = new Router();

router.post("/login", login);

module.exports = router;
