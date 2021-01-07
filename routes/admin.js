const express = require("express");
const router = express.Router();
const AdminController = require("../controllers/admin");

// router.get("/", AdminController.showAdmin);
router.post("/register", AdminController.registerAdmin);
router.post("/login", AdminController.signinAdmin);

module.exports = router;
