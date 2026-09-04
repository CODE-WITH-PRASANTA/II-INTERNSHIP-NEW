import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginForm.css';
import { 
  User, 
  Lock, 
  Eye, 
  EyeOff, 
  Globe, 
  GraduationCap, 
  Award, 
  Users 
} from 'lucide-react';

const LoginForm = ({ onLoginSuccess }) => {
  const navigate = useNavigate();

  // प्री-फिल्ड क्रेडेंशियल्स
  const [email, setEmail] = useState('ii internship');
  const [password, setPassword] = useState('12345');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  // 🔹 केवल इस फ़ंक्शन (Login बटन) से ही लॉगिन होगा
  const handleLogin = (e) => {
    e.preventDefault();

    const cleanEmail = email.trim().toLowerCase();
    const cleanPassword = password.trim();

    if (cleanEmail === 'ii internship' && cleanPassword === '12345') {
      localStorage.setItem('isAuthenticated', 'true');
      setError('');
      setSuccessMessage('(Login Successful!)');

      if (onLoginSuccess) {
        onLoginSuccess();
      } else {
        setTimeout(() => {
          navigate('/', { replace: true });
        }, 500);
      }
    } else {
      setSuccessMessage('');
      setError('गलत Email ID या Password!');
    }
  };

  // 🔹 सोशल बटन्स पर क्लिक करने पर सिर्फ जानकारी वाला मैसेज दिखेगा (लॉगिन नहीं होगा)
  const handleSocialClick = (provider) => {
    setError('');
    alert(`${provider} लॉगिन अभी सक्रिय नहीं है। कृपया ID और Password का उपयोग करके Login बटन दबाएं।`);
  };

  // 🔹 Forgot Password
  const handleForgotPassword = (e) => {
    e.preventDefault();
    alert('पासवर्ड रीसेट लिंक आपके रजिस्टर्ड ईमेल पर भेज दिया गया है!');
  };

  // 🔹 Sign Up
  const handleSignUp = (e) => {
    e.preventDefault();
    alert('साइन अप सुविधा जल्द ही उपलब्ध होगी!');
  };

  return (
    <div className="login-page-wrapper">
      <div className="login-card-container">
        
        {/* बायां हिस्सा (Hero Banner) */}
        <div className="hero-section">
          <div>
            <div className="brand-header">
              <div className="logo-circle">
                <Globe size={22} color="#ffffff" />
              </div>
              <div className="brand-text">
                <h3>International</h3>
                <h2>Institute of</h2>
                <h1>Internship</h1>
                <p className="brand-tagline">Global Opportunities, Real Experience</p>
              </div>
            </div>

            <div className="hero-taglines">
              <h2>Learn.</h2>
              <h2>Intern.</h2>
              <h2 className="impact-text">Make an Impact.</h2>
              <p className="hero-description">
                Join a global community of learners and changemakers building the future together.
              </p>
            </div>
          </div>

          <div className="hero-image-wrapper">
            <img 
              src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80" 
              alt="Campus Building" 
              className="hero-image"
            />
          </div>
        </div>

        {/* दायां हिस्सा (Login Form) */}
        <div className="form-section">
          <div className="form-inner">
            <div className="form-header">
              <h2>Welcome Back!</h2>
              <p>Sign in to continue your internship journey</p>
            </div>

            {/* अलर्ट संदेश */}
            {error && <div className="error-banner">{error}</div>}
            {successMessage && (
              <div 
                className="success-banner" 
                style={{ 
                  backgroundColor: '#e6f4ea', 
                  color: '#137333', 
                  padding: '10px 14px', 
                  borderRadius: '6px', 
                  marginBottom: '14px', 
                  fontSize: '14px', 
                  border: '1px solid #ceead6' 
                }}
              >
                {successMessage}
              </div>
            )}

            <form onSubmit={handleLogin}>
              {/* Email / ID Input */}
              <div className="input-group">
                <label className="input-label">Email Address</label>
                <div className="input-field-wrapper">
                  <User size={16} className="input-icon" />
                  <input
                    type="text"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="input-field"
                    required
                  />
                </div>
              </div>

              {/* Password Input */}
              <div className="input-group">
                <label className="input-label">Password</label>
                <div className="input-field-wrapper">
                  <Lock size={16} className="input-icon" />
                  <input
                    type={showPassword ? 'text' : 'password'}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter your password"
                    className="input-field"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="password-toggle-btn"
                    aria-label="Toggle Password Visibility"
                  >
                    {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                  </button>
                </div>
              </div>

              <div className="forgot-password-row">
                <button 
                  type="button" 
                  onClick={handleForgotPassword} 
                  className="forgot-password-link"
                  style={{ background: 'none', border: 'none', padding: 0, cursor: 'pointer' }}
                >
                  Forgot Password?
                </button>
              </div>

              {/* मुख्य लॉगिन बटन */}
              <button type="submit" className="submit-btn">Login</button>
            </form>

            {/* Social Logins */}
            <div className="divider-row">
              <div className="divider-line"></div>
              <span className="divider-text">or continue with</span>
              <div className="divider-line"></div>
            </div>

            <div className="social-grid">
              <button 
                type="button" 
                className="social-btn"
                onClick={() => handleSocialClick('Google')}
              >
                <svg width="16" height="16" viewBox="0 0 24 24">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"/>
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"/>
                </svg>
                Google
              </button>

              <button 
                type="button" 
                className="social-btn"
                onClick={() => handleSocialClick('LinkedIn')}
              >
                <svg width="16" height="16" fill="#0A66C2" viewBox="0 0 24 24">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.2a1.66 1.66 0 0 0-1.66 1.66c0 .92.74 1.66 1.66 1.66s1.66-.74 1.66-1.66A1.66 1.66 0 0 0 7.83 6.2z"/>
                </svg>
                LinkedIn
              </button>

              <button 
                type="button" 
                className="social-btn"
                onClick={() => handleSocialClick('Microsoft')}
              >
                <svg width="15" height="15" viewBox="0 0 23 23">
                  <path fill="#f35325" d="M1 1h10v10H1z"/>
                  <path fill="#81bc06" d="M12 1h10v10H12z"/>
                  <path fill="#05a6f0" d="M1 12h10v10H1z"/>
                  <path fill="#ffba08" d="M12 12h10v10H12z"/>
                </svg>
                Microsoft
              </button>
            </div>

            <div className="signup-footer">
              Don't have an account?{' '}
              <button 
                type="button" 
                onClick={handleSignUp} 
                className="signup-link"
                style={{ background: 'none', border: 'none', padding: 0, cursor: 'pointer', fontWeight: 'bold' }}
              >
                Sign up
              </button>
            </div>
          </div>
        </div>

      </div>

      {/* नीचे के 4 फ़ीचर्स */}
      <div className="feature-footer-grid">
        <div className="feature-item">
          <Globe size={20} className="feature-icon" />
          <span className="feature-text">Global Internship<br />Opportunities</span>
        </div>
        <div className="feature-item">
          <GraduationCap size={20} className="feature-icon" />
          <span className="feature-text">Learn from<br />Industry Experts</span>
        </div>
        <div className="feature-item">
          <Award size={20} className="feature-icon" />
          <span className="feature-text">Certifications<br />& Recognition</span>
        </div>
        <div className="feature-item">
          <Users size={20} className="feature-icon" />
          <span className="feature-text">Build Your<br />Network</span>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;