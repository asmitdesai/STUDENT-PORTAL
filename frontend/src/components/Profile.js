// Profile.js
import React from 'react';
function Profile({ onBack }) {
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
    <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-4">Profile</h2>
      <div className="flex flex-col md:flex-row w-full">
        <div className="student-details w-full md:w-1/3 text-center">
          <img src={studentData.photo} alt="Student" className="profile-photo rounded-full w-32 h-32 mx-auto mb-4" />
          <h3 className="text-xl font-bold">{studentData.name}</h3>
          <p><strong>Semester:</strong> {studentData.semester}</p>
          <p><strong>Section:</strong> {studentData.section}</p>
          <p><strong>Branch:</strong> {studentData.branch}</p>
          <p><strong>CGPA:</strong> {studentData.cgpa}</p>
          <p><strong>SGPA:</strong> {studentData.sgpa}</p>
        </div>
        <div className="parent-details w-full md:w-2/3 p-4 border rounded-lg bg-gray-100">
          <h4 className="text-lg font-semibold mb-2">Parent Details</h4>
          <div className="parent mb-4">
            <h5 className="font-bold">Father</h5>
            <p><strong>Name:</strong> {studentData.parentDetails.father.name}</p>
            <p><strong>Occupation:</strong> {studentData.parentDetails.father.occupation}</p>
            <p><strong>Phone:</strong> {studentData.parentDetails.father.phone}</p>
            <p><strong>Address:</strong> {studentData.parentDetails.father.address}</p>
          </div>
          <div className="parent">
            <h5 className="font-bold">Mother</h5>
            <p><strong>Name:</strong> {studentData.parentDetails.mother.name}</p>
            <p><strong>Occupation:</strong> {studentData.parentDetails.mother.occupation}</p>
            <p><strong>Phone:</strong> {studentData.parentDetails.mother.phone}</p>
            <p><strong>Address:</strong> {studentData.parentDetails.mother.address}</p>
          </div>
        </div>
      </div>
      <button onClick={onBack} className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">Back to Dashboard</button>
    </div>
  );
}

export default Profile;