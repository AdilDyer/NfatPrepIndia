const express = require("express");
const router = express.Router({ mergeParams: true });
const User = require("../models/user");
const wrapAsync = require("../utils/wrapAsync");
const registerController = require("../controllers/register");
router
  .route("/")
  .get(registerController.registerPage)
  .post(registerController.signup);

module.exports = router;
