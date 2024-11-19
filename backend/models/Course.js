const mongoose = require("mongoose");

const CourseSchema = new mongoose.Schema({
  courseName: { type: String, required: true },
  courseCode: { type: String, required: true },
  coursecredits: { type: Number, required: true }
});

module.exports = mongoose.model("Course", CourseSchema);
