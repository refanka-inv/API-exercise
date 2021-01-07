const router = require("express").Router();
const routerUsers = require("./users");
const routerAdmin = require("./admin");

router.use("/users", routerUsers);
router.use("/admin", routerAdmin);

module.exports = router;
