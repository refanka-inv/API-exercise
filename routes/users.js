const express = require("express");
const router = express.Router();
const UsersController = require("../controllers/users");

router.get("/", UsersController.showUsers);
router.post("/add", UsersController.insertUsers);
router.delete("/remove", UsersController.removeUsers);
router.put("/update", UsersController.reviseUsers);

module.exports = router;
