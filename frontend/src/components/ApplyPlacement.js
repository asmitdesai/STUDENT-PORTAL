// ApplyPlacement.js
import React, { useState } from 'react';
import './ApplyPlacement.css';

const ApplyPlacement = ({ company, onClose, studentData }) => {
  const [resume, setResume] = useState(null);
  const [answers, setAnswers] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [validationErrors, setValidationErrors] = useState({});

  const questions = [
    {
      id: 1,
      question: "Why are you interested in this role?",
      placeholder: "Describe your motivation and interest in this position..."
    },
    {
      id: 2,
      question: "Describe a challenging project you've worked on.",
      placeholder: "Share details about the project, your role, and outcomes..."
    },
    {
      id: 3,
      question: "What are your key strengths relevant to this position?",
      placeholder: "List your relevant skills and experiences..."
    },
    {
      id: 4,
      question: "Where do you see yourself in 5 years?",
      placeholder: "Describe your career goals and aspirations..."
    }
  ];

  const handleResumeUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      if (file.type === 'application/pdf') {
        setResume(file);
        setValidationErrors({ ...validationErrors, resume: null });
      } else {
        setValidationErrors({ 
          ...validationErrors, 
          resume: 'Please upload a PDF file only' 
        });
      }
    }
  };

  const handleAnswerChange = (id, value) => {
    setAnswers(prev => ({ ...prev, [id]: value }));
    if (value.trim()) {
      setValidationErrors({ ...validationErrors, [id]: null });
    }
  };

  const validateForm = () => {
    const errors = {};
    if (!resume) errors.resume = 'Please upload your resume';
    
    questions.forEach(q => {
      if (!answers[q.id] || answers[q.id].trim().length < 50) {
        errors[q.id] = 'Please provide a detailed answer (minimum 50 characters)';
      }
    });

    setValidationErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    setSubmitStatus('processing');

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      setSubmitStatus('success');
      setTimeout(() => {
        onClose();
      }, 2000);
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="apply-placement-container">
      <div className="apply-form">
        <div className="form-header">
          <h2>Apply to {company.name} - {company.role}</h2>
          <button className="close-button" onClick={onClose}>×</button>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="student-details">
            <h3>Student Details</h3>
            <div className="details-grid">
              <p><strong>Name:</strong> {studentData.name}</p>
              <p><strong>Roll Number:</strong> {studentData.rollNumber}</p>
              <p><strong>Course:</strong> {studentData.course}</p>
              <p><strong>CGPA:</strong> {studentData.cgpa}</p>
              <p><strong>Email:</strong> {studentData.email}</p>
            </div>
          </div>

          <div className="resume-upload">
            <h3>Upload Resume (PDF only)</h3>
            <div className="upload-container">
              <input
                type="file"
                id="resume-upload"
                accept=".pdf"
                onChange={handleResumeUpload}
              />
              <span className="file-name">{resume ? resume.name : 'No file selected'}</span>
            </div>
            {validationErrors.resume && 
              <p className="error-message">{validationErrors.resume}</p>
            }
          </div>

          <div className="application-questions">
            <h3>Application Questions</h3>
            {questions.map((q) => (
              <div key={q.id} className="question">
                <label>{q.question}</label>
                <textarea
                  placeholder={q.placeholder}
                  value={answers[q.id] || ''}
                  onChange={(e) => handleAnswerChange(q.id, e.target.value)}
                />
                {validationErrors[q.id] && 
                  <p className="error-message">{validationErrors[q.id]}</p>
                }
              </div>
            ))}
          </div>

          {submitStatus && (
            <div className={`status-message ${submitStatus}`}>
              {submitStatus === 'processing' && 'Processing your application...'}
              {submitStatus === 'success' && 'Application submitted successfully!'}
              {submitStatus === 'error' && 'Error submitting application. Please try again.'}
            </div>
          )}

          <div className="form-actions">
            <button 
              type="button" 
              className="cancel-button" 
              onClick={onClose} 
              disabled={isSubmitting}
            >
              Cancel
            </button>
            <button 
              type="submit" 
              className="submit-button" 
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Submitting...' : 'Submit Application'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ApplyPlacement;