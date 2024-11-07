// Placements.js
import React, { useState } from 'react';
import './Placements.css';
import ApplyPlacement from './ApplyPlacement'; // Make sure to create this component

const Placements = () => {
  const studentCGPA = 8.5;
  const [selectedCompany, setSelectedCompany] = useState(null);

  // Enhanced company data with more details
  const companies = [
    { 
      name: 'TechCorp', 
      minCGPA: 7.5, 
      package: '12 LPA',
      role: 'Software Developer',
      location: 'Bangalore',
      deadline: '2024-04-15',
      status: 'Open'
    },
    { 
      name: 'InnovaSoft', 
      minCGPA: 8.0, 
      package: '15 LPA',
      role: 'Full Stack Developer',
      location: 'Hyderabad',
      deadline: '2024-04-20',
      status: 'Open'
    },
    { 
      name: 'DataMinds', 
      minCGPA: 7.0, 
      package: '10 LPA',
      role: 'Data Analyst',
      location: 'Mumbai',
      deadline: '2024-04-10',
      status: 'Open'
    },
    { 
      name: 'CloudSystems', 
      minCGPA: 8.5, 
      package: '18 LPA',
      role: 'Cloud Engineer',
      location: 'Pune',
      deadline: '2024-04-25',
      status: 'Open'
    },
    { 
      name: 'AInovation', 
      minCGPA: 9.0, 
      package: '20 LPA',
      role: 'ML Engineer',
      location: 'Bangalore',
      deadline: '2024-04-30',
      status: 'Open'
    },
  ];

  // Enhanced placement statistics with median package
  const placementStats = [
    { 
      year: '2023', 
      totalPlaced: 450, 
      highestPackage: '45 LPA', 
      averagePackage: '12 LPA',
      medianPackage: '10.5 LPA',
      totalOffers: 520,
      companiesVisited: 65,
      departmentWiseStats: {
        CSE: { placed: 120, avgPackage: '14 LPA', medianPackage: '12 LPA' },
        ECE: { placed: 110, avgPackage: '12 LPA', medianPackage: '10 LPA' },
        ME: { placed: 95, avgPackage: '9 LPA', medianPackage: '8.5 LPA' },
        EEE: { placed: 85, avgPackage: '10 LPA', medianPackage: '9 LPA' },
      }
    },
    { 
      year: '2022', 
      totalPlaced: 420, 
      highestPackage: '40 LPA', 
      averagePackage: '11 LPA',
      medianPackage: '9.5 LPA',
      totalOffers: 480,
      companiesVisited: 58,
      departmentWiseStats: {
        CSE: { placed: 115, avgPackage: '13 LPA', medianPackage: '11 LPA' },
        ECE: { placed: 105, avgPackage: '11 LPA', medianPackage: '9.5 LPA' },
        ME: { placed: 90, avgPackage: '8.5 LPA', medianPackage: '8 LPA' },
        EEE: { placed: 80, avgPackage: '9.5 LPA', medianPackage: '8.5 LPA' },
      }
    },
    { 
      year: '2021', 
      totalPlaced: 400, 
      highestPackage: '38 LPA', 
      averagePackage: '10.5 LPA',
      medianPackage: '9 LPA',
      totalOffers: 450,
      companiesVisited: 52,
      departmentWiseStats: {
        CSE: { placed: 110, avgPackage: '12 LPA', medianPackage: '10 LPA' },
        ECE: { placed: 100, avgPackage: '10 LPA', medianPackage: '9 LPA' },
        ME: { placed: 85, avgPackage: '8 LPA', medianPackage: '7.5 LPA' },
        EEE: { placed: 75, avgPackage: '9 LPA', medianPackage: '8 LPA' },
      }
    },
  ];

  const [selectedYear, setSelectedYear] = useState(placementStats[0].year);

  const eligibleCompanies = companies.filter(company => studentCGPA >= company.minCGPA);

  const handleApply = (company) => {
    setSelectedCompany(company);
  };

  const handleCloseApply = () => {
    setSelectedCompany(null);
  };

  return (
    <div className="placements-container">
      <h2>Placements Dashboard</h2>
      
      <section className="placement-overview">
        <h3>Current Placement Season Overview</h3>
        <div className="stats-cards">
          <div className="stat-card">
            <h4>Eligible Companies</h4>
            <p>{eligibleCompanies.length}</p>
          </div>
          <div className="stat-card">
            <h4>Your CGPA</h4>
            <p>{studentCGPA}</p>
          </div>
          <div className="stat-card">
            <h4>Active Opportunities</h4>
            <p>{companies.filter(c => c.status === 'Open').length}</p>
          </div>
        </div>
      </section>

      <section className="eligible-companies">
        <h3>Eligible Companies</h3>
        <div className="companies-table-container">
          <table className="companies-table">
            <thead>
              <tr>
                <th>Company</th>
                <th>Role</th>
                <th>Package</th>
                <th>Location</th>
                <th>Deadline</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {eligibleCompanies.map((company, index) => (
                <tr key={index}>
                  <td>{company.name}</td>
                  <td>{company.role}</td>
                  <td>{company.package}</td>
                  <td>{company.location}</td>
                  <td>{company.deadline}</td>
                  <td>
                    <button className="apply-btn" onClick={() => handleApply(company)}>Apply</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="placement-stats">
        <h3>Placement Statistics</h3>
        <div className="year-selector">
          {placementStats.map(stat => (
            <button 
              key={stat.year}
              className={selectedYear === stat.year ? 'active' : ''}
              onClick={() => setSelectedYear(stat.year)}
            >
              {stat.year}
            </button>
          ))}
        </div>

        {placementStats.filter(stat => stat.year === selectedYear).map(stat => (
          <div key={stat.year} className="year-stats">
            <div className="stats-grid">
              <div className="stat-box">
                <h4>Total Placed</h4>
                <p>{stat .totalPlaced}</p>
              </div>
              <div className="stat-box">
                <h4>Highest Package</h4>
                <p>{stat.highestPackage}</p>
              </div>
              <div className="stat-box">
                <h4>Average Package</h4>
                <p>{stat.averagePackage}</p>
              </div>
              <div className="stat-box">
                <h4>Median Package</h4>
                <p>{stat.medianPackage}</p>
              </div>
              <div className="stat-box">
                <h4>Total Offers</h4>
                <p>{stat.totalOffers}</p>
              </div>
              <div className="stat-box">
                <h4>Companies Visited</h4>
                <p>{stat.companiesVisited}</p>
              </div>
            </div>

            <h4>Department-wise Statistics</h4>
            <table className="department-stats-table">
              <thead>
                <tr>
                  <th>Department</th>
                  <th>Placed</th>
                  <th>Average Package</th>
                  <th>Median Package</th>
                </tr>
              </thead>
              <tbody>
                {Object.entries(stat.departmentWiseStats).map(([department, data]) => (
                  <tr key={department}>
                    <td>{department}</td>
                    <td>{data.placed}</td>
                    <td>{data.avgPackage}</td>
                    <td>{data.medianPackage}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ))}
      </section>

      {selectedCompany && (
        <ApplyPlacement 
          company={selectedCompany} 
          onClose={handleCloseApply}
          studentData={{
            name: "John Doe", // Replace with actual student data
            rollNumber: "CS2023001",
            course: "B.Tech Computer Science",
            cgpa: studentCGPA,
            email: "johndoe@example.com"
          }}
        />
      )}
    </div>
  );
};

export default Placements;