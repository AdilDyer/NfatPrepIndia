const express = require("express");
const router = express.Router();
const ExpressError = require("../utils/ExpressError");

//home route
router.route("/").get((req, res, next) => {
  res.render("home/index.ejs");
});

module.exports = router;
