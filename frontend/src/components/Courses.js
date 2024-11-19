// Courses.js
import React, { useState } from 'react';
import './Courses.css';

const Courses = () => {
  const [selectedSemester, setSelectedSemester] = useState('1');
  const [selectedCourse, setSelectedCourse] = useState(null);

  const semesters = ["1", "2", "3", "4", "5", "6", "7", "8"];

  const coursesBySemester = {
    '1': [
      { 
        code: 'CS101', 
        name: 'Introduction to Programming',
        credits: 4,
        instructor: 'Dr. John Smith',
        description: 'Introduction to basic programming concepts and problem-solving techniques.',
        schedule: 'Mon, Wed 10:00-11:30 AM',
        classroom: 'Room 101',
        content: [
          { week: 1, topic: 'Introduction to Programming Languages', reading: 'Chapter 1' },
          { week: 2, topic: 'Variables and Data Types', reading: 'Chapter 2' },
          { week: 3, topic: 'Control Structures', reading: 'Chapter 3' },
          { week: 4, topic: 'Functions and Modules', reading: 'Chapter 4' },
          { week: 5, topic: 'Object-Oriented Programming', reading: 'Chapter 5' },
        ]
      },
      // ... other courses ...
    ],
    '2': [
      // ... semester 2 courses ...
    ]
  };

  const handleCourseClick = (course) => {
    setSelectedCourse(course);
  };

  const closeModal = () => {
    setSelectedCourse(null);
  };

  return (
    <div className="courses-container">
      <h2>Course Catalog</h2>
      
      <div className="semester-selection">
        <label htmlFor="semester-select">Select Semester:</label>
        <select 
          id="semester-select"
          value={selectedSemester} 
          onChange={(e) => setSelectedSemester(e.target.value)}
        >
          {semesters.map(semester => (
            <option key={semester} value={semester}>
              Semester {semester}
            </option>
          ))}
        </select>
      </div>

      <div className="courses-grid">
        {coursesBySemester[selectedSemester]?.map(course => (
          <div key={course.code} className="course-box" onClick={() => handleCourseClick(course)}>
            <h3>{course.code}: {course.name}</h3>
            <p><strong>Credits:</strong> {course.credits}</p>
            <p><strong>Instructor:</strong> {course.instructor}</p>
            <p><strong>Schedule:</strong> {course.schedule}</p>
            <p><strong>Classroom:</strong> {course.classroom}</p>
            <p className="course-description">{course.description}</p>
          </div>
        ))}
      </div>

      {selectedCourse && (
        <div className="course-modal">
          <div className="course-modal-content">
            <span className="close" onClick={closeModal}>&times;</span>
            <h2>{selectedCourse.code}: {selectedCourse.name}</h2>
            <p><strong>Instructor:</strong> {selectedCourse.instructor}</p>
            <p><strong>Schedule:</strong> {selectedCourse.schedule}</p>
            <p><strong>Classroom:</strong> {selectedCourse.classroom}</p>
            <h3>Course Content</h3>
            <table className="course-content-table">
              <thead>
                <tr>
                  <th>Week</th>
                  <th>Topic</th>
                  <th>Reading</th>
                </tr>
              </thead>
              <tbody>
                {selectedCourse.content.map((week, index) => (
                  <tr key={index}>
                    <td>{week.week}</td>
                    <td>{week.topic}</td>
                    <td>{week.reading}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
};

export default Courses;