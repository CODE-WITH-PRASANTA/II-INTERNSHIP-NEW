import React from 'react';
import './HomeOurPartners.css';

// SVG Icons matching the reference line styles
const icons = {
  novaLabs: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  ),
  quantum: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="4" y="4" width="16" height="16" rx="2" />
      <rect x="9" y="9" width="6" height="6" />
      <path d="M9 1v3M15 1v3M9 20v3M15 20v3M20 9h3M20 15h3M1 9h3M1 15h3" />
    </svg>
  ),
  globalNet: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <line x1="2" y1="12" x2="22" y2="12" />
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    </svg>
  ),
  stackify: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.9a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z" />
      <path d="m22 12.5-8.58 3.9a2 2 0 0 1-1.66 0L2 12.5" />
      <path d="m22 17.5-8.58 3.9a2 2 0 0 1-1.66 0L2 17.5" />
    </svg>
  ),
  acmeCorp: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
      <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
      <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
      <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
    </svg>
  ),
  flashTech: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
    </svg>
  ),
  bullseye: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <circle cx="12" cy="12" r="6" />
      <circle cx="12" cy="12" r="2" />
    </svg>
  ),
  pulseFlow: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
    </svg>
  ),
  blockChain: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
      <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
      <line x1="12" y1="22.08" x2="12" y2="12" />
    </svg>
  ),
  northStar: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" />
    </svg>
  ),
  marinaTech: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="5" r="3" />
      <line x1="12" y1="22" x2="12" y2="8" />
      <path d="M5 12H2a10 10 0 0 0 20 0h-3" />
    </svg>
  ),
  secureIq: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  ),
};

const rowOnePartners = [
  { name: 'NovaLabs', icon: icons.novaLabs },
  { name: 'Quantum', icon: icons.quantum },
  { name: 'GlobalNet', icon: icons.globalNet },
  { name: 'Stackify', icon: icons.stackify },
  { name: 'Acme Corp', icon: icons.acmeCorp },
  { name: 'FlashTech', icon: icons.flashTech },
];

const rowTwoPartners = [
  { name: 'Bullseye', icon: icons.bullseye },
  { name: 'PulseFlow', icon: icons.pulseFlow },
  { name: 'BlockChain', icon: icons.blockChain },
  { name: 'NorthStar', icon: icons.northStar },
  { name: 'MarinaTech', icon: icons.marinaTech },
  { name: 'SecureIQ', icon: icons.secureIq },
];

const HomeOurPartners = () => {
  return (
    <section className="HomeOurPartners">
      {/* Decorative Mint Ambient Backgrounds */}
      <div className="HomeOurPartners__ambientBlob HomeOurPartners__ambientBlob--left" />
      <div className="HomeOurPartners__ambientBlob HomeOurPartners__ambientBlob--right" />
      
      <div className="HomeOurPartners__container">
        {/* Header */}
        <div className="HomeOurPartners__header">
          <div className="HomeOurPartners__badgeWrapper">
            <span className="HomeOurPartners__badgeDot" />
            <span className="HomeOurPartners__badgeText">Our Partners</span>
            <span className="HomeOurPartners__badgeDot" />
          </div>
          <h2 className="HomeOurPartners__title">Trusted by Industry Leaders</h2>
          <p className="HomeOurPartners__subtitle">
            Powering high-growth businesses, innovative startups, and enterprise teams worldwide.
          </p>
        </div>

        {/* Logos Container */}
        <div className="HomeOurPartners__gridWrapper">
          {/* Row 1 */}
          <div className="HomeOurPartners__row">
            {rowOnePartners.map((item, index) => (
              <div key={index} className="HomeOurPartners__card">
                <span className="HomeOurPartners__cardIcon">{item.icon}</span>
                <span className="HomeOurPartners__cardName">{item.name}</span>
              </div>
            ))}
          </div>

          {/* Row 2 */}
          <div className="HomeOurPartners__row">
            {rowTwoPartners.map((item, index) => (
              <div key={index} className="HomeOurPartners__card">
                <span className="HomeOurPartners__cardIcon">{item.icon}</span>
                <span className="HomeOurPartners__cardName">{item.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeOurPartners;