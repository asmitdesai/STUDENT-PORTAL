// TimeTable.js
import React, { useState } from 'react';
import './TimeTable.css';

const TimeTable = () => {
  const [selectedSemester, setSelectedSemester] = useState('1');

  const timeSlots = [
    '9:00 - 9:55',
    '10:00 - 10:55',
    '11:00 - 11:55',
    '12:00 - 12:55',
    '1:00 - 1:55',
    '2:00 - 2:55',
    '3:00 - 3:55',
    '4:00 - 4:55'
  ];

  const weekDays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];

  const timetableData = {
    '1': {
      Monday: {
        '9:00 - 9:55': { subject: 'Engineering Mathematics', room: 'Room 101', teacher: 'Dr. Smith' },
        '10:00 - 10:55': { subject: 'Physics', room: 'Lab 201', teacher: 'Dr. Johnson' },
        '11:00 - 11:55': { subject: 'Computer Programming', room: 'Lab 301', teacher: 'Prof. Williams' },
        '12:00 - 12:55': { subject: 'Break', room: '-', teacher: '-' },
        '1:00 - 1:55': { subject: 'English', room: 'Room 102', teacher: 'Prof. Davis' },
        '2:00 - 2:55': { subject: 'Physics Lab', room: 'Lab 201', teacher: 'Dr. Johnson' },
        '3:00 - 3:55': { subject: 'Physics Lab', room: 'Lab 201', teacher: 'Dr. Johnson' },
        '4:00 - 4:55': { subject: 'Free Hour', room: '-', teacher: '-' }
      },
      Tuesday: {
        '9:00 - 9:55': { subject: 'Computer Programming', room: 'Lab 301', teacher: 'Prof. Williams' },
        '10:00 - 10:55': { subject: 'Engineering Mathematics', room: 'Room 101', teacher: 'Dr. Smith' },
        '11:00 - 11:55': { subject: 'Physics', room: 'Lab 201', teacher: 'Dr. Johnson' },
        '12:00 - 12:55': { subject: 'Break', room: '-', teacher: '-' },
        '1:00 - 1:55': { subject: 'English Lab', room: 'Lang Lab', teacher: 'Prof. Davis' },
        '2:00 - 2:55': { subject: 'English Lab', room: 'Lang Lab', teacher: 'Prof. Davis' },
        '3:00 - 3:55': { subject: 'Computer Programming Lab', room: 'Lab 301', teacher: 'Prof. Williams' },
        '4:00 - 4:55': { subject: 'Computer Programming Lab', room: 'Lab 301', teacher: 'Prof. Williams' }
      },
      Wednesday: {
        '9:00 - 9:55': { subject: 'Physics', room: 'Lab 201', teacher: 'Dr. Johnson' },
        '10:00 - 10:55': { subject: 'Engineering Mathematics', room: 'Room 101', teacher: 'Dr. Smith' },
        '11:00 - 11:55': { subject: 'English', room: 'Room 102', teacher: 'Prof. Davis' },
        '12:00 - 12:55': { subject: 'Break', room: '-', teacher: '-' },
        '1:00 - 1:55': { subject: 'Computer Programming', room: 'Lab 301', teacher: 'Prof. Williams' },
        '2:00 - 2:55': { subject: 'Physics Lab', room: 'Lab 201', teacher: 'Dr. Johnson' },
        '3:00 - 3:55': { subject: 'Physics Lab', room: 'Lab 201', teacher: 'Dr. Johnson' },
        '4:00 - 4:55': { subject: 'Free Hour', room: '-', teacher: '-' }
      },
      Thursday: {
        '9:00 - 9:55': { subject: 'Engineering Mathematics', room: 'Room 101', teacher: 'Dr. Smith' },
        '10:00 - 10:55': { subject: 'Computer Programming', room: 'Lab 301', teacher: 'Prof. Williams' },
        '11:00 - 11:55': { subject: 'Physics', room: 'Lab 201', teacher: 'Dr. Johnson' },
        '12:00 - 12:55': { subject: 'Break', room: '-', teacher: '-' },
        '1:00 - 1:55': { subject: 'English', room: 'Room 102', teacher: 'Prof. Davis' },
        '2:00 - 2:55': { subject: 'Computer Programming Lab', room: 'Lab 301', teacher: 'Prof. Williams' },
        '3:00 - 3:55': { subject: 'Computer Programming Lab', room: 'Lab 301', teacher: 'Prof. Williams' },
        '4:00 - 4:55': { subject: 'Free Hour', room: '-', teacher: '-' }
      },
      Friday: {
        '9:00 - 9:55': { subject: 'Physics', room: 'Lab 201', teacher: 'Dr. Johnson' },
        '10:00 - 10:55': { subject: 'Engineering Mathematics', room: 'Room 101', teacher: 'Dr. Smith' },
        '11:00 - 11:55': { subject: 'Computer Programming', room: 'Lab 301', teacher: 'Prof. Williams' },
        '12:00 - 12:55': { subject: 'Break', room: '-', teacher: '-' },
        '1:00 - 1:55': { subject: 'English', room: 'Room 102', teacher: 'Prof. Davis' },
        '2:00 - 2:55': { subject: 'English Lab', room: 'Lang Lab', teacher: 'Prof. Davis' },
        '3:00 - 3:55': { subject: 'English Lab', room: 'Lang Lab', teacher: 'Prof. Davis' },
        '4:00 - 4:55': { subject: 'Free Hour', room: '-', teacher: '-' }
      }
    },
    '2': {
      Monday: {
        '9:00 - 9:55': { subject: 'Data Structures', room: 'Lab 301', teacher: 'Prof. Anderson' },
        '10:00 - 10:55': { subject: 'Digital Electronics', room: 'Room 201', teacher: 'Dr. Lee' },
        '11:00 - 11:55': { subject: 'Discrete Mathematics', room: 'Room 102', teacher: 'Dr. Taylor' },
        '12:00 - 12:55': { subject: 'Break', room: '-', teacher: '-' },
        '1:00 - 1:55': { subject: 'Engineering Mathematics II', room: 'Room 101', teacher: 'Dr. Smith' },
        '2:00 - 2:55': { subject: 'Data Structures Lab', room: 'Lab 301', teacher: 'Prof. Anderson' },
        '3:00 - 3:55': { subject: 'Data Structures Lab', room: 'Lab 301', teacher: 'Prof. Anderson' },
        '4:00 - 4:55': { subject: 'Free Hour', room: '-', teacher: '-' }
      },
       Tuesday: {
        '9:00 - 9:55': { subject: 'Digital Electronics', room: 'Room 201', teacher: 'Dr. Lee' },
        '10:00 - 10:55': { subject: 'Data Structures', room: 'Lab 301', teacher: 'Prof. Anderson' },
        '11:00 - 11:55': { subject: 'Discrete Mathematics', room: 'Room 102', teacher: 'Dr. Taylor' },
        '12:00 - 12:55': { subject: 'Break', room: '-', teacher: '-' },
        '1:00 - 1:55': { subject: 'Engineering Mathematics II', room: 'Room 101', teacher: 'Dr. Smith' },
        '2:00 - 2:55': { subject: 'Data Structures Lab', room: 'Lab 301', teacher: 'Prof. Anderson' },
        '3:00 - 3:55': { subject: 'Data Structures Lab', room: 'Lab 301', teacher: 'Prof. Anderson' },
        '4:00 - 4:55': { subject: 'Free Hour', room: '-', teacher: '-' }
      },
      Wednesday: {
        '9:00 - 9:55': { subject: 'Digital Electronics', room: 'Room 201', teacher: 'Dr. Lee' },
        '10:00 - 10:55': { subject: 'Data Structures', room: 'Lab 301', teacher: 'Prof. Anderson' },
        '11:00 - 11:55': { subject: 'Discrete Mathematics', room: 'Room 102', teacher: 'Dr. Taylor' },
        '12:00 - 12:55': { subject: 'Break', room: '-', teacher: '-' },
        '1:00 - 1:55': { subject: 'Engineering Mathematics II', room: 'Room 101', teacher: 'Dr. Smith' },
        '2:00 - 2:55': { subject: 'Data Structures Lab', room: 'Lab 301', teacher: 'Prof. Anderson' },
        '3:00 - 3:55': { subject: 'Data Structures Lab', room: 'Lab 301', teacher: 'Prof. Anderson' },
        '4:00 - 4:55': { subject: 'Free Hour', room: '-', teacher: '-' }
      },
      Thursday: {
        '9:00 - 9:55': { subject: 'Digital Electronics', room: 'Room 201', teacher: 'Dr. Lee' },
        '10:00 - 10:55': { subject: 'Data Structures', room: 'Lab 301', teacher: 'Prof. Anderson' },
        '11:00 - 11:55': { subject: 'Discrete Mathematics', room: 'Room 102', teacher: 'Dr. Taylor' },
        '12:00 - 12:55': { subject: 'Break', room: '-', teacher: '-' },
        '1:00 - 1:55': { subject: 'Engineering Mathematics II', room: 'Room 101', teacher: 'Dr. Smith' },
        '2:00 - 2:55': { subject: 'Data Structures Lab', room: 'Lab 301', teacher: 'Prof. Anderson' },
        '3:00 - 3:55': { subject: 'Data Structures Lab', room: 'Lab 301', teacher: 'Prof. Anderson' },
        '4:00 - 4:55': { subject: 'Free Hour', room: '-', teacher: '-' }
      },
      Friday: {
        '9:00 - 9:55': { subject: 'Digital Electronics', room: 'Room 201', teacher: 'Dr. Lee' },
        '10:00 - 10:55': { subject: 'Data Structures', room: 'Lab 301', teacher: 'Prof. Anderson' },
        '11:00 - 11:55': { subject: 'Discrete Mathematics', room: 'Room 102', teacher: 'Dr. Taylor' },
        '12:00 - 12:55': { subject: 'Break', room: '-', teacher: '-' },
        '1:00 - 1:55': { subject: 'Free Hour', room: '-', teacher: '-' },
        '2:00 - 2:55': { subject: 'Data Structures Lab', room: 'Lab 301', teacher: 'Prof. Anderson' },
        '3:00 - 3:55': { subject: 'Data Structures Lab', room: 'Lab 301', teacher: 'Prof. Anderson' },
        '4:00 - 4:55': { subject: 'Free Hour', room: '-', teacher: '-' }
      }
    }
  };

  return (
    <div className="timetable-container">
      <h2>Weekly Time Table</h2>
      
      <div className="semester-selector">
        <label htmlFor="semester">Select Semester: </label>
        <select 
          id="semester"
          value={selectedSemester}
          onChange={(e) => setSelectedSemester(e.target.value)}
        >
          <option value="1">Semester 1</option>
          <option value="2">Semester 2</option>
        </select>
      </div>

      <div className="timetable-wrapper">
        <table className="timetable">
          <thead>
            <tr>
              <th>Time</th>
              {weekDays.map(day => (
                <th key={day}>{day}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {timeSlots.map(timeSlot => (
              <tr key={timeSlot}>
                <td className="time-slot">{timeSlot}</td>
                {weekDays.map(day => {
                  const cell = timetableData[selectedSemester]?.[day]?.[timeSlot] || { 
                    subject: '-', 
                    room: '-', 
                    teacher: '-' 
                  };
                  return (
                    <td 
                      key={`${day}-${timeSlot}`}
                      className={`${cell.subject === 'Break' ? 'break-cell' : ''} 
                                  ${cell.subject === 'Free Hour' ? 'free-hour-cell' : ''}
                                  ${cell.subject.includes('Lab') ? 'lab-cell' : ''}`}
                    >
                      <div className="subject">{cell.subject}</div>
                      <div className="room">{cell.room}</div>
                      <div className="teacher">{cell.teacher}</div>
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="timetable-legend">
        <div className="legend-item"><span className="legend-color lab-color"></span> Lab Sessions</div>
        <div className="legend-item"><span className="legend-color break-color"></span> Break</div>
        <div className="legend-item"><span className="legend-color free-hour-color"></span> Free Hour</div>
      </div>
    </div>
  );
};

export default TimeTable;