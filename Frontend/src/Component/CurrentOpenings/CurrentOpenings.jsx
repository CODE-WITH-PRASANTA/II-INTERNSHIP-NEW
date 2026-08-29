import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './CurrentOpenings.css';

const jobListings = [
  {
    slNo: 1,
    advtNo: 'i3/2026/04',
    advtDate: '2026-08-03',
    postName: 'Marketing Officer',
    description: 'Required Skills: Computer Knoledge. Qualification: Graduate Pass . Nature: Field Work.',
    hasJD: false,
    closingDate: '2026-09-30'
  },
  {
    slNo: 2,
    advtNo: 'II/2026/03',
    advtDate: '20-May-2026',
    postName: 'UI/UX Design Intern',
    description: 'Required Skills: Figma, Adobe XD, Wireframing. Qualification: Graduation. Nature: Full Time.',
    hasJD: true,
    closingDate: '10-July-2026'
  },
  {
    slNo: 3,
    advtNo: 'II/2026/02',
    advtDate: '18-May-2026',
    postName: 'Data Analytics Intern',
    description: 'Required Skills: Python, SQL, PowerBI, Pandas. Qualification: B.Sc / B.Tech. Nature: Hybrid.',
    hasJD: true,
    closingDate: '05-July-2026'
  },
  {
    slNo: 4,
    advtNo: 'II/2026/01',
    advtDate: '15-May-2026',
    postName: 'Software Engineering Intern',
    description: 'Required Skills: React, Node.js, Next.js, PostgreSQL. Qualification: B.Tech / MCA. Nature: Full Time.',
    hasJD: true,
    closingDate: '30-June-2026'
  },
  {
    slNo: 5,
    advtNo: 'II/2026/01',
    advtDate: '15-May-2026',
    postName: 'Full Stack Engineer',
    description: 'Required Skills: React, Node.js, Next.js, Prisma, PostgreSQL. Qualification: B.Tech / MCA. Nature: Full Time.',
    hasJD: false,
    closingDate: '30-September-2026'
  }
];

const CurrentOpenings = () => {
  const navigate = useNavigate();
  const [toastMessage, setToastMessage] = useState('');

  const showToast = (message) => {
    setToastMessage(message);
    setTimeout(() => {
      setToastMessage('');
    }, 3000);
  };

  // Register & Apply पर क्लिक करने पर /login पेज पर नेविगेट करेगा
  const handleApply = (job) => {
    navigate('/login', { 
      state: { 
        isSignIn: false, 
        appliedPost: job.postName,
        advtNo: job.advtNo 
      } 
    });
  };

  const handleDownloadJD = (postName) => {
    showToast(`Downloading Job Description for: ${postName}`);
  };

  const handleShare = async (job) => {
    const shareData = {
      title: `${job.postName} - Hiring Notice`,
      text: `Check out the opening for ${job.postName} (Advt: ${job.advtNo}). Last date to apply: ${job.closingDate}`,
      url: window.location.href,
    };

    if (navigator.share) {
      try {
        await navigator.share(shareData);
      } catch (err) {
        // User dismissed share dialog
      }
    } else {
      navigator.clipboard.writeText(`${window.location.href}#${job.advtNo}`);
      showToast(`Link for "${job.postName}" copied to clipboard!`);
    }
  };

  return (
    <section className="current-openings-section">
      {/* Toast Alert */}
      {toastMessage && (
        <div className="co-toast-box">
          <span>ℹ️</span> {toastMessage}
        </div>
      )}

      {/* Header Section */}
      <div className="co-header">
        <h2 className="co-title">Current Openings</h2>
        <p className="co-subtitle">
          Browse through our active recruitment notices and apply for the internships that match your skills.
        </p>
      </div>

      {/* Table Container Card */}
      <div className="co-card-wrapper">
        <div className="co-table-responsive">
          <table className="co-table">
            <thead>
              <tr>
                <th className="th-sl">SL NO.</th>
                <th className="th-advt">ADVT. NO. & DATE</th>
                <th className="th-post">NAME OF THE POST</th>
                <th className="th-desc">JOB DESCRIPTION</th>
                <th className="th-closing">CLOSING DATE</th>
                <th className="th-action">ACTION</th>
              </tr>
            </thead>
            <tbody>
              {jobListings.map((job) => (
                <tr key={job.slNo}>
                  {/* SL NO */}
                  <td className="td-sl">{job.slNo}</td>

                  {/* ADVT NO & DATE */}
                  <td className="td-advt">
                    <div className="advt-box">
                      <span className="advt-id">{job.advtNo}</span>
                      <span className="advt-date-pill">
                        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                          <line x1="16" y1="2" x2="16" y2="6"></line>
                          <line x1="8" y1="2" x2="8" y2="6"></line>
                          <line x1="3" y1="10" x2="21" y2="10"></line>
                        </svg>
                        {job.advtDate}
                      </span>
                    </div>
                  </td>

                  {/* NAME OF THE POST */}
                  <td className="td-post">
                    <strong className="post-name">{job.postName}</strong>
                  </td>

                  {/* JOB DESCRIPTION */}
                  <td className="td-desc">
                    <p className="desc-text">{job.description}</p>
                    {job.hasJD && (
                      <button 
                        type="button" 
                        className="btn-download-jd" 
                        onClick={() => handleDownloadJD(job.postName)}
                      >
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                          <polyline points="7 10 12 15 17 10"></polyline>
                          <line x1="12" y1="15" x2="12" y2="3"></line>
                        </svg>
                        Download JD
                      </button>
                    )}
                  </td>

                  {/* CLOSING DATE */}
                  <td className="td-closing">
                    <span className="closing-badge">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="12" r="10"></circle>
                        <polyline points="12 6 12 12 16 14"></polyline>
                      </svg>
                      {job.closingDate}
                    </span>
                  </td>

                  {/* ACTION BUTTONS */}
                  <td className="td-action">
                    <div className="action-buttons-group">
                      <button 
                        type="button" 
                        className="btn-register-apply"
                        onClick={() => handleApply(job)}
                      >
                        Register & Apply
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                          <polyline points="15 3 21 3 21 9"></polyline>
                          <line x1="10" y1="14" x2="21" y2="3"></line>
                        </svg>
                      </button>

                      <button 
                        type="button" 
                        className="btn-share"
                        onClick={() => handleShare(job)}
                        title="Share opening"
                      >
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <circle cx="18" cy="5" r="3"></circle>
                          <circle cx="6" cy="12" r="3"></circle>
                          <circle cx="18" cy="19" r="3"></circle>
                          <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line>
                          <line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line>
                        </svg>
                        Share
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default CurrentOpenings;