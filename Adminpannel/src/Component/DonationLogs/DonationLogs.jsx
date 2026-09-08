import React, { useState } from "react";
import { 
  FiHome, 
  FiFolder, 
  FiHeart, 
  FiSearch, 
  FiDownload,
  FiInbox
} from "react-icons/fi";
import * as XLSX from "xlsx";
import "./DonationLogs.css";

const initialDonations = [
  {
    id: 1,
    name: "Divya Bharti",
    email: "divavi.brlps@gmail.com",
    phone: "9798095389",
    amount: 3,
    status: "COMPLETED",
    note: "NO",
    date: "25 Aug 2026",
  },
  {
    id: 2,
    name: "Divya Bharti",
    email: "divavi.brlps@gmail.com",
    phone: "9122005097",
    amount: 3,
    status: "COMPLETED",
    note: "No note provided",
    date: "11 Aug 2026",
  },
  {
    id: 3,
    name: "driptanill datta",
    email: "driptanill@hilux.com",
    phone: "6204956366",
    amount: 1,
    status: "COMPLETED",
    note: "sadadasd",
    date: "11 Aug 2026",
  },
  {
    id: 4,
    name: "Anonymous Donor",
    email: "donor@example.com",
    phone: "9876543210",
    amount: 5000,
    status: "COMPLETED",
    note: "Keep up the good work of offering free education and internships.",
    date: "14 Jul 2026",
  },
];

const DonationLogs = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [donations] = useState(initialDonations);

  // Search filter matching name or email
  const filteredDonations = donations.filter((donation) =>
    donation.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    donation.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Dynamic Total Calculation
  const totalAmount = filteredDonations.reduce((acc, curr) => acc + curr.amount, 0);

  // Excel Export Handler
  const handleExportExcel = () => {
    const exportData = filteredDonations.map((item) => ({
      "Donor Name": item.name,
      "Donor Email": item.email,
      "Donor Phone": item.phone,
      "Contribution Amount (INR)": item.amount,
      "Status": item.status,
      "Message / Reference Note": item.note,
      "Logged Date": item.date,
    }));

    const worksheet = XLSX.utils.json_to_sheet(exportData);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Donation Logs");
    XLSX.writeFile(workbook, "Donation_Logs_Report.xlsx");
  };

  return (
    <div className="donation-logs-container">
      {/* Breadcrumb Navigation */}
      <nav className="donation-logs-breadcrumb">
        <span className="donation-logs-breadcrumb-item">
          <FiHome className="donation-logs-breadcrumb-icon" /> Home
        </span>
        <span className="donation-logs-breadcrumb-separator">&gt;</span>
        <span className="donation-logs-breadcrumb-item">
          <FiFolder className="donation-logs-breadcrumb-icon" /> Super Admin
        </span>
        <span className="donation-logs-breadcrumb-separator">&gt;</span>
        <span className="donation-logs-breadcrumb-item donation-logs-breadcrumb-active">
          <FiHeart className="donation-logs-breadcrumb-icon" /> Donation Logs
        </span>
      </nav>

      {/* Header Section */}
      <div className="donation-logs-header">
        <h1>Donations & Financial Ledger</h1>
        <p>View registered donor details, financial contributions, and associated reference notes logged onto the system.</p>
      </div>

      {/* Action Toolbar */}
      <div className="donation-logs-toolbar">
        {/* Search Input */}
        <div className="donation-logs-search">
          <FiSearch className="donation-logs-search-icon" />
          <input
            type="text"
            placeholder="Search by donor name or email"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        {/* Action Widgets */}
        <div className="donation-logs-actions">
          {/* Total Badge */}
          <div className="donation-logs-total-badge">
            <FiHeart className="donation-logs-badge-icon" />
            <div className="donation-logs-badge-text">
              <span className="donation-logs-badge-label">TOTAL IN PAGE</span>
              <span className="donation-logs-badge-value">₹{totalAmount.toLocaleString('en-IN')}</span>
            </div>
          </div>

          {/* Export Button */}
          <button className="donation-logs-export-btn" onClick={handleExportExcel}>
            <FiDownload className="donation-logs-export-icon" /> Export as Excel
          </button>
        </div>
      </div>

      {/* Data Table Card */}
      <div className="donation-logs-card">
        <div className="donation-logs-table-wrapper">
          <table className="donation-logs-table">
            <thead>
              <tr>
                <th>DONOR DETAILS</th>
                <th>CONTRIBUTION AMOUNT</th>
                <th>STATUS</th>
                <th>MESSAGE / REFERENCE NOTE</th>
                <th>LOGGED DATE</th>
              </tr>
            </thead>
            <tbody>
              {filteredDonations.length > 0 ? (
                filteredDonations.map((item) => (
                  <tr key={item.id}>
                    <td>
                      <div className="donation-logs-donor-info">
                        <span className="donation-logs-donor-name">{item.name}</span>
                        <span className="donation-logs-donor-meta">
                          {item.email} • {item.phone}
                        </span>
                      </div>
                    </td>
                    <td className="donation-logs-amount">₹{item.amount.toLocaleString('en-IN')}</td>
                    <td>
                      <span className="donation-logs-status-pill">{item.status}</span>
                    </td>
                    <td>
                      <span className={item.note.toLowerCase().includes("no note") ? "donation-logs-note-italic" : "donation-logs-note"}>
                        {item.note}
                      </span>
                    </td>
                    <td className="donation-logs-date">{item.date}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="5" className="donation-logs-empty-cell">
                    <div className="donation-logs-empty-state">
                      <FiInbox className="donation-logs-empty-icon" />
                      <span>No donation logs found matching your criteria.</span>
                    </div>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default DonationLogs;