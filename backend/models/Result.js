const mongoose = require("mongoose");

const ResultSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  courseId: { type: mongoose.Schema.Types.ObjectId, ref: "Course", required: true },
  marksObtained: { type: Number, required: true },
  totalMarks: { type: Number, required: true },
});

module.exports = mongoose.model("Result", ResultSchema);
