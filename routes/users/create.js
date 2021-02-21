const Router = require("@koa/router");

const { createUser } = require("../../controllers/users.js");
const {
  checkJwt,
  adminOnly,
  selfOrAdmin,
} = require("../../middlewares/authorization.js");

const router = new Router();

router.post("/", checkJwt, selfOrAdmin, createUser);

module.exports = router;
