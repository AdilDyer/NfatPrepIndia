const Course = require("../models/course");

let createCourse = async () => {
  try {
    const course1 = new Course({
      title: "Integrated Btech-Mtech Course ",
      price: 100,
      description: "this is a veryasdf good course ",
    });
    course1.save();
  } catch (err) {
    console.log(err);
  }
};

// createCourse();
