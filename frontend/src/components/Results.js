import React, { useState } from 'react';
import './Results.css';

const Results = () => {
  const results = {
    'Semester 1': {
      subjects: [
        {
          code: 'CS101',
          name: 'Introduction to Programming',
          midSem: 25,
          assignments: 18,
          project: 28,
          endSem: 18,
          total: 89,
          grade: 'A'
        },
        {
          code: 'MA101',
          name: 'Engineering Mathematics I',
          midSem: 22,
          assignments: 15,
          project: 25,
          endSem: 16,
          total: 78,
          grade: 'B+'
        },
        {
          code: 'PH101',
          name: 'Engineering Physics',
          midSem: 28,
          assignments: 19,
          project: 27,
          endSem: 19,
          total: 93,
          grade: 'A+'
        },
        {
          code: 'EN101',
          name: 'English Communication',
          midSem: 26,
          assignments: 17,
          project: 26,
          endSem: 17,
          total: 86,
          grade: 'A'
        },
        {
          code: 'ME101',
          name: 'Engineering Mechanics',
          midSem: 24,
          assignments: 16,
          project: 24,
          endSem: 16,
          total: 80,
          grade: 'A-'
        },
        {
          code: 'CH101',
          name: 'Engineering Chemistry',
          midSem: 27,
          assignments: 18,
          project: 26,
          endSem: 18,
          total: 89,
          grade: 'A'
        }
      ],
      sgpa: 9.1
    }
  };

  const [selectedSemester, setSelectedSemester] = useState('Semester 1');
  
  const gradePoints = {
    'A+': 10,
    'A': 9,
    'A-': 8.5,
    'B+': 8,
    'B': 7,
    'B-': 6.5,
    'C+': 6,
    'C': 5,
    'D': 4,
    'F': 0
  };

  const calculateCGPA = () => {
    let totalPoints = 0;
    let totalSubjects = 0;
    
    Object.values(results).forEach(semester => {
      semester.subjects.forEach(subject => {
        totalPoints += gradePoints[subject.grade];
        totalSubjects++;
      });
    });
    
    return (totalPoints / totalSubjects).toFixed(2);
  };

  return (
    <div className="results-container">
      <div className="results-header-section">
        <div className="gpa-cards">
          <div className="gpa-card">
            <h3>Semester GPA</h3>
            <div className="gpa-value">{results[selectedSemester].sgpa}</div>
          </div>
          <div className="gpa-card">
            <h3>Cumulative GPA</h3>
            <div className="gpa-value">{calculateCGPA()}</div>
          </div>
        </div>
        
        <div className="semester-selector-container">
          <h2>Academic Results</h2>
          <div className="semester-selection">
            <label>Select Semester: </label>
            <select 
              value={selectedSemester}
              onChange={(e) => setSelectedSemester(e.target.value)}
            >
              {Object.keys(results).map(sem => (
                <option key={sem} value={sem}>{sem}</option>
              ))}
            </select>
          </div>
        </div>
      </div>

      <div className="results-table">
        <table>
          <thead>
            <tr>
              <th>Course Code</th>
              <th>Course Name</th>
              <th>Mid Sem (30)</th>
              <th>Assignments (20)</th>
              <th>Project (30)</th>
              <th>End Sem (20)</th>
              <th>Total (100)</th>
              <th>Grade</th>
            </tr>
          </thead>
          <tbody>
            {results[selectedSemester].subjects.map((subject) => (
              <tr key={subject.code}>
                <td>{subject.code}</td>
                <td>{subject.name}</td>
                <td>{subject.midSem}</td>
                <td>{subject.assignments}</td>
                <td>{subject.project}</td>
                <td>{subject.endSem}</td>
                <td>{subject.total}</td>
                <td className={`grade grade-${subject.grade.charAt(0)}`}>
                  {subject.grade}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="grade-legend">
        <h3>Grade Scale</h3>
        <div className="grade-scale">
          <div className="grade-item">
            <span className="grade grade-A">A+</span>
            <span>10</span>
          </div>
          <div className="grade-item">
            <span className="grade grade-A">A</span>
            <span>9</span>
          </div>
          <div className="grade-item">
            <span className="grade grade-A">A-</span>
            <span>8.5</span>
          </div>
          <div className="grade-item">
            <span className="grade grade-B">B+</span>
            <span>8</span>
          </div>
          <div className="grade-item">
            <span className="grade grade-B">B</span>
            <span>7</span>
          </div>
          <div className="grade-item">
            <span className="grade grade-C">C+</span>
            <span>6</span>
          </div>
          <div className="grade-item">
            <span className="grade grade-C">C</span>
            <span>5</span>
          </div>
          <div className="grade-item">
            <span className="grade grade-D">D</span>
            <span>4</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Results;