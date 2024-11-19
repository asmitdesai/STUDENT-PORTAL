import React, { useState } from 'react';

const Attendance = () => {
  const [selectedSemester, setSelectedSemester] = useState('1');

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
    <div className="max-w-screen-xl mx-auto px-12 py-16 bg-gray-100 rounded-xl shadow-xl">
      <h2 className="text-4xl font-semibold text-center text-gray-800 mb-8 tracking-wide">Attendance Record</h2>

      <div className="text-center mb-12">
        <label htmlFor="semester" className="text-xl font-medium text-gray-700 mr-4">Select Semester: </label>
        <select
          id="semester"
          value={selectedSemester}
          onChange={(e) => setSelectedSemester(e.target.value)}
          className="p-3 text-lg border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none"
        >
          {Object.keys(coursesBySemester).map((sem) => (
            <option key={sem} value={sem}>Semester {sem}</option>
          ))}
        </select>
      </div>

      <div className="overflow-x-auto mb-12 rounded-lg shadow-xl">
        <table className="w-full table-auto border-collapse bg-white rounded-lg">
          <thead className="bg-indigo-700 text-white">
            <tr>
              <th className="p-4 text-left">Course Code</th>
              <th className="p-4 text-left">Course Name</th>
              <th className="p-4 text-left">Classes Attended</th>
              <th className="p-4 text-left">Total Classes</th>
              <th className="p-4 text-left">Attendance %</th>
              <th className="p-4 text-left">Status</th>
            </tr>
          </thead>
          <tbody>
            {coursesBySemester[selectedSemester].map((course) => (
              <tr key={course.code} className="hover:bg-gray-50 transition-all duration-300 ease-in-out">
                <td className="p-4 text-gray-800">{course.code}</td>
                <td className="p-4 text-gray-800">{course.name}</td>
                <td className="p-4 text-gray-800">{course.attended}</td>
                <td className="p-4 text-gray-800">{course.total}</td>
                <td className="p-4 text-gray-800">{calculatePercentage(course.attended, course.total)}%</td>
                <td className={`p-4 font-semibold ${calculatePercentage(course.attended, course.total) >= 75 ? 'text-green-600' : 'text-red-600'}`}>
                  {calculatePercentage(course.attended, course.total) >= 75 ? 'Eligible' : 'Not Eligible'}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="text-center p-8 bg-gray-200 rounded-xl shadow-xl">
        <div className="text-2xl font-semibold mb-4">
          Overall Attendance: 
          <span className={`ml-2 font-bold ${calculateOverallAttendance(coursesBySemester[selectedSemester]) >= 75 ? 'text-green-600' : 'text-red-600'}`}>
            {calculateOverallAttendance(coursesBySemester[selectedSemester])}%
          </span>
        </div>
        <div className="text-sm text-gray-600 italic">
          Note: Minimum 75% attendance is required to be eligible for end semester examinations.
        </div>
      </div>
    </div>
  );
};

export default Attendance;
