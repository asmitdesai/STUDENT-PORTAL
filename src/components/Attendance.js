// Attendance.js
import React, { useState } from 'react';
import './Attendance.css';

const Attendance = () => {
  const [selectedSemester, setSelectedSemester] = useState('1');

  // Sample course data for different semesters
  const coursesBySemester = {
    '1': [
      { code: 'CS101', name: 'Introduction to Programming', attended: 32, total: 40 },
      { code: 'MA101', name: 'Engineering Mathematics I', attended: 35, total: 42 },
      { code: 'PH101', name: 'Engineering Physics', attended: 30, total: 38 },
      { code: 'EN101', name: 'English Communication', attended: 28, total: 35 },
      { code: 'ME101', name: 'Engineering Mechanics', attended: 33, total: 40 },
    ],
    '2': [
      { code: 'CS201', name: 'Data Structures', attended: 38, total: 45 },
      { code: 'MA201', name: 'Engineering Mathematics II', attended: 36, total: 82 },
      { code: 'EC201', name: 'Digital Electronics', attended: 32, total: 40 },
      { code: 'CS202', name: 'Object Oriented Programming', attended: 34, total: 42 },
      { code: 'CS203', name: 'Computer Organization', attended: 30, total: 38 },
    ],
    // Add more semesters as needed
  };

  const calculatePercentage = (attended, total) => {
    return ((attended / total) * 100).toFixed(2);
  };

  const calculateOverallAttendance = (courses) => {
    const totalAttended = courses.reduce((sum, course) => sum + course.attended, 0);
    const totalClasses = courses.reduce((sum, course) => sum + course.total, 0);
    return calculatePercentage(totalAttended, totalClasses);
  };

  return (
    <div className="attendance-container">
      <h2>Attendance Record</h2>
      
      <div className="semester-selector">
        <label htmlFor="semester">Select Semester: </label>
        <select 
          id="semester" 
          value={selectedSemester} 
          onChange={(e) => setSelectedSemester(e.target.value)}
        >
          {Object.keys(coursesBySemester).map((sem) => (
            <option key={sem} value={sem}>Semester {sem}</option>
          ))}
        </select>
      </div>

      <div className="attendance-table">
        <table>
          <thead>
            <tr>
              <th>Course Code</th>
              <th>Course Name</th>
              <th>Classes Attended</th>
              <th>Total Classes</th>
              <th>Attendance %</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {coursesBySemester[selectedSemester].map((course) => (
              <tr key={course.code}>
                <td>{course.code}</td>
                <td>{course.name}</td>
                <td>{course.attended}</td>
                <td>{course.total}</td>
                <td>{calculatePercentage(course.attended, course.total)}%</td>
                <td className={calculatePercentage(course.attended, course.total) >= 75 ? 'status-ok' : 'status-low'}>
                  {calculatePercentage(course.attended, course.total) >= 75 ? 'Eligible' : 'Not Eligible'}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="attendance-summary">
        <div className="overall-attendance">
          Overall Attendance: 
          <span className={calculateOverallAttendance(coursesBySemester[selectedSemester]) >= 75 ? 'status-ok' : 'status-low'}>
            {calculateOverallAttendance(coursesBySemester[selectedSemester])}%
          </span>
        </div>
        <div className="attendance-notice">
          Note: Minimum 75% attendance is required to be eligible for end semester examinations
        </div>
      </div>
    </div>
  );
};

export default Attendance;