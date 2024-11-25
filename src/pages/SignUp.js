import React from 'react';
import "../styles/SignUp.css";

const SignupPage = () => {
  return (
    <div className="signup-section">
      <div className="signup-container">
        <h2 className="signup-heading">Create Your Account</h2>
        
        <form className="signup-form-container">
          <div className="signup-form-group">
            <label className="signup-form-label">First Name</label>
            <input type="text" className="signup-input" required />
          </div>

          <div className="signup-form-group">
            <label className="signup-form-label">Last Name</label>
            <input type="text" className="signup-input" required />
          </div>

          <div className="signup-form-group">
            <label className="signup-form-label">Email</label>
            <input type="email" className="signup-input" required />
          </div>

          <div className="signup-form-group">
            <label className="signup-form-label">Password</label>
            <input type="password" className="signup-input" required />
          </div>

          <button type="submit" className="signup-submit-button">Sign Up</button>
        </form>

        <div className="oauth-signup-section">
          <p className="oauth-signup-text">Or sign up with</p>
          <div className="oauth-signup-buttons">
            <button className="oauth-signup-button signup-google">Google</button>
            <button className="oauth-signup-button signup-facebook">Facebook</button>
            <button className="oauth-signup-button signup-github">GitHub</button>
          </div>
        </div>

        <div className="login-redirect">
          <p className="login-redirect-text">Already have an account? <a href="/login" className="login-redirect-link">Log In</a></p>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
