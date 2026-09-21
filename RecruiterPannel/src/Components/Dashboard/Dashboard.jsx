import React from "react";
import QRCode from "react-qr-code";
import "./Dashboard.css";

// ======================================================
// IMAGE IMPORT
// Change this path if your image is stored somewhere else
// ======================================================
import applicantPhoto from "../../assets/sample.webp";

const Dashboard = () => {
  // ======================================================
  // APPLICATION DATA
  // ======================================================
  const applicationData = {
    applicationNo: "REG26HJN35791",
    applicantName: "Test Recruit User",
    position: "—",
    fatherName: "Mock Father",
    motherName: "Mock Mother",
    dateOfBirth: "15/08/1998",
    gender: "Male",
    physicallyChallenged: "N",
    maritalStatus: "Unmarried",
    category: "General",
    religion: "Sanatan Hindu",
    bloodGroup: "O Pos",
    nationality: "Indian",
    mobile: "8887776665",
    email: "recruit@hilux.com",
    aadhaar: "123456789012",
    languages: "English, Hindi",
  };

  // ======================================================
  // REAL QR CODE DATA
  // ======================================================
  const qrValue = `
International Institute of Internship [i3]
Recruitment Application Form

Application No: ${applicationData.applicationNo}
Applicant Name: ${applicationData.applicantName}
Position: ${applicationData.position}
Date of Birth: ${applicationData.dateOfBirth}
Mobile: ${applicationData.mobile}
Email: ${applicationData.email}
  `.trim();

  // ======================================================
  // PRINT / SAVE PDF
  // Browser print dialog allows "Save as PDF"
  // ======================================================
  const handlePrint = () => {
    window.print();
  };

  return (
    <main className="dashboard-page">

      {/* ==================================================
          WELCOME HEADER
      ================================================== */}
      <section className="dashboard-welcome">

        <div className="dashboard-welcome-content">

          <span className="dashboard-portal-badge">
            RECRUITER PORTAL
          </span>

          <h1 className="dashboard-welcome-title">
            Welcome Back, Test Recruit User
          </h1>

          <p className="dashboard-welcome-description">
            Manage your recruitment registration parameters, check job
            postings, and track applications in real-time.
          </p>

        </div>

        <div className="dashboard-welcome-decoration">
          <span className="dashboard-decoration-one"></span>
          <span className="dashboard-decoration-two"></span>
          <span className="dashboard-decoration-three"></span>
        </div>

      </section>


      {/* ==================================================
          STATUS CARDS
      ================================================== */}
      <section className="dashboard-status-grid">

        {/* Profile */}
        <article className="dashboard-status-card">

          <div className="dashboard-status-icon dashboard-status-green">
            <span>✓</span>
          </div>

          <div className="dashboard-status-content">

            <span className="dashboard-status-label">
              Profile Status
            </span>

            <h3>
              Verified &amp; Registered
            </h3>

          </div>

        </article>


        {/* Applications */}
        <article className="dashboard-status-card">

          <div className="dashboard-status-icon dashboard-status-purple">
            <span>▣</span>
          </div>

          <div className="dashboard-status-content">

            <span className="dashboard-status-label">
              Total Applications
            </span>

            <h3>
              2 Submitted
            </h3>

          </div>

        </article>


        {/* Qualifications */}
        <article className="dashboard-status-card">

          <div className="dashboard-status-icon dashboard-status-orange">
            <span>↗</span>
          </div>

          <div className="dashboard-status-content">

            <span className="dashboard-status-label">
              Qualifications On Record
            </span>

            <h3>
              1 Added
            </h3>

          </div>

        </article>

      </section>


      {/* ==================================================
          APPLICATION SECTION
      ================================================== */}
      <section className="dashboard-application-section">

        <div className="dashboard-application-toolbar">

          <h2>
            Application Preview
          </h2>

          <button
            type="button"
            className="dashboard-print-button"
            onClick={handlePrint}
          >
            <span className="dashboard-print-icon">
              ⎙
            </span>

            Print Form / Save PDF
          </button>

        </div>


        {/* ==================================================
            A4 APPLICATION PAPER
        ================================================== */}
        <div
          className="dashboard-application-paper"
          id="application-print"
        >

          {/* ==================================================
              APPLICATION HEADER
          ================================================== */}
          <header className="application-document-header">

            <div className="application-document-heading">

              <h2>
                International Institute of Internship [i3]
              </h2>

              <p>
                Recruitment Application Form
              </p>

            </div>


            {/* REAL SCANNABLE QR CODE */}
            <div className="application-qr-wrapper">

              <QRCode
                value={qrValue}
                size={82}
                bgColor="#ffffff"
                fgColor="#000000"
                level="M"
              />

            </div>

          </header>


          {/* ==================================================
              APPLICATION META
          ================================================== */}
          <div className="application-meta">

            <span>
              <strong>Advt. No.:</strong> —
            </span>

            <span>
              <strong>Application No:</strong>{" "}
              {applicationData.applicationNo}
            </span>

            <span>
              <strong>Position:</strong>{" "}
              {applicationData.position}
            </span>

          </div>


          {/* ==================================================
              PERSONAL INFORMATION
          ================================================== */}
          <ApplicationTitle
            title="Personal Information"
          />

          <div className="application-personal-table">

            <div className="application-personal-row">

              <div className="application-label">
                Name
              </div>

              <div className="application-value">
                {applicationData.applicantName}
              </div>

              <div className="application-photo-cell">

                <img
                  src={applicantPhoto}
                  alt="Applicant"
                  className="application-applicant-photo"
                />

              </div>

            </div>


            <InfoRow
              label="S/O | D/O | W/O"
              value={applicationData.fatherName}
            />

            <InfoRow
              label="Mother's Name"
              value={applicationData.motherName}
            />

            <InfoRow
              label="Date of Birth"
              value={applicationData.dateOfBirth}
            />

            <InfoRow
              label="Gender"
              value={applicationData.gender}
            />

            <InfoRow
              label="Physically Challenged"
              value={applicationData.physicallyChallenged}
            />

            <InfoRow
              label="Marital Status"
              value={applicationData.maritalStatus}
            />

            <InfoRow
              label="Category"
              value={applicationData.category}
            />

            <InfoRow
              label="Religion"
              value={applicationData.religion}
            />

            <InfoRow
              label="Blood Group"
              value={applicationData.bloodGroup}
            />

            <InfoRow
              label="Nationality"
              value={applicationData.nationality}
            />

            <InfoRow
              label="Mobile No"
              value={applicationData.mobile}
            />

            <InfoRow
              label="Email"
              value={applicationData.email}
            />

            <InfoRow
              label="Aadhaar No"
              value={applicationData.aadhaar}
            />

            <InfoRow
              label="Language(s) Known"
              value={applicationData.languages}
            />

          </div>


          {/* ==================================================
              ADDRESS
          ================================================== */}
          <div className="application-address-grid">

            <div className="application-address-box">

              <div className="application-section-heading">
                Permanent Address
              </div>

              <p>
                Permanent Street 123
                <br />
                Varanasi, Uttar Pradesh
                <br />
                India - 221001
              </p>

            </div>


            <div className="application-address-box">

              <div className="application-section-heading">
                Correspondence Address
              </div>

              <p>
                123 Current St, Suite 100
                <br />
                Varanasi, Uttar Pradesh
                <br />
                India - 221001
              </p>

            </div>

          </div>


          {/* ==================================================
              EDUCATION
          ================================================== */}
          <ApplicationTitle
            title="Education Qualification Details"
            rightText="Essential Qualification : Graduation"
          />

          <div className="application-document-table application-education-table">

            <div className="application-table-head">

              <div>#</div>
              <div>Qualification</div>
              <div>Board or University</div>
              <div>Subjects</div>
              <div>Division Marks Year</div>

            </div>


            <div className="application-table-row">

              <div>1</div>

              <div>
                Graduation
              </div>

              <div>
                CU
              </div>

              <div>
                Computer Science
              </div>

              <div>
                A - 80% - 2027
              </div>

            </div>

          </div>


          {/* ==================================================
              WORK EXPERIENCE
          ================================================== */}
          <ApplicationTitle
            title="Work Experience Details"
            rightText="Total Experience : 0 Year(s)"
          />

          <div className="application-document-table application-experience-table">

            <div className="application-table-head">

              <div>#</div>

              <div>
                Employer Details
              </div>

              <div>
                Employment Details
              </div>

              <div>
                Nature of Work
              </div>

            </div>


            <div className="application-table-row">

              <div>
                1
              </div>

              <div>
                <strong>
                  Tech Solutions Pvt. Ltd.
                </strong>

                <br />

                Noida, India
              </div>

              <div>

                <strong>
                  Frontend Developer
                </strong>

                <br />

                Tenure: 15/06/2022 — 31/07/2024

                <br />

                Duration: 2.1 Year(s)

              </div>

              <div>
                Built responsive web applications using React.js
                and Tailwind CSS.
              </div>

            </div>


            <div className="application-table-row">

              <div>
                2
              </div>

              <div>

                <strong>
                  Innovate Labs
                </strong>

                <br />

                Remote

              </div>

              <div>

                <strong>
                  Junior Software Engineer
                </strong>

                <br />

                Tenure: 01/08/2024 — Present

                <br />

                Duration: 1 Year(s)

              </div>

              <div>
                Working on full-stack application development using
                Node.js and React.
              </div>

            </div>

          </div>


          {/* ==================================================
              REFERENCE
          ================================================== */}
          <ApplicationTitle
            title="Reference Details"
          />

          <div className="application-document-table application-reference-table">

            <div className="application-table-head">

              <div>#</div>

              <div>
                Name with Designation
              </div>

              <div>
                Organization Name with Address
              </div>

              <div>
                Mobile
              </div>

              <div>
                Email ID
              </div>

            </div>


            <div className="application-table-row">

              <div>—</div>

              <div>
                No records
              </div>

              <div>—</div>

              <div>—</div>

              <div>—</div>

            </div>

          </div>


          {/* ==================================================
              APPLICATION FEE
          ================================================== */}
          <ApplicationTitle
            title="Application Fee"
          />

          <div className="application-simple-content">
            No Application fee to be Paid.
          </div>


          {/* ==================================================
              ADDITIONAL DOCUMENTS
          ================================================== */}
          <ApplicationTitle
            title="Additional Documents"
          />

          <div className="application-simple-content application-document-list">

            <div>
              1. RESUME
            </div>

            <div>
              2. SIGNATURE
            </div>

            <div>
              3. PHOTOGRAPH
            </div>

          </div>


          {/* ==================================================
              SPECIFIC INFORMATION
          ================================================== */}
          <ApplicationTitle
            title="Specific Information"
          />

          <div className="application-specific-information">

            <p>
              <strong>1.</strong>{" "}
              Whether agreeable to undergo thorough training on
              various issues relating to the job to be performed as
              per the Terms of Reference: —
            </p>

            <p>
              <strong>2.</strong>{" "}
              Whether agreeable to reside in any State of India or
              own my arrangement, work in the remote rural areas of
              the allocated districts: —
            </p>

            <p>
              <strong>3.</strong>{" "}
              Preference of State/UT for your posting:
              <strong> Not Applicable</strong>
            </p>

            <p>
              <strong>4.</strong>{" "}
              Language(s) known:
              <strong> ENGLISH, HINDI</strong>
            </p>

          </div>


          {/* ==================================================
              DECLARATION
          ================================================== */}
          <ApplicationTitle
            title="Declaration"
          />

          <div className="application-declaration">

            I have carefully gone through the vacancy advertisement
            and I am well aware that the information furnished in the
            Application Form duly supported by the documents in
            respect of Essential Qualification / Work Experience
            submitted by me will also be assessed by the Selection
            Committee at the time of selection for the post. The
            information / details furnished by me are correct and
            true to the best of my knowledge and no material fact
            having a bearing on my selection has been suppressed /
            withheld.

          </div>


          {/* ==================================================
              APPLICATION FOOTER
          ================================================== */}
          <div className="application-footer">

            <div className="application-date">

              <strong>
                Date:
              </strong>{" "}
              19/09/2026

              <br />

              <strong>
                Application No:
              </strong>{" "}
              {applicationData.applicationNo}

            </div>


            <div className="application-signature-area">

              <img
                src={applicantPhoto}
                alt="Applicant signature"
                className="application-signature-photo"
              />

              <div className="application-signature-line"></div>

              <strong>
                SIGNATURE OF THE APPLICANT
              </strong>

            </div>

          </div>

        </div>

      </section>

    </main>
  );
};


/* ==========================================================
   APPLICATION SECTION TITLE
========================================================== */

const ApplicationTitle = ({
  title,
  rightText,
}) => {
  return (
    <div className="application-title">

      <strong>
        {title}
      </strong>

      {rightText && (
        <span>
          {rightText}
        </span>
      )}

    </div>
  );
};


/* ==========================================================
   PERSONAL INFORMATION ROW
========================================================== */

const InfoRow = ({
  label,
  value,
}) => {
  return (
    <div className="application-personal-row application-normal-row">

      <div className="application-label">
        {label}
      </div>

      <div className="application-value">
        {value}
      </div>

    </div>
  );
};


export default Dashboard;