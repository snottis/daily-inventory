const Router = require("@koa/router");
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

router.post("/", createUser);

router.get("/:uname", getOneUser);

module.exports = router;
