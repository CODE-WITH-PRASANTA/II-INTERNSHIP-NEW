import React, { useState } from 'react';
import './DonationRecord.css';
import { 
  FiHeart, 
  FiFileText, 
  FiSearch, 
  FiChevronDown 
} from 'react-icons/fi';
import { FaHeart } from 'react-icons/fa';
import { TbQrcode } from 'react-icons/tb';

const DonationRecord = () => {
  const [activeTab, setActiveTab] = useState('donation'); // 'donation' | 'records'
  const [searchTerm, setSearchTerm] = useState('');

  // Initial records matching reference image 3
  const initialRecords = [
    {
      serialNo: 1,
      paymentNumber: 'pay_TTyIV13djgE2GI',
      dateOfReceipt: '25/08/2026',
      donorName: 'Divya Bharti',
      address: 'Aurangabad, Bihar',
      amountReceived: '₹3',
      otherInfo: 'NO',
    },
    {
      serialNo: 2,
      paymentNumber: 'pay_TOR1W2pRBrL2h8',
      dateOfReceipt: '11/08/2026',
      donorName: 'Divya Bharti',
      address: 'Aurangabad, Bihar',
      amountReceived: '₹3',
      otherInfo: 'N/A',
    },
    {
      serialNo: 3,
      paymentNumber: 'pay_TOPPrFKFV2quG0',
      dateOfReceipt: '11/08/2026',
      donorName: 'driptanill datta',
      address: 'asdasdasdsad',
      amountReceived: '₹1',
      otherInfo: 'sadadasd',
    },
    {
      serialNo: 4,
      paymentNumber: 'pay_mock_donation_001',
      dateOfReceipt: '14/07/2026',
      donorName: 'Anonymous Donor',
      address: '123 Charity Lane, Hope City',
      amountReceived: '₹5,000',
      otherInfo: 'Keep up the good work of offering free education and internships.',
    },
  ];

  // Filter records based on search term
  const filteredRecords = initialRecords.filter((rec) => {
    const query = searchTerm.toLowerCase();
    return (
      rec.donorName.toLowerCase().includes(query) ||
      rec.paymentNumber.toLowerCase().includes(query) ||
      rec.address.toLowerCase().includes(query)
    );
  });

  return (
    <div className="DonationRecord-wrapper">
      {/* Top Floating Toggle Buttons */}
      <div className="DonationRecord-tab-container">
        <button
          className={`DonationRecord-tab-btn ${
            activeTab === 'donation' ? 'DonationRecord-tab-btn--active' : ''
          }`}
          onClick={() => setActiveTab('donation')}
        >
          <FiHeart className="DonationRecord-tab-icon" />
          <span>Make a Donation</span>
        </button>
        <button
          className={`DonationRecord-tab-btn ${
            activeTab === 'records' ? 'DonationRecord-tab-btn--active' : ''
          }`}
          onClick={() => setActiveTab('records')}
        >
          <FiFileText className="DonationRecord-tab-icon" />
          <span>Donation Records</span>
        </button>
      </div>

      {/* Main Content Area */}
      <div className="DonationRecord-content">
        {activeTab === 'donation' ? (
          <div className="DonationRecord-donation-grid">
            {/* Left Side: Information Section */}
            <div className="DonationRecord-info-section">
              <h1 className="DonationRecord-main-title">The Power of Giving</h1>
              <p className="DonationRecord-sub-description">
                Your contribution is more than support—it is an investment in human values, moral
                development, and society's spiritual progress.
              </p>

              {/* Section 1 */}
              <div className="DonationRecord-info-block">
                <h2 className="DonationRecord-block-title">
                  <span className="DonationRecord-bar DonationRecord-bar--orange" />
                  Glory and Inspiration of Donation
                </h2>
                <p className="DonationRecord-block-text">
                  Donating not only paves the way for our spiritual progress, but it also strengthens moral,
                  human values, and goodwill in society. The effect of donation is not limited to this birth only,
                  but its auspicious results also benefit us in the next births, thereby providing higher speed.
                </p>
                <p className="DonationRecord-block-text">
                  We all are bound by the bondage of karma in our lives, and with the bondage of karma, we
                  leave this world and then take birth again. In such a situation, if we do good deeds by
                  donating according to our capacity and contribute to the work that benefits the public and
                  the service dedicated to society, then our name can remain immortal for ages.
                </p>
              </div>

              {/* Section 2 */}
              <div className="DonationRecord-info-block">
                <h2 className="DonationRecord-block-title">
                  <span className="DonationRecord-bar DonationRecord-bar--purple" />
                  Request to Rich and Virtuous Gentlemen
                </h2>
                <p className="DonationRecord-block-text">
                  Religious-loving rich people, philanthropists, and wealthy capitalists are appealed to
                  contribute to this sacred cause. Donate generously for the construction of a grand building
                  of Unique Records of Universe unit under the banner of{' '}
                  <strong>"Divya Prerak Kahaniya Humanity Research Centre Trust"</strong>, so that human values can be promoted and the coming generation
                  can get a positive benefit.
                </p>
              </div>

              {/* Section 3 */}
              <div className="DonationRecord-info-block">
                <h2 className="DonationRecord-block-title">
                  <span className="DonationRecord-bar DonationRecord-bar--teal" />
                  Make Voluntary Donation to DPKHRC Charitable Trust
                </h2>
                <p className="DonationRecord-block-text">
                  You can participate in this great work by donating to Divya Prerak Kahaniyan Humanity
                  Research Centre Charitable Trust as per your capacity. This donation will be{' '}
                  <span className="DonationRecord-tag-highlight">Tax-free under Section 80G</span> of the Income Tax Act, Government of India.
                </p>
              </div>

              {/* Section 4 */}
              <div className="DonationRecord-info-block">
                <h2 className="DonationRecord-block-title">
                  <span className="DonationRecord-bar DonationRecord-bar--pink" />
                  Donate, Earn Merit
                </h2>
                <p className="DonationRecord-block-text">
                  Donation makes the life of any person successful, purifies the soul, and brings happiness,
                  prosperity, progress, and peace in your life. Come forward and become a part of this noble
                  work by making a voluntary donation as per your capacity and serve Humanity.
                </p>
              </div>
            </div>

            {/* Right Side: Donation Form Card */}
            <div className="DonationRecord-form-card">
              <div className="DonationRecord-form-header">
                <div>
                  <h3 className="DonationRecord-form-title">Make a Donation</h3>
                  <p className="DonationRecord-form-subtitle">
                    Support our sacred cause with a voluntary contribution.
                  </p>
                </div>
                <div className="DonationRecord-heart-circle">
                  <FaHeart className="DonationRecord-heart-icon" />
                </div>
              </div>

              <form className="DonationRecord-form" onSubmit={(e) => e.preventDefault()}>
                <div className="DonationRecord-form-group">
                  <label className="DonationRecord-label">
                    ENTER AMOUNT (₹)<span className="DonationRecord-asterisk">*</span>
                  </label>
                  <input
                    type="number"
                    className="DonationRecord-input"
                    placeholder="Enter Amount..."
                  />
                </div>

                <div className="DonationRecord-form-group">
                  <label className="DonationRecord-label">
                    1. NAME<span className="DonationRecord-asterisk">*</span>
                  </label>
                  <input
                    type="text"
                    className="DonationRecord-input"
                    placeholder="Enter Name..."
                  />
                </div>

                <div className="DonationRecord-form-row">
                  <div className="DonationRecord-form-group">
                    <label className="DonationRecord-label">
                      2. MOBILE NUMBER<span className="DonationRecord-asterisk">*</span>
                    </label>
                    <input
                      type="tel"
                      className="DonationRecord-input"
                      placeholder="Enter Mobile Number..."
                    />
                  </div>
                  <div className="DonationRecord-form-group">
                    <label className="DonationRecord-label">
                      3. EMAIL<span className="DonationRecord-asterisk">*</span>
                    </label>
                    <input
                      type="email"
                      className="DonationRecord-input"
                      placeholder="Enter Email..."
                    />
                  </div>
                </div>

                <div className="DonationRecord-form-group">
                  <label className="DonationRecord-label">
                    4. DO YOU WANT AN 80G CERTIFICATE?<span className="DonationRecord-asterisk">*</span>
                  </label>
                  <div className="DonationRecord-select-wrapper">
                    <select className="DonationRecord-select" defaultValue="">
                      <option value="" disabled>
                        Select Yes or No...
                      </option>
                      <option value="Yes">Yes</option>
                      <option value="No">No</option>
                    </select>
                    <FiChevronDown className="DonationRecord-select-arrow" />
                  </div>
                </div>

                <div className="DonationRecord-form-group">
                  <label className="DonationRecord-label">
                    5. ADDRESS<span className="DonationRecord-asterisk">*</span>
                  </label>
                  <textarea
                    rows={3}
                    className="DonationRecord-textarea"
                    placeholder="Enter Address..."
                  />
                </div>

                <div className="DonationRecord-form-group">
                  <label className="DonationRecord-label">6. ANYTHING ELSE?</label>
                  <textarea
                    rows={3}
                    className="DonationRecord-textarea"
                    placeholder="Anything else..."
                  />
                </div>

                <button type="submit" className="DonationRecord-submit-btn">
                  <span>Make Payment</span>
                  <div className="DonationRecord-submit-heart">
                    <FiHeart />
                  </div>
                </button>
              </form>

              <div className="DonationRecord-scan-section">
                <span className="DonationRecord-scan-label">OR SCAN TO PAY</span>
                <div className="DonationRecord-upi-badge">
                  <TbQrcode className="DonationRecord-qr-icon" />
                  <span>UPI / QR Payment available on next step</span>
                </div>
              </div>
            </div>
          </div>
        ) : (
          /* Records Table View (Ref Image 3) */
          <div className="DonationRecord-records-wrapper">
            <div className="DonationRecord-records-header">
              <div>
                <h1 className="DonationRecord-records-title">Donation Records</h1>
                <p className="DonationRecord-records-subtitle">
                  Transparency matters. View all recent voluntary donations and contributions.
                </p>
              </div>
              <div className="DonationRecord-search-box">
                <FiSearch className="DonationRecord-search-icon" />
                <input
                  type="text"
                  placeholder="Search by donor, payment number, or address..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="DonationRecord-search-input"
                />
              </div>
            </div>

            {/* Table Area */}
            <div className="DonationRecord-table-card">
              <div className="DonationRecord-table-responsive">
                <table className="DonationRecord-table">
                  <thead>
                    <tr>
                      <th>Serial No.</th>
                      <th>Payment Number</th>
                      <th>Date of Receipt</th>
                      <th>Donor Name</th>
                      <th>Address</th>
                      <th>Amount Received</th>
                      <th>Other Information</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredRecords.length > 0 ? (
                      filteredRecords.map((item) => (
                        <tr key={item.serialNo}>
                          <td className="DonationRecord-td-sn">{item.serialNo}</td>
                          <td>
                            <span className="DonationRecord-pay-badge">
                              {item.paymentNumber}
                            </span>
                          </td>
                          <td>{item.dateOfReceipt}</td>
                          <td className="DonationRecord-td-name">{item.donorName}</td>
                          <td className="DonationRecord-td-address">{item.address}</td>
                          <td className="DonationRecord-td-amount">
                            {item.amountReceived}
                          </td>
                          <td className="DonationRecord-td-info">{item.otherInfo}</td>
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td colSpan={7} className="DonationRecord-empty-row">
                          No donation records found matching your search.
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default DonationRecord;