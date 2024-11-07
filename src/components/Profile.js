import React from 'react';
import './Profile.css';

function Profile({ onBack }) {
  // Sample student data
  const studentData = {
    photo: 'https://via.placeholder.com/150', // Placeholder image
    name: 'John Doe',
    semester: '2nd',
    section: 'A',
    branch: 'Computer Science',
    cgpa: '8.5',
    sgpa: '3.7',
    parentDetails: {
      father: {
        name: 'Mr. Doe',
        occupation: 'Engineer',
        phone: '123-456-7890',
        address: '123 Main St, Cityville',
      },
      mother: {
        name: 'Mrs. Doe',
        occupation: 'Teacher',
        phone: '098-765-4321',
        address: '456 Elm St, Cityville',
      },
    },
  };

  return (
    <div className="profile">
      <h2 className="profile-heading">Profile</h2>
      <div className="profile-content">
        <div className="student-details">
          <img src={studentData.photo} alt="Student" className="profile-photo" />
          <h3>{studentData.name}</h3>
          <p><strong>Semester:</strong> {studentData.semester}</p>
          <p><strong>Section:</strong> {studentData.section}</p>
          <p><strong>Branch:</strong> {studentData.branch}</p>
          <p><strong>CGPA:</strong> {studentData.cgpa}</p>
          <p><strong>SGPA:</strong> {studentData.sgpa}</p>
        </div>
        <div className="parent-details">
          <h4>Parent Details</h4>
          <div className="parent">
            <h5>Father</h5>
            <p><strong>Name:</strong> {studentData.parentDetails.father.name}</p>
            <p><strong>Occupation:</strong> {studentData.parentDetails.father.occupation}</p>
            <p><strong>Phone:</strong> {studentData.parentDetails.father.phone}</p>
            <p><strong>Address:</strong> {studentData.parentDetails.father.address}</p>
          </div>
          <div className="parent">
            <h5>Mother</h5>
            <p><strong>Name:</strong> {studentData.parentDetails.mother.name}</p>
            <p><strong>Occupation:</strong> {studentData.parentDetails.mother.occupation}</p>
            <p><strong>Phone:</strong> {studentData.parentDetails.mother.phone}</p>
            <p><strong>Address:</strong> {studentData.parentDetails.mother.address}</p>
          </div>
        </div>
      </div>
      <button onClick={onBack}>Back to Dashboard</button>
    </div>
  );
}

export default Profile;