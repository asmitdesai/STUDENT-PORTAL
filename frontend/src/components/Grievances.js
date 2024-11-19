// Grievances.js
import React, { useState } from 'react';
import './Grievances.css';

const Grievances = () => {
  const [showNewComplaint, setShowNewComplaint] = useState(false);
  const [newComplaint, setNewComplaint] = useState({
    subject: '',
    category: '',
    description: '',
  });

  // Hardcoded existing complaints
  const [complaints] = useState([
    {
      id: 'GRV001',
      subject: 'Library Access Issue',
      category: 'Academic',
      description: 'Unable to access the digital library resources off-campus',
      status: 'Resolved',
      dateSubmitted: '2024-01-15',
      lastUpdated: '2024-01-20',
      assignedTo: 'Dr. Sarah Johnson',
      response: 'VPN access has been granted. Please check your student email for credentials.',
    },
    {
      id: 'GRV002',
      subject: 'Classroom Projector Malfunction',
      category: 'Infrastructure',
      description: 'Projector in Room 204 has been flickering during lectures',
      status: 'In Progress',
      dateSubmitted: '2024-02-01',
      lastUpdated: '2024-02-03',
      assignedTo: 'Mr. Robert Technical',
      response: 'Maintenance team scheduled for inspection this week.',
    },
    {
      id: 'GRV003',
      subject: 'Attendance Record Discrepancy',
      category: 'Academic',
      description: 'My attendance for CS301 shows incorrect entries for last week',
      status: 'Pending',
      dateSubmitted: '2024-02-10',
      lastUpdated: '2024-02-10',
      assignedTo: 'Prof. Michael Stevens',
      response: 'Under review',
    }
  ]);

  const categories = [
    'Academic',
    'Infrastructure',
    'Administrative',
    'Technical',
    'Hostel',
    'Transportation',
    'Other'
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically make an API call to submit the complaint
    alert('Complaint submitted successfully!');
    setShowNewComplaint(false);
    setNewComplaint({ subject: '', category: '', description: '' });
  };

  const getStatusClass = (status) => {
    switch (status.toLowerCase()) {
      case 'resolved':
        return 'status-resolved';
      case 'in progress':
        return 'status-progress';
      case 'pending':
        return 'status-pending';
      default:
        return '';
    }
  };

  return (
    <div className="grievances-container">
      <h2>Grievances Portal</h2>
      
      <button 
        className="new-complaint-btn"
        onClick={() => setShowNewComplaint(!showNewComplaint)}
      >
        {showNewComplaint ? 'Close Form' : 'Register New Complaint'}
      </button>

      {showNewComplaint && (
        <div className="complaint-form">
          <h3>New Complaint</h3>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Subject:</label>
              <input
                type="text"
                value={newComplaint.subject}
                onChange={(e) => setNewComplaint({...newComplaint, subject: e.target.value})}
                required
              />
            </div>

            <div className="form-group">
              <label>Category:</label>
              <select
                value={newComplaint.category}
                onChange={(e) => setNewComplaint({...newComplaint, category: e.target.value})}
                required
              >
                <option value="">Select Category</option>
                {categories.map(category => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
            </div>

            <div className="form-group">
              <label>Description:</label>
              <textarea
                value={newComplaint.description}
                onChange={(e) => setNewComplaint({...newComplaint, description: e.target.value})}
                required
              />
            </div>

            <button type="submit" className="submit-btn">Submit Complaint</button>
          </form>
        </div>
      )}

      <div className="complaints-history">
        <h3>Complaint History</h3>
        <div className="complaints-grid">
          {complaints.map(complaint => (
            <div key={complaint.id} className="complaint-card">
              <div className="complaint-header">
                <span className="complaint-id">{complaint.id}</span>
                <span className={`status-badge ${getStatusClass(complaint.status)}`}>
                  {complaint.status}
                </span>
              </div>
              
              <h4>{complaint.subject}</h4>
              <p className="category">{complaint.category}</p>
              <p className="description">{complaint.description}</p>
              
              <div className="complaint-details">
                <p><strong>Submitted:</strong> {complaint.dateSubmitted}</p>
                <p><strong>Last Updated:</strong> {complaint.lastUpdated}</p>
                <p><strong>Assigned To:</strong> {complaint.assignedTo}</p>
              </div>

              <div className="response">
                <strong>Response:</strong>
                <p>{complaint.response}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Grievances;