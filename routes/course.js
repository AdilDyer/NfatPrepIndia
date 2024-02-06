const express = require("express");
const router = express.Router();
const Course = require("../models/course");
const wrapAsync = require("../utils/wrapAsync");
const courseController = require("../controllers/course");

router.route("/").get(courseController.showcourse);

module.exports = router;
