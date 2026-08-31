import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './Loginpage.css';

// अपनी इमेज का पाथ यहाँ एडजस्ट करें
import authBannerBg from '../../assets/auth-bg.webp';

const Loginpage = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // यदि नेविगेशन स्टेट में `isSignIn` पास हुआ है, तो उसका उपयोग करें, अन्यथा डिफ़ॉल्ट रूप से false (Create Account)
  const [isSignIn, setIsSignIn] = useState(
    location.state?.isSignIn !== undefined ? location.state.isSignIn : false
  );

  // Form States
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [selectedRole, setSelectedRole] = useState('Job Applicant');
  const [agreedToTerms, setAgreedToTerms] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  // Password Visibility
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  // Alerts & Submitting State
  const [errorMsg, setErrorMsg] = useState('');
  const [toastMsg, setToastMsg] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (location.state?.appliedPost) {
      triggerToast(`Registering for: ${location.state.appliedPost}`);
    }
  }, [location.state]);

  const triggerToast = (msg) => {
    setToastMsg(msg);
    setTimeout(() => setToastMsg(''), 3500);
  };

  const handleAuthSubmit = (e) => {
    e.preventDefault();
    setErrorMsg('');

    if (isSignIn) {
      if (!email || !password) {
        setErrorMsg('Please fill in both email and password.');
        return;
      }
      setIsSubmitting(true);
      setTimeout(() => {
        const user = { email, token: 'demo-jwt-token-' + Date.now() };
        localStorage.setItem('authUser', JSON.stringify(user));
        setIsSubmitting(false);
        triggerToast('Signed in successfully! Redirecting...');
        setTimeout(() => navigate('/about/internship'), 1000);
      }, 600);
    } else {
      if (!fullName || !email || !password || !confirmPassword) {
        setErrorMsg('Please complete all required fields.');
        return;
      }
      if (password !== confirmPassword) {
        setErrorMsg('Passwords do not match!');
        return;
      }
      if (!agreedToTerms) {
        setErrorMsg('Please accept the internship policy & terms.');
        return;
      }

      setIsSubmitting(true);
      setTimeout(() => {
        const newUser = { 
          fullName, 
          email, 
          role: selectedRole, 
          appliedFor: location.state?.appliedPost || 'General',
          token: 'demo-jwt-token-' + Date.now() 
        };
        localStorage.setItem('authUser', JSON.stringify(newUser));
        setIsSubmitting(false);
        triggerToast('Account created successfully! Redirecting...');
        setTimeout(() => navigate('/about/internship'), 1000);
      }, 600);
    }
  };

  return (
    <div className="auth-clean-split-layout">
      {/* Toast Alert */}
      {toastMsg && (
        <div className="auth-custom-toast">
          <span className="toast-sparkle">✨</span>
          <span>{toastMsg}</span>
        </div>
      )}

      {/* Left Column: Fixed Pure Reference Banner + Glass Card */}
      <div 
        className="auth-left-visual"
        style={{ backgroundImage: `url(${authBannerBg})` }}
      >
        <div className="auth-left-glass-card">
          <div className="auth-left-quote-mark">“</div>
          <p className="auth-left-quote-desc">
            {!isSignIn
              ? '“Join our global ecosystem connecting students, institutes, and mentors. We ensure verified profiles, structured internships, and international career paths.”'
              : '“iiInternship connects ambitious students with verified international internships. Build your global career, gain hands-on experience, and unlock worldwide opportunities.”'}
          </p>

          <div className="auth-left-author">
            <h4>{!isSignIn ? 'Registration & Support Group' : 'Global Placement Cell'}</h4>
            <p>{!isSignIn ? 'iiInternship Platform Administration' : 'International Institute of Internship'}</p>
          </div>
        </div>
      </div>

      {/* Right Column: Clean White Area with Highlighted Animated Form Container */}
      <div className="auth-right-form-panel">
        
        {/* Glowing Animated Highlight Form Container */}
        <div className="auth-form-glow-box">
          <div className="auth-form-inner-surface">

            {errorMsg && (
              <div className="auth-badge-error">
                <span>⚠️</span>
                <span>{errorMsg}</span>
              </div>
            )}

            {!isSignIn ? (
              /* ================= CREATE ACCOUNT (SIGN UP) ================= */
              <div key="signup" className="auth-content-slide">
                <div className="auth-heading-header">
                  <h1 className="auth-heading-title">Create an account</h1>
                  <p className="auth-heading-desc">
                    {location.state?.appliedPost 
                      ? `Applying for ${location.state.appliedPost}`
                      : 'Sign up today to start your international internship journey.'}
                  </p>
                </div>

                <form onSubmit={handleAuthSubmit} className="auth-form-structure">
                  {/* Full Name */}
                  <div className="auth-field-group">
                    <label>FULL NAME*</label>
                    <div className="auth-input-container">
                      <svg className="auth-icon-left" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
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

                  {/* Email */}
                  <div className="auth-field-group">
                    <label>EMAIL ID*</label>
                    <div className="auth-input-container">
                      <svg className="auth-icon-left" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
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

                  {/* Register As Role Selector */}
                  <div className="auth-field-group">
                    <label>REGISTER AS*</label>
                    <div className="auth-roles-box-grid">
                      <div
                        className={`auth-role-pill ${selectedRole === 'Student' ? 'selected' : ''}`}
                        onClick={() => setSelectedRole('Student')}
                      >
                        <span className="role-ico">🎓</span>
                        <span className="role-lbl">Student</span>
                        <span className="role-txt">Join to apply for internships</span>
                      </div>

                      <div
                        className={`auth-role-pill ${selectedRole === 'Instructor' ? 'selected' : ''}`}
                        onClick={() => setSelectedRole('Instructor')}
                      >
                        <span className="role-ico">🖥️</span>
                        <span className="role-lbl">Instructor</span>
                        <span className="role-txt">Manage classes & assignments</span>
                      </div>

                      <div
                        className={`auth-role-pill ${selectedRole === 'Emersion User' ? 'selected' : ''}`}
                        onClick={() => setSelectedRole('Emersion User')}
                      >
                        <span className="role-ico">💼</span>
                        <span className="role-lbl">Emersion User</span>
                        <span className="role-txt">Apply for Various Immersion Programs</span>
                      </div>

                      <div
                        className={`auth-role-pill ${selectedRole === 'Job Applicant' ? 'selected' : ''}`}
                        onClick={() => setSelectedRole('Job Applicant')}
                      >
                        <span className="role-ico">🏢</span>
                        <span className="role-lbl">Job Applicant</span>
                        <span className="role-txt">For Appointment to Various Posts</span>
                      </div>
                    </div>
                  </div>

                  {/* Passwords (Side by Side) */}
                  <div className="auth-dual-column-row">
                    <div className="auth-field-group">
                      <label>CREATE PASSWORD*</label>
                      <div className="auth-input-container">
                        <svg className="auth-icon-left" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
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
                          className="auth-eye-btn"
                          onClick={() => setShowPassword(!showPassword)}
                        >
                          👁️
                        </button>
                      </div>
                    </div>

                    <div className="auth-field-group">
                      <label>CONFIRM PASSWORD*</label>
                      <div className="auth-input-container">
                        <svg className="auth-icon-left" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
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
                          className="auth-eye-btn"
                          onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                        >
                          👁️
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Terms Agreement Checkbox */}
                  <label className="auth-agreement-box">
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

                  {/* Submit Button */}
                  <button type="submit" className="auth-action-submit-btn" disabled={isSubmitting}>
                    {isSubmitting ? 'Creating account...' : 'Create account'}
                  </button>
                </form>

                {/* Switch to Sign In */}
                <div className="auth-switch-bottom-text">
                  Already have an account?{' '}
                  <button
                    type="button"
                    className="auth-switch-clickable-btn"
                    onClick={() => {
                      setErrorMsg('');
                      setIsSignIn(true);
                    }}
                  >
                    Sign in
                  </button>
                </div>
              </div>
            ) : (
              /* ================= SIGN IN (LOGIN) ================= */
              <div key="signin" className="auth-content-slide">
                <div className="auth-heading-header">
                  <h1 className="auth-heading-title">Welcome back</h1>
                  <p className="auth-heading-desc">Sign in to manage your internship profile and dashboard.</p>
                </div>

                <form onSubmit={handleAuthSubmit} className="auth-form-structure">
                  {/* Email */}
                  <div className="auth-field-group">
                    <label>EMAIL ID</label>
                    <div className="auth-input-container">
                      <svg className="auth-icon-left" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
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

                  {/* Password */}
                  <div className="auth-field-group">
                    <label>PASSWORD</label>
                    <div className="auth-input-container">
                      <svg className="auth-icon-left" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
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
                        className="auth-eye-btn"
                        onClick={() => setShowPassword(!showPassword)}
                      >
                        👁️
                      </button>
                    </div>
                  </div>

                  {/* Options Row */}
                  <div className="auth-options-dual-row">
                    <label className="auth-agreement-box compact">
                      <input
                        type="checkbox"
                        checked={rememberMe}
                        onChange={(e) => setRememberMe(e.target.checked)}
                      />
                      <span>REMEMBER FOR 30 DAYS</span>
                    </label>
                    <a href="#forgot" className="auth-forgot-link">
                      Forgot password
                    </a>
                  </div>

                  {/* Submit Button */}
                  <button type="submit" className="auth-action-submit-btn" disabled={isSubmitting}>
                    {isSubmitting ? 'Signing in...' : 'Sign in'}
                  </button>
                </form>

                {/* Switch to Sign Up */}
                <div className="auth-switch-bottom-text">
                  Don't have an account?{' '}
                  <button
                    type="button"
                    className="auth-switch-clickable-btn"
                    onClick={() => {
                      setErrorMsg('');
                      setIsSignIn(false);
                    }}
                  >
                    Sign up
                  </button>
                </div>
              </div>
            )}

          </div>
        </div>

      </div>
    </div>
  );
};

export default Loginpage;