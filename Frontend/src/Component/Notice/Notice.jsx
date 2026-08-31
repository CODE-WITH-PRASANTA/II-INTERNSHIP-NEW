import React, { useState } from 'react';
import './Notice.css';

// अपनी बैकग्राउंड इमेज का पाथ यहाँ रखें (जैसे: assets/bg-green-art.png)
import authBannerBg from '../../assets/auth-bg.webp'; 

const Notice = () => {
  const [isSignIn, setIsSignIn] = useState(true);

  // फॉर्म स्टेट्स
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [selectedRole, setSelectedRole] = useState('Student');
  const [agreedToTerms, setAgreedToTerms] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  // पासवर्ड विजिबिलिटी
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isSignIn && password !== confirmPassword) {
      alert('Passwords do not match!');
      return;
    }
    console.log(isSignIn ? 'Sign In Data:' : 'Sign Up Data:', {
      fullName,
      email,
      password,
      selectedRole,
      agreedToTerms,
      rememberMe,
    });
  };

  return (
    <div className="auth-wrapper">
      {/* Left Column: Glassmorphism Visual Card */}
      <div 
        className="auth-banner-side"
        style={{ backgroundImage: `url(${authBannerBg})` }}
      >
        <div key={isSignIn ? 'left-signin' : 'left-signup'} className="glass-testimonial-card animate-fade-slide">
          <div className="quote-icon-box">
            <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor">
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
            </svg>
          </div>

          <p className="testimonial-text">
            {isSignIn
              ? '“iiInternship connects ambitious students with verified international internships. Build your global career, gain hands-on experience, and unlock worldwide opportunities.”'
              : '“Join our global ecosystem connecting students, institutes, and mentors. We ensure verified profiles, structured internships, and international career paths.”'}
          </p>

          <div className="testimonial-author">
            <h4>{isSignIn ? 'Global Placement Cell' : 'Registration & Support Group'}</h4>
            <p>{isSignIn ? 'International Institute of Internship' : 'iiInternship Platform Administration'}</p>
          </div>
        </div>
      </div>

      {/* Right Column: Form Panel */}
      <div className="auth-form-side">
        <div className="auth-content-box">
          
          {isSignIn ? (
            /* ================= SIGN IN (WELCOME BACK) ================= */
            <div key="signin-view" className="auth-anim-view">
              <div className="auth-header">
                <h2>Welcome back</h2>
                <p>Sign in to manage your internship profile and dashboard.</p>
              </div>

              <form onSubmit={handleSubmit} className="auth-form">
                {/* Email Field */}
                <div className="form-group">
                  <label>EMAIL ID</label>
                  <div className="input-wrapper">
                    <svg className="input-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                      <polyline points="22,6 12,13 2,6"></polyline>
                    </svg>
                    <input
                      type="email"
                      placeholder="student@hilux.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>
                </div>

                {/* Password Field */}
                <div className="form-group">
                  <label>PASSWORD</label>
                  <div className="input-wrapper">
                    <svg className="input-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                      <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                    </svg>
                    <input
                      type={showPassword ? 'text' : 'password'}
                      placeholder="••••••••••••"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                    <button
                      type="button"
                      className="eye-toggle-btn"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                        <circle cx="12" cy="12" r="3"></circle>
                      </svg>
                    </button>
                  </div>
                </div>

                {/* Remember & Forgot Password */}
                <div className="form-row-options">
                  <label className="checkbox-container">
                    <input
                      type="checkbox"
                      checked={rememberMe}
                      onChange={(e) => setRememberMe(e.target.checked)}
                    />
                    <span>REMEMBER FOR 30 DAYS</span>
                  </label>
                  <a href="#forgot" className="forgot-link">Forgot password</a>
                </div>

                {/* Sign In Button */}
                <button type="submit" className="primary-auth-btn">
                  Sign in
                </button>
              </form>

              {/* Bottom Switch */}
              <p className="switch-prompt">
                Don't have an account?{' '}
                <button type="button" className="switch-link-btn" onClick={() => setIsSignIn(false)}>
                  Sign up
                </button>
              </p>
            </div>
          ) : (
            /* ================= CREATE AN ACCOUNT (SIGN UP) ================= */
            <div key="signup-view" className="auth-anim-view">
              <div className="auth-header">
                <h2>Create an account</h2>
                <p>Sign up today to start your international internship journey.</p>
              </div>

              <form onSubmit={handleSubmit} className="auth-form">
                {/* Full Name */}
                <div className="form-group">
                  <label>FULL NAME*</label>
                  <div className="input-wrapper">
                    <svg className="input-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                      <circle cx="12" cy="7" r="4"></circle>
                    </svg>
                    <input
                      type="text"
                      placeholder="Enter your full name"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      required
                    />
                  </div>
                </div>

                {/* Email Field */}
                <div className="form-group">
                  <label>EMAIL ID*</label>
                  <div className="input-wrapper">
                    <svg className="input-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                      <polyline points="22,6 12,13 2,6"></polyline>
                    </svg>
                    <input
                      type="email"
                      placeholder="Enter your email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>
                </div>

                {/* Role Selector Grid */}
                <div className="form-group">
                  <label>REGISTER AS*</label>
                  <div className="role-selector-grid">
                    <div
                      className={`role-card ${selectedRole === 'Student' ? 'selected' : ''}`}
                      onClick={() => setSelectedRole('Student')}
                    >
                      <span className="role-icon">🎓</span>
                      <strong className="role-name">Student</strong>
                      <span className="role-caption">Join to apply for internships</span>
                    </div>

                    <div
                      className={`role-card ${selectedRole === 'Instructor' ? 'selected' : ''}`}
                      onClick={() => setSelectedRole('Instructor')}
                    >
                      <span className="role-icon">🖥️</span>
                      <strong className="role-name">Instructor</strong>
                      <span className="role-caption">Manage classes & assignments</span>
                    </div>

                    <div
                      className={`role-card ${selectedRole === 'Emersion User' ? 'selected' : ''}`}
                      onClick={() => setSelectedRole('Emersion User')}
                    >
                      <span className="role-icon">💼</span>
                      <strong className="role-name">Emersion User</strong>
                      <span className="role-caption">Apply for Various Immersion Programs</span>
                    </div>

                    <div
                      className={`role-card ${selectedRole === 'Job Applicant' ? 'selected' : ''}`}
                      onClick={() => setSelectedRole('Job Applicant')}
                    >
                      <span className="role-icon">🏢</span>
                      <strong className="role-name">Job Applicant</strong>
                      <span className="role-caption">For Appointment to Various Posts</span>
                    </div>
                  </div>
                </div>

                {/* Password & Confirm Password (Dual Column) */}
                <div className="form-grid-dual">
                  <div className="form-group">
                    <label>CREATE PASSWORD*</label>
                    <div className="input-wrapper">
                      <svg className="input-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                        <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                      </svg>
                      <input
                        type={showPassword ? 'text' : 'password'}
                        placeholder="••••••••••••"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                      />
                      <button
                        type="button"
                        className="eye-toggle-btn"
                        onClick={() => setShowPassword(!showPassword)}
                      >
                        <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                          <circle cx="12" cy="12" r="3"></circle>
                        </svg>
                      </button>
                    </div>
                  </div>

                  <div className="form-group">
                    <label>CONFIRM PASSWORD*</label>
                    <div className="input-wrapper">
                      <svg className="input-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                        <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                      </svg>
                      <input
                        type={showConfirmPassword ? 'text' : 'password'}
                        placeholder="••••••••••••"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        required
                      />
                      <button
                        type="button"
                        className="eye-toggle-btn"
                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                      >
                        <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                          <circle cx="12" cy="12" r="3"></circle>
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>

                {/* Terms Agreement */}
                <div className="terms-row">
                  <label className="checkbox-container">
                    <input
                      type="checkbox"
                      checked={agreedToTerms}
                      onChange={(e) => setAgreedToTerms(e.target.checked)}
                      required
                    />
                    <span>
                      I AGREE TO THE <a href="#terms">INTERNSHIP POLICY</a> , <a href="#terms">TERMS OF SERVICE</a> AND <a href="#privacy">PRIVACY POLICY</a>.
                    </span>
                  </label>
                </div>

                {/* Submit Button */}
                <button type="submit" className="primary-auth-btn">
                  Create account
                </button>
              </form>

              {/* Bottom Switch */}
              <p className="switch-prompt">
                Already have an account?{' '}
                <button type="button" className="switch-link-btn" onClick={() => setIsSignIn(true)}>
                  Sign in
                </button>
              </p>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};

export default Notice;