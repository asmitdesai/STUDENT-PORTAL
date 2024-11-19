// Dashboard.js
import React, { useState } from 'react';
import './Dashboard.css'
import Profile from './Profile';
import FeePayment from './FeePayment';
import Attendance from './Attendance';
import Results from './Results';
import Courses from './Courses';
import Placements from './Placements';
import ExamTimeTable from './ExamTimeTable';
import AdmitCard from './AdmitCard';
import Grievances from './Grievances';
import TimeTable from './TimeTable';
function Dashboard({ onLogout }) {
  const [activeTab, setActiveTab] = useState('home');
  const [selectedSemester, setSelectedSemester] = useState('1');

  const announcements = [
    {
      id: 1,
      title: "Techno Cultural Fest",
      content: "The annual Techno Cultural Fest 'Spectrum 2024' is in 2 weeks. Get ready for exciting events including coding competitions, robotics workshops, cultural performances, and more!",
      date: "2024-02-15"
    },
    {
      id: 2,
      title: "Mid-Semester Examinations",
      content: "Mid-semester examinations start in 12 days. Time table has been uploaded to the portal. Prepare well!",
      date: "2024-02-20"
    },
    {
      id: 3,
      title: "Workshop on AI & Machine Learning",
      content: "A two-day workshop on AI and Machine Learning will be conducted by industry experts from Google. Registration is mandatory. Limited seats available.",
      date: "2024-02-25"
    },
    {
      id: 4,
      title: "Sports Day Registration",
      content: "Annual Sports Meet 2024 registrations are now open. Register for track and field events, team sports, and indoor games through the sports portal.",
      date: "2024-03-01"
    },
    {
      id: 5,
      title: "Campus Placement Drive",
      content: "Major tech companies will be visiting for campus placements next month. Pre-placement talks start next week. Check eligibility criteria on the placement portal.",
      date: "2024-03-10"
    }
  ];

  const events = [
    { date: '2024-02-15', title: 'Techno Cultural Fest' },
    { date: '2024-02-20', title: 'Mid-Semester Examinations Start' },
    { date: '2024-02-25', title: 'AI & ML Workshop' },
    { date: '2024-03-01', title: 'Sports Day' },
    { date: '2024-03-10', title: 'Campus Placement Drive' },
    { date: '2024-03-15', title: 'End Semester Exams Start' },
    { date: '2024-03-30', title: 'End Semester Exams End' },
  ];

  const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  const currentDate = new Date();
  const [currentMonth, setCurrentMonth] = useState(currentDate.getMonth());
  const [currentYear, setCurrentYear] = useState(currentDate.getFullYear());

  const getFirstDayOfMonth = (month, year) => {
    return new Date(year, month, 1).getDay();
  };

  const renderCalendar = () => {
    const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
    const firstDay = getFirstDayOfMonth(currentMonth, currentYear);
    const days = [];

    for (let i = 0; i < firstDay; i++) {
      days.push(<div key={`empty-${i}`} className="calendar-day empty"></div>);
    }

    for (let day = 1; day <= daysInMonth; day++) {
      const date = `${currentYear}-${String(currentMonth + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
      const dayEvents = events.filter(event => event.date === date);

      days.push(
        <div key={day} className={`calendar-day ${dayEvents.length > 0 ? 'has-event' : ''}`}>
          <span className="day-number">{day}</span>
          {dayEvents.map((event, index) => (
            <div key={index} className="event-indicator" title={event.title}>
              {event.title}
            </div>
          ))}
        </div>
      );
    }

    return (
      <div className="calendar-section">
        <div className="calendar-header">
          <button onClick={() => {
            if (currentMonth === 0) {
              setCurrentMonth(11);
              setCurrentYear(currentYear - 1);
            } else {
              setCurrentMonth(currentMonth - 1);
            }
          }}>&lt;</button>
          <h2>{months[currentMonth]} {currentYear}</h2>
          <button onClick={() => {
            if (currentMonth === 11) {
              setCurrentMonth(0);
              setCurrentYear(currentYear + 1);
            } else {
              setCurrentMonth(currentMonth + 1);
            }
          }}>&gt;</button>
        </div>
        <div className="calendar-grid">
          {days}
        </div>
      </div>
    );
  };

  const semesters = ["1", "2", "3", "4", "5", "6", "7", "8"];

  const coursesBySemester = {
    '1': [
      { code: 'CS101', name: 'Introduction to Programming'},
      { code: 'MA101', name: 'Engineering Mathematics I' },
      { code: 'PH101', name: 'Engineering Physics' },
      { code: 'EN101', name: 'English Communication' },
      { code: 'ME101', name: 'Engineering Mechanics'},
    ],
  };

  return (
    <div className="dashboard">
      <div className="sidebar">
        <button className={activeTab === 'home' ? 'active' : ''} onClick={() => setActiveTab('home')}>Home</button>
        <button className={activeTab === 'profile' ? 'active' : ''} onClick={() => setActiveTab('profile')}>Profile</button>
        <button className={activeTab === 'attendance' ? 'active' : ''} onClick={() => setActiveTab('attendance')}>Attendance</button>
        <button className={activeTab === 'results' ? 'active' : ''} onClick={() => setActiveTab('results')}>Results</button>
        <button className={activeTab === 'timetable' ? 'active' : ''} onClick={() => setActiveTab('timetable')}>Time Table</button>
        <button className={activeTab === 'calendar' ? 'active' : ''} onClick={() => setActiveTab('calendar')}>Calendar of Events</button>
        <button className={activeTab === 'courses' ? 'active' : ''} onClick={() => setActiveTab('courses')}>Courses</button>
        <button className={activeTab === 'examtimetable' ? 'active': ''} onClick={() => setActiveTab('examtimetable')}>Exam Time Table</button>
        <button className={activeTab === 'admitcard' ? 'active' : ''} onClick={() => setActiveTab('admitcard')}>Admit Card</button>
        <button className={activeTab === 'placements' ? 'active' : ''} onClick={() => setActiveTab('placements')}>Placements</button>
        <button className={activeTab === 'grievances' ? 'active' : ''} onClick={() => setActiveTab('grievances')}>Grievances</button>
        <button className={activeTab === 'feepayment' ? 'active' : ''} onClick={() => setActiveTab('feepayment')}>Fee Payment</button>
        <button className="logout-button" onClick={onLogout}>Logout</button>
      </div>

      <div className="main-content">
        {(() => {
          switch (activeTab) {
            case 'home':
              return (
                <div className="overview-section">
                  <h2>Welcome to your Dashboard</h2>
                  <div className="announcements">
                    <h3>Latest Announcements</h3>
                    <ul>
                      {announcements.map(announcement => (
                        <li key={announcement.id}>
                          <h4>{announcement.title}</h4>
                          <p>{announcement.content}</p>
                          <span className="date">Posted: {announcement.date}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            case 'profile':
              return <Profile onBack={() => setActiveTab('home')} />;
            case 'attendance':
              return <Attendance />;
            case 'results':
              return <Results />;
            case 'timetable':
              return <TimeTable />;
            case 'calendar':
              return renderCalendar();
            case 'courses':
              return  <Courses />
            case 'placements':
              return <Placements />;
            case 'grievances':
              return <Grievances />;
            case 'feepayment':
              return <FeePayment />;
            case 'examtimetable':
              return <ExamTimeTable />;
            case 'admitcard':
              return <AdmitCard />;
            default:
              return null;
          }
        })()}
      </div>
    </div>
  );
}
export default Dashboard;