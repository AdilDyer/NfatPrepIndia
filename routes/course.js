const express = require("express");
const router = express.Router();

router.route("/").get( async (req, res) => {
  const allCourses = await Course.find({});
  res.render("./showCourse.ejs", { allCourses });
});

module.exports = router;
