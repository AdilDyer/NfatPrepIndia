const wrapAsync = require("../utils/wrapAsync");
const Course = require("../models/course");

module.exports.showcourse = wrapAsync(async (req, res) => {
  const allCourses = await Course.find({});
  res.render("course/showCourse.ejs", { allCourses });
});
