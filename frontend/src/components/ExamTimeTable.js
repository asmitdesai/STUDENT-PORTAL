import React, { useState } from 'react';
import './ExamTimeTable.css';

const ExamTimeTable = () => {
  const [selectedSemester, setSelectedSemester] = useState('1');

  const examSchedules = {
    '1': [
      { type: 'Mid Semester', date: '2024-03-15', time: '10:00 AM - 12:00 PM', subject: 'CS101: Introduction to Programming' },
      { type: 'Mid Semester', date: '2024-03-17', time: '10:00 AM - 12:00 PM', subject: 'MA101: Engineering Mathematics I' },
      { type: 'Mid Semester', date: '2024-03-19', time: '10:00 AM - 12:00 PM', subject: 'PH101: Engineering Physics' },
      { type: 'Project Deadline', date: '2024-04-10', time: '11:59 PM', subject: 'CS101: Programming Project' },
      { type: 'End Semester', date: '2024-05-10', time: '09:00 AM - 12:00 PM', subject: 'CS101: Introduction to Programming' },
      { type: 'End Semester', date: '2024-05-12', time: '09:00 AM - 12:00 PM', subject: 'MA101: Engineering Mathematics I' },
      { type: 'End Semester', date: '2024-05-14', time: '09:00 AM - 12:00 PM', subject: 'PH101: Engineering Physics' },
    ],
    '2': [
      { type: 'Mid Semester', date: '2024-03-16', time: '10:00 AM - 12:00 PM', subject: 'CS201: Data Structures' },
      { type: 'Mid Semester', date: '2024-03-18', time: '10:00 AM - 12:00 PM', subject: 'MA201: Engineering Mathematics II' },
      { type: 'Mid Semester', date: '2024-03-20', time: '10:00 AM - 12:00 PM', subject: 'EC201: Digital Electronics' },
      { type: 'Project Deadline', date: '2024-04-15', time: '11:59 PM', subject: 'CS201: Data Structures Project' },
      { type: 'End Semester', date: '2024-05-11', time: '09:00 AM - 12:00 PM', subject: 'CS201: Data Structures' },
      { type: 'End Semester', date: '2024-05-13', time: '09:00 AM - 12:00 PM', subject: 'MA201: Engineering Mathematics II' },
      { type: 'End Semester', date: '2024-05-15', time: '09:00 AM - 12:00 PM', subject: 'EC201: Digital Electronics' },
    ],
  };

  return (
    <div className="exam-timetable">
      <h2>Exam Time Table</h2>
      <div className="semester-selector">
        <label htmlFor="semester-select">Select Semester: </label>
        <select 
          id="semester-select"
          value={selectedSemester} 
          onChange={(e) => setSelectedSemester(e.target.value)}
        >
          {Object.keys(examSchedules).map(sem => (
            <option key={sem} value={sem}>Semester {sem}</option>
          ))}
        </select>
      </div>
      <table className="exam-schedule">
        <thead>
          <tr>
            <th>Type</th>
            <th>Date</th>
            <th>Time</th>
            <th>Subject</th>
          </tr>
        </thead>
        <tbody>
          {examSchedules[selectedSemester].map((exam, index) => (
            <tr key={index} className={exam.type.toLowerCase().replace(' ', '-')}>
              <td>{exam.type}</td>
              <td>{exam.date}</td>
              <td>{exam.time}</td>
              <td>{exam.subject}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ExamTimeTable;