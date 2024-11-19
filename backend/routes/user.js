const express = require("express");
const User = require("../models/User");

const router = express.Router();

// Get User Profile
router.get("/profile/:id", async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) return res.status(404).json({ message: "User not found" });

    res.status(200).json(user);
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
});

// Get Courses by Semester
router.get("/courses/:semester", async (req, res) => {
  try {
    const { semester } = req.params;
    const courses = await getCoursesForSemester(semester); // Simulate database fetch
    res.status(200).json(courses);
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
});

// Get Attendance
router.get("/attendance/:id", async (req, res) => {
  try {
    const attendance = await getAttendanceForUser(req.params.id); // Simulate database fetch
    res.status(200).json(attendance);
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
});

// Get Results
router.get("/results/:id", async (req, res) => {
  try {
    const results = await getResultsForUser(req.params.id); // Simulate database fetch
    res.status(200).json(results);
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
});

// Mock Functions for Data


async function getAttendanceForUser(userId) {
  // Replace with database logic
  return { totalClasses: 50, attendedClasses: 45 };
}

async function getResultsForUser(userId) {
  // Replace with database logic
  return [
    { subject: "Mathematics", marks: 85 },
    { subject: "Physics", marks: 90 },
  ];
}

module.exports = router;
