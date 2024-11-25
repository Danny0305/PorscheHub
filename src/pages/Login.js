import React, { useState } from 'react';
import "../styles/Login.css"; // Make sure the path matches your structure

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    // Placeholder for login logic
    console.log("Logging in with:", { email, password });
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <h2 className="login-title login-heading">Log In to Your Account</h2>
        <p className="login-title">Please enter your details</p>
        
        <form className="login-form" onSubmit={handleLogin}>
          <div className="form-group">
            <label htmlFor="email" className="form-label">Email</label>
            <input
              type="email"
              id="email"
              className="form-input"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="password" className="form-label">Password</label>
            <input
              type="password"
              id="password"
              className="form-input"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button type="submit" className="login-form-button">Login</button>
        </form>

        <div className="oauth-container">
          <p className="oauth-text">Or continue with</p>
          <div className="oauth-buttons">
            <button className="oauth-button google">Google</button>
            <button className="oauth-button facebook">Facebook</button>
            <button className="oauth-button github">GitHub</button>
          </div>
        </div>

        <div className="signup-link-container">
          <p className="signup-text">Don't have an account? <a href="/signup" className="signup-link">Create one</a></p>
        </div>
      </div>
    </div>
  );
};

export default Login;
