import React, { useState } from 'react';

function ForgotPasswordForm({ onBack }) {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add forgot password logic here
    console.log('Forgot password submitted', { email });
  };

  return (
    <div className="forgot-password-form">
      <h2>Forgot Password</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button type="submit">Reset Password</button>
      </form>
      <button onClick={onBack}>Back to Login</button>
    </div>
  );
}

export default ForgotPasswordForm;