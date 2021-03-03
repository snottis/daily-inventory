const Router = require("@koa/router");
const {
  checkJwt,
  adminOnly,
  selfOrAdmin,
} = require("../../middlewares/authorization.js");
const {
  getAll,
  deleteUser,
  updateUser,
  getOneUser,
  createUser,
} = require("../../controllers/users");

const router = new Router();

router.get("/", getAll);

router.delete("/", deleteUser);

router.put("/", updateUser);

router.post("/", checkJwt, selfOrAdmin, createUser);

router.get("/:username", getOneUser);

module.exports = router;
