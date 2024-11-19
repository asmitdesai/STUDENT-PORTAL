// App.js
import React, { useState } from 'react';
import './App.css';
import LoginForm from './components/LoginForm';
import SignUpForm from './components/SignUpForm';
import ForgotPasswordForm from './components/ForgotPasswordForm';
import Dashboard from './components/Dashboard';

function App() {
  const [currentView, setCurrentView] = useState('login');
  const [userData, setUserData] = useState(null);

  const handleLogin = (data) => {
    setUserData(data);
    setCurrentView('dashboard');
  };

  const handleLogout = () => {
    setUserData(null);
    setCurrentView('login');
  };

  const renderView = () => {
    switch (currentView) {
      case 'login':
        return (
          <LoginForm 
            onSignUp={() => setCurrentView('signup')} 
            onForgotPassword={() => setCurrentView('forgotPassword')} 
            onLogin={handleLogin} 
          />
        );
      case 'signup':
        return <SignUpForm onBack={() => setCurrentView('login')} />;
      case 'forgotPassword':
        return <ForgotPasswordForm onBack={() => setCurrentView('login')} />;
      case 'dashboard':
        return (
          <Dashboard 
            userData={userData}
            onLogout={handleLogout}
          />
        );
      default:
        return (
          <LoginForm 
            onSignUp={() => setCurrentView('signup')} 
            onForgotPassword={() => setCurrentView('forgotPassword')} 
            onLogin={handleLogin} 
          />
        );
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>ABC Institutions Student Portal</h1>
        {renderView()}
      </header>
    </div>
  );
}

export default App;