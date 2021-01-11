const express = require("express");
const router = express.Router();
const UsersController = require("../controllers/users");
const { authentication } = require("../middlewares/authentication");

// router.use(authentication);
router.get("/", authentication, UsersController.showUsers);
router.post("/add", UsersController.insertUsers);
router.delete("/remove", UsersController.removeUsers);
router.put("/update", UsersController.reviseUsers);

module.exports = router;
