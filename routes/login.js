const express = require("express");
const router = express.Router({ mergeParams: true });
const User = require("../models/user");
const wrapAsync = require("../utils/wrapAsync");
const loginController = require("../controllers/login");

router.route("/").get(loginController.login).post(loginController.authenticate);

module.exports = router;
