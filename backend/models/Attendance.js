const mongoose = require("mongoose");

const AttendanceSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  courseId: { type: mongoose.Schema.Types.ObjectId, ref: "Course", required: true },
  totalClasses: { type: Number, required: true },
  attendedClasses: { type: Number, required: true },
});

module.exports = mongoose.model("Attendance", AttendanceSchema);
