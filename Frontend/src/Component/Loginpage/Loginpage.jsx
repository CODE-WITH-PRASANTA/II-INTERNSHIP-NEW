import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './Loginpage.css';

// अपनी इमेज का पाथ यहाँ रखें
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
          token: 'demo-jwt-token-' + Date.now(),
        };
        localStorage.setItem('authUser', JSON.stringify(newUser));
        setIsSubmitting(false);
        triggerToast('Account created successfully! Redirecting...');
        setTimeout(() => navigate('/about/internship'), 1000);
      }, 600);
    }
  };

  return (
    <div className="auth-page-wrapper">
      {/* Toast Alert */}
      {toastMsg && (
        <div className="auth-custom-toast">
          <span className="toast-sparkle">✨</span>
          <span>{toastMsg}</span>
        </div>
      )}

      {/* Unified Master Sliding Card */}
      <div className={`auth-sliding-master-card ${isSignIn ? 'sign-in-active' : ''}`}>
        
        {/* ================= SLIDING IMAGE BANNER PANE ================= */}
        <div
          className="auth-sliding-visual-pane"
          style={{ backgroundImage: `url(${authBannerBg})` }}
        >
          <div className="auth-glass-testimonial-card">
            <div className="auth-quote-icon">“</div>
            <p className="auth-quote-text">
              {!isSignIn
                ? 'Join our global ecosystem connecting students, institutes, and mentors. We ensure verified profiles, structured internships, and international career paths.'
                : 'iiInternship connects ambitious students with verified international internships. Build your global career, gain hands-on experience, and unlock worldwide opportunities.'}
            </p>

            <div className="auth-quote-author">
              <h4>{!isSignIn ? 'Registration & Support Group' : 'Global Placement Cell'}</h4>
              <p>{!isSignIn ? 'iiInternship Platform Administration' : 'International Institute of Internship'}</p>
            </div>
          </div>
        </div>

        {/* ================= FORM CONTENT PANE ================= */}
        <div className="auth-sliding-form-pane">
          <div className="auth-form-scroll-content">
            
            {errorMsg && (
              <div className="auth-badge-error">
                <span>⚠️</span>
                <span>{errorMsg}</span>
              </div>
            )}

            {!isSignIn ? (
              /* SIGN UP (CREATE ACCOUNT) */
              <div key="signup" className="auth-fade-form-box">
                <div className="auth-heading-block">
                  <h1 className="auth-main-title">Create an account</h1>
                  <p className="auth-sub-title">
                    {location.state?.appliedPost
                      ? `Applying for ${location.state.appliedPost}`
                      : 'Sign up today to start your international internship journey.'}
                  </p>
                </div>

                <form onSubmit={handleAuthSubmit} className="auth-form-layout">
                  {/* Full Name */}
                  <div className="auth-form-field">
                    <label>FULL NAME*</label>
                    <div className="auth-input-wrap">
                      <svg className="auth-field-ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
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
                  <div className="auth-form-field">
                    <label>EMAIL ID*</label>
                    <div className="auth-input-wrap">
                      <svg className="auth-field-ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
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
                  <div className="auth-form-field">
                    <label>REGISTER AS*</label>
                    <div className="auth-role-selection-grid">
                      <div
                        className={`auth-role-card ${selectedRole === 'Student' ? 'active' : ''}`}
                        onClick={() => setSelectedRole('Student')}
                      >
                        <span className="role-emoji">🎓</span>
                        <span className="role-title">Student</span>
                        <span className="role-caption">Join to apply for internships</span>
                      </div>

                      <div
                        className={`auth-role-card ${selectedRole === 'Instructor' ? 'active' : ''}`}
                        onClick={() => setSelectedRole('Instructor')}
                      >
                        <span className="role-emoji">🖥️</span>
                        <span className="role-title">Instructor</span>
                        <span className="role-caption">Manage classes & assignments</span>
                      </div>

                      <div
                        className={`auth-role-card ${selectedRole === 'Emersion User' ? 'active' : ''}`}
                        onClick={() => setSelectedRole('Emersion User')}
                      >
                        <span className="role-emoji">💼</span>
                        <span className="role-title">Emersion User</span>
                        <span className="role-caption">Apply for Various Immersion Programs</span>
                      </div>

                      <div
                        className={`auth-role-card ${selectedRole === 'Job Applicant' ? 'active' : ''}`}
                        onClick={() => setSelectedRole('Job Applicant')}
                      >
                        <span className="role-emoji">🏢</span>
                        <span className="role-title">Job Applicant</span>
                        <span className="role-caption">For Appointment to Various Posts</span>
                      </div>
                    </div>
                  </div>

                  {/* Passwords */}
                  <div className="auth-dual-inputs-grid">
                    <div className="auth-form-field">
                      <label>CREATE PASSWORD*</label>
                      <div className="auth-input-wrap">
                        <svg className="auth-field-ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
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
                          className="auth-password-toggle-btn"
                          onClick={() => setShowPassword(!showPassword)}
                        >
                          👁️
                        </button>
                      </div>
                    </div>

                    <div className="auth-form-field">
                      <label>CONFIRM PASSWORD*</label>
                      <div className="auth-input-wrap">
                        <svg className="auth-field-ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
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
                          className="auth-password-toggle-btn"
                          onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                        >
                          👁️
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Terms */}
                  <label className="auth-terms-checkbox-wrap">
                    <input
                      type="checkbox"
                      checked={agreedToTerms}
                      onChange={(e) => setAgreedToTerms(e.target.checked)}
                      required
                    />
                    <span>
                      I AGREE TO THE <a href="#terms">INTERNSHIP POLICY</a> ,{' '}
                      <a href="#terms">TERMS OF SERVICE</a> AND{' '}
                      <a href="#privacy">PRIVACY POLICY</a>.
                    </span>
                  </label>

                  {/* Submit Button */}
                  <button type="submit" className="auth-submit-primary-btn" disabled={isSubmitting}>
                    {isSubmitting ? 'Creating account...' : 'Create account'}
                  </button>
                </form>

                {/* Switch to Sign In */}
                <div className="auth-switch-prompt">
                  Already have an account?{' '}
                  <button
                    type="button"
                    className="auth-inline-switch-btn"
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
              /* SIGN IN (LOGIN) */
              <div key="signin" className="auth-fade-form-box">
                <div className="auth-heading-block">
                  <h1 className="auth-main-title">Welcome back</h1>
                  <p className="auth-sub-title">Sign in to manage your internship profile and dashboard.</p>
                </div>

                <form onSubmit={handleAuthSubmit} className="auth-form-layout">
                  {/* Email */}
                  <div className="auth-form-field">
                    <label>EMAIL ID</label>
                    <div className="auth-input-wrap">
                      <svg className="auth-field-ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
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
                  <div className="auth-form-field">
                    <label>PASSWORD</label>
                    <div className="auth-input-wrap">
                      <svg className="auth-field-ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
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
                        className="auth-password-toggle-btn"
                        onClick={() => setShowPassword(!showPassword)}
                      >
                        👁️
                      </button>
                    </div>
                  </div>

                  {/* Options Row */}
                  <div className="auth-options-row">
                    <label className="auth-terms-checkbox-wrap compact">
                      <input
                        type="checkbox"
                        checked={rememberMe}
                        onChange={(e) => setRememberMe(e.target.checked)}
                      />
                      <span>REMEMBER FOR 30 DAYS</span>
                    </label>
                    <a href="#forgot" className="auth-forgot-password-link">
                      Forgot password
                    </a>
                  </div>

                  {/* Submit Button */}
                  <button type="submit" className="auth-submit-primary-btn" disabled={isSubmitting}>
                    {isSubmitting ? 'Signing in...' : 'Sign in'}
                  </button>
                </form>

                {/* Switch to Sign Up */}
                <div className="auth-switch-prompt">
                  Don't have an account?{' '}
                  <button
                    type="button"
                    className="auth-inline-switch-btn"
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