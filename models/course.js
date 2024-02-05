const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const courseSchema = new Schema({
  image: {
    type: String,
    default:
      "https://images.unsplash.com/photo-1511300276866-a284652b55c3?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    set: (v) =>
      v === ""
        ? "https://images.unsplash.com/photo-1511300276866-a284652b55c3?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        : v,
  },
  price: {
      type: Number,
      
  },
  title: {
    type: String,
    required: true,
  },

  description: String,
});

const Course = mongoose.model("Course", courseSchema);

module.exports = Course;
