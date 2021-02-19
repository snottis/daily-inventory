const Router = require("@koa/router");
const { getAll } = require("../../controllers/users");

const router = new Router();

router.get("/", getAll);

module.exports = router;
