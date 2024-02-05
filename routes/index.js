const express = require("express");
const router = express.Router();
const ExpressError = require("../utils/ExpressError");

//home route
router.route("/").get((req, res, next) => {
  res.render("index.ejs");
});





router.all("*", (req, res, next) => {
  next(new ExpressError(404, "page not found !"));
});


module.exports = router;
