const Router = require("@koa/router");

const { createUser } = require("../../controllers/users.js");

const router = new Router();

router.post("/", createUser);

module.exports = router;
