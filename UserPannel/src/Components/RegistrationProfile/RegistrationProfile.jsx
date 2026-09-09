import React, { useState, useRef } from 'react';
import './RegistrationProfile.css';
import {
  Download,
  Edit3,
  Copy,
  CheckCircle2,
  Calendar,
  User,
  Users,
  Tag,
  Phone,
  Mail,
  MapPin,
  GraduationCap,
  Target,
  FileCheck,
  ChevronDown,
  ChevronUp,
  X,
  ArrowRight,
  ArrowLeft,
  Check,
  Plus,
  UploadCloud
} from 'lucide-react';

const RegistrationProfile = () => {
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [activeStep, setActiveStep] = useState(1);
  const [copied, setCopied] = useState(false);

  // Accordion collapse states
  const [openLocal, setOpenLocal] = useState(true);
  const [openPermanent, setOpenPermanent] = useState(true);
  const [openAddQual, setOpenAddQual] = useState(false);
  const [openAddedQualList, setOpenAddedQualList] = useState(true);

  // File input references
  const photoInputRef = useRef(null);
  const sigInputRef = useRef(null);
  const dateInputRef = useRef(null);

  // Profile Form Data state
  const [formData, setFormData] = useState({
    fullName: 'Prasanta Kumar Khuntia',
    studentId: 'S2026PK60917',
    registeredOn: 'August 27, 2026',
    fatherName: 'PRAVAT KUMAR KHUNTIA',
    motherName: 'KAVITA DEVI',
    dobRaw: '2026-08-04',
    gender: 'Female',
    category: 'OBC',
    aadhar: 'XXXX - XXXX - [Redacted]',
    mobile: '9407057752',
    email: 'pk@gmail.xom',
    // Local Address
    localAddress: '01 Narsinghpur',
    localDistrict: 'hgh',
    localPin: '487551',
    localState: 'Madhya Pradesh',
    localCountry: 'India',
    sameAsLocal: false,
    // Permanent Address
    permAddress: 'Palada',
    permDistrict: 'cuttack',
    permPin: '754293',
    permState: 'Odisha',
    permCountry: 'India',
    // Goals
    careerGoal: 'Job',
    // Step 4
    aadharInput: '[Redacted]',
    agreeTerms: true,
    photoFile: null,
    photoPreview: null,
    photoFileName: 'Screenshot 2026-07-22 210412.png',
    signatureFile: null,
    signaturePreview: null,
    signatureFileName: 'Screenshot 2026-07-25 121106.png'
  });

  // Step 2 Qualifications list state
  const [qualifications, setQualifications] = useState([
    {
      id: 1,
      qualification: 'Graduate Pass Out',
      course: 'mhj',
      branch: ',m',
      institute: 'mm',
      university: 'kjk',
      year: '2024',
      grade: '52',
      status: 'Pass Out'
    }
  ]);

  // Step 2 New qualification form state
  const [newQual, setNewQual] = useState({
    qualification: '',
    course: '',
    branch: '',
    institute: '',
    university: '',
    year: '',
    grade: '',
    status: 'Pass Out'
  });

  const handleCopyId = () => {
    navigator.clipboard.writeText(formData.studentId);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownloadPDF = () => {
    window.print();
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleNewQualChange = (e) => {
    const { name, value } = e.target;
    setNewQual((prev) => ({ ...prev, [name]: value }));
  };

  const handleAddQualification = (e) => {
    e.preventDefault();
    if (!newQual.qualification || !newQual.course) {
      alert('Please fill at least Qualification and Course name.');
      return;
    }

    setQualifications((prev) => [
      ...prev,
      {
        id: Date.now(),
        ...newQual
      }
    ]);

    setNewQual({
      qualification: '',
      course: '',
      branch: '',
      institute: '',
      university: '',
      year: '',
      grade: '',
      status: 'Pass Out'
    });

    setOpenAddQual(false);
    setOpenAddedQualList(true);
  };

  const handleCheckboxChange = (e) => {
    const checked = e.target.checked;
    setFormData((prev) => ({
      ...prev,
      sameAsLocal: checked,
      ...(checked
        ? {
            permAddress: prev.localAddress,
            permDistrict: prev.localDistrict,
            permPin: prev.localPin,
            permState: prev.localState,
            permCountry: prev.localCountry
          }
        : {})
    }));
  };

  const handleFileUpload = (e, fileType) => {
    const file = e.target.files[0];
    if (!file) return;

    if (file.size > 500 * 1024) {
      alert('File size exceeds the 500 KB limit. Please choose a smaller file.');
      return;
    }

    const previewUrl = URL.createObjectURL(file);

    if (fileType === 'photo') {
      setFormData((prev) => ({
        ...prev,
        photoFile: file,
        photoPreview: previewUrl,
        photoFileName: file.name
      }));
    } else if (fileType === 'signature') {
      setFormData((prev) => ({
        ...prev,
        signatureFile: file,
        signaturePreview: previewUrl,
        signatureFileName: file.name
      }));
    }
  };

  const handleSaveAndNext = (e) => {
    e.preventDefault();
    if (activeStep < 4) {
      setActiveStep((prev) => prev + 1);
    } else {
      if (!formData.agreeTerms) {
        alert('Please accept the Declaration & Terms before final submission.');
        return;
      }
      setIsEditOpen(false);
      setActiveStep(1);
    }
  };

  const handleBack = () => {
    if (activeStep > 1) {
      setActiveStep((prev) => prev - 1);
    }
  };

  return (
    <div className="registration-profile-root">
      {/* Top Emerald Banner */}
      <div className="registration-profile-banner"></div>

      <div className="registration-profile-wrapper">
        {/* Profile Header */}
        <div className="registration-profile-header-card">
          <div className="registration-profile-avatar-row">
            <div className="registration-profile-avatar-box">
              {formData.photoPreview ? (
                <img
                  src={formData.photoPreview}
                  alt="Student Avatar"
                  className="registration-profile-avatar-img"
                />
              ) : (
                <div className="registration-profile-avatar-inner">
                  <FileCheck size={40} color="#009668" strokeWidth={1.75} />
                </div>
              )}
            </div>

            <div className="registration-profile-identity">
              <div className="registration-profile-name-bar">
                <h1 className="registration-profile-user-name">{formData.fullName}</h1>
                <span className="registration-profile-verified-badge">
                  <CheckCircle2 size={13} strokeWidth={2.5} /> VERIFIED
                </span>
              </div>

              <div className="registration-profile-id-line">
                <span className="registration-profile-id-label">Student ID:</span>
                <span className="registration-profile-id-tag">{formData.studentId}</span>
                <button
                  type="button"
                  className="registration-profile-copy-btn"
                  onClick={handleCopyId}
                  aria-label="Copy Student ID"
                >
                  <Copy size={14} />
                  {copied && <span className="registration-profile-tooltip">Copied!</span>}
                </button>
              </div>

              <p className="registration-profile-reg-date">
                Registered on: <strong>{formData.registeredOn}</strong>
              </p>
            </div>
          </div>

          <div className="registration-profile-actions">
            <button
              type="button"
              className="registration-profile-btn-download"
              onClick={handleDownloadPDF}
            >
              <Download size={16} /> Download PDF
            </button>
            <button
              type="button"
              className="registration-profile-btn-edit"
              onClick={() => setIsEditOpen(true)}
            >
              <Edit3 size={16} /> Edit Profile
            </button>
          </div>
        </div>

        {/* Section 1: Personal Info & Student ID Badge */}
        <div className="registration-profile-grid-top">
          <div className="registration-profile-card">
            <h2 className="registration-profile-card-heading">Personal Information</h2>

            <div className="registration-profile-fields-2col">
              <div className="registration-profile-field-item">
                <div className="registration-profile-field-icon">
                  <User size={18} />
                </div>
                <div>
                  <div className="registration-profile-field-title">FATHER'S NAME</div>
                  <div className="registration-profile-field-data">{formData.fatherName}</div>
                </div>
              </div>

              <div className="registration-profile-field-item">
                <div className="registration-profile-field-icon">
                  <User size={18} />
                </div>
                <div>
                  <div className="registration-profile-field-title">MOTHER'S NAME</div>
                  <div className="registration-profile-field-data">{formData.motherName}</div>
                </div>
              </div>

              <div className="registration-profile-field-item">
                <div className="registration-profile-field-icon">
                  <Calendar size={18} />
                </div>
                <div>
                  <div className="registration-profile-field-title">DATE OF BIRTH</div>
                  <div className="registration-profile-field-data">{formData.dobRaw}</div>
                </div>
              </div>

              <div className="registration-profile-field-item">
                <div className="registration-profile-field-icon">
                  <Users size={18} />
                </div>
                <div>
                  <div className="registration-profile-field-title">GENDER</div>
                  <div className="registration-profile-field-data">{formData.gender}</div>
                </div>
              </div>

              <div className="registration-profile-field-item">
                <div className="registration-profile-field-icon">
                  <Tag size={18} />
                </div>
                <div>
                  <div className="registration-profile-field-title">CATEGORY / STREAM</div>
                  <div className="registration-profile-field-data">{formData.category}</div>
                </div>
              </div>

              <div className="registration-profile-field-item">
                <div className="registration-profile-field-icon">
                  <FileCheck size={18} />
                </div>
                <div>
                  <div className="registration-profile-field-title">AADHAR ID NUMBER</div>
                  <div className="registration-profile-field-data">{formData.aadhar}</div>
                </div>
              </div>

              <div className="registration-profile-field-item">
                <div className="registration-profile-field-icon">
                  <Phone size={18} />
                </div>
                <div>
                  <div className="registration-profile-field-title">MOBILE NUMBER</div>
                  <div className="registration-profile-field-data">{formData.mobile}</div>
                </div>
              </div>

              <div className="registration-profile-field-item">
                <div className="registration-profile-field-icon">
                  <Mail size={18} />
                </div>
                <div>
                  <div className="registration-profile-field-title">PRIMARY EMAIL</div>
                  <div className="registration-profile-field-data">{formData.email}</div>
                </div>
              </div>
            </div>
          </div>

          <div className="registration-profile-card registration-profile-badge-card">
            <div className="registration-profile-badge-top">
              <h3>STUDENT ID BADGE</h3>
              <p>Scan barcode for registration validation</p>
            </div>

            <div className="registration-profile-barcode-box">
              <svg viewBox="0 0 160 48" className="registration-profile-barcode-vector">
                <rect x="5" width="3" height="46" fill="#111827" />
                <rect x="11" width="2" height="46" fill="#111827" />
                <rect x="16" width="4" height="46" fill="#111827" />
                <rect x="23" width="2" height="46" fill="#111827" />
                <rect x="27" width="5" height="46" fill="#111827" />
                <rect x="35" width="2" height="46" fill="#111827" />
                <rect x="40" width="3" height="46" fill="#111827" />
                <rect x="46" width="5" height="46" fill="#111827" />
                <rect x="54" width="2" height="46" fill="#111827" />
                <rect x="59" width="4" height="46" fill="#111827" />
                <rect x="66" width="3" height="46" fill="#111827" />
                <rect x="72" width="2" height="46" fill="#111827" />
                <rect x="77" width="4" height="46" fill="#111827" />
                <rect x="84" width="2" height="46" fill="#111827" />
                <rect x="89" width="5" height="46" fill="#111827" />
                <rect x="97" width="2" height="46" fill="#111827" />
                <rect x="102" width="4" height="46" fill="#111827" />
                <rect x="109" width="3" height="46" fill="#111827" />
                <rect x="115" width="2" height="46" fill="#111827" />
                <rect x="120" width="4" height="46" fill="#111827" />
                <rect x="127" width="3" height="46" fill="#111827" />
                <rect x="133" width="5" height="46" fill="#111827" />
                <rect x="141" width="2" height="46" fill="#111827" />
                <rect x="146" width="4" height="46" fill="#111827" />
                <rect x="153" width="2" height="46" fill="#111827" />
              </svg>
              <div className="registration-profile-barcode-code">{formData.studentId}</div>
            </div>

            <div className="registration-profile-verification-box">
              <span className="registration-profile-verif-headline">VERIFICATION STATEMENT</span>
              <p className="registration-profile-verif-copy">
                This profile represents a verified candidate enrolled in the India
                International Internship framework.
              </p>
            </div>
          </div>
        </div>

        {/* Section 2: Address Coordinates */}
        <div className="registration-profile-grid-address">
          <div className="registration-profile-card">
            <div className="registration-profile-section-header">
              <span className="registration-profile-section-icon">
                <MapPin size={17} />
              </span>
              <h3>Local Address Coordinate</h3>
            </div>

            <div className="registration-profile-address-panel">
              <div className="registration-profile-field-title">STREET / BUILDING</div>
              <div className="registration-profile-field-data">{formData.localAddress}</div>
            </div>

            <div className="registration-profile-address-row">
              <div className="registration-profile-address-panel registration-profile-flex-1">
                <div className="registration-profile-field-title">DISTRICT / PIN</div>
                <div className="registration-profile-field-data">
                  {formData.localDistrict} ({formData.localPin})
                </div>
              </div>
              <div className="registration-profile-address-panel registration-profile-flex-1">
                <div className="registration-profile-field-title">STATE / COUNTRY</div>
                <div className="registration-profile-field-data">
                  {formData.localState}, {formData.localCountry}
                </div>
              </div>
            </div>
          </div>

          <div className="registration-profile-card">
            <div className="registration-profile-section-header">
              <span className="registration-profile-section-icon">
                <MapPin size={17} />
              </span>
              <h3>Permanent Address Coordinate</h3>
            </div>

            <div className="registration-profile-address-panel">
              <div className="registration-profile-field-title">STREET / BUILDING</div>
              <div className="registration-profile-field-data">{formData.permAddress}</div>
            </div>

            <div className="registration-profile-address-row">
              <div className="registration-profile-address-panel registration-profile-flex-1">
                <div className="registration-profile-field-title">DISTRICT / PIN</div>
                <div className="registration-profile-field-data">
                  {formData.permDistrict} ({formData.permPin})
                </div>
              </div>
              <div className="registration-profile-address-panel registration-profile-flex-1">
                <div className="registration-profile-field-title">STATE / COUNTRY</div>
                <div className="registration-profile-field-data">
                  {formData.permState}, {formData.permCountry}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Section 3: Academic Credentials */}
        <div className="registration-profile-card">
          <div className="registration-profile-section-header">
            <span className="registration-profile-section-icon">
              <GraduationCap size={17} />
            </span>
            <h3>Academic Credentials</h3>
          </div>

          <div className="registration-profile-table-scroll">
            <table className="registration-profile-table">
              <thead>
                <tr>
                  <th>QUALIFICATION</th>
                  <th>DEGREE / SPECIALIZATION</th>
                  <th>INSTITUTION / UNIVERSITY</th>
                  <th>SESSION / YEAR</th>
                  <th>GRADE / SCORE</th>
                  <th style={{ textAlign: 'center' }}>STATUS</th>
                </tr>
              </thead>
              <tbody>
                {qualifications.map((q) => (
                  <tr key={q.id}>
                    <td className="registration-profile-td-highlight">{q.qualification}</td>
                    <td>
                      <span className="registration-profile-td-primary">{q.course}</span>
                      <span className="registration-profile-td-sub">Major: {q.branch}</span>
                    </td>
                    <td>
                      <span className="registration-profile-td-primary">{q.institute}</span>
                      <span className="registration-profile-td-sub">Univ: {q.university}</span>
                    </td>
                    <td className="registration-profile-td-highlight">{q.year}</td>
                    <td className="registration-profile-td-highlight">{q.grade}</td>
                    <td style={{ textAlign: 'center' }}>
                      <span className="registration-profile-status-pill">
                        <span className="registration-profile-status-dot">●</span> PASSED
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Section 4: Objectives & Declaration */}
        <div className="registration-profile-grid-bottom">
          <div className="registration-profile-card registration-profile-column-between">
            <div>
              <div className="registration-profile-section-header">
                <span className="registration-profile-section-icon">
                  <Target size={17} />
                </span>
                <h3>Post-Internship Objectives</h3>
              </div>

              <div className="registration-profile-field-title registration-profile-mt-2">
                PRIMARY CAREER / PROFESSIONAL GOAL:
              </div>
              <div className="registration-profile-goal-badge">
                <Check size={16} strokeWidth={2.5} />
                <span>{formData.careerGoal}</span>
              </div>
            </div>

            <p className="registration-profile-footnote">
              This objective guides internship matches and virtual workspace
              specialization paths.
            </p>
          </div>

          <div className="registration-profile-card">
            <div className="registration-profile-section-header">
              <span className="registration-profile-section-icon">
                <FileCheck size={17} />
              </span>
              <h3>Signed Declaration</h3>
            </div>

            <div className="registration-profile-signature-box">
              {formData.signaturePreview ? (
                <img
                  src={formData.signaturePreview}
                  alt="Digital Signature"
                  className="registration-profile-sig-preview-img"
                />
              ) : (
                <div className="registration-profile-stamp">
                  <div className="registration-profile-stamp-inner">
                    <span className="registration-profile-stamp-title">Foundation</span>
                    <span className="registration-profile-stamp-year">2026</span>
                  </div>
                </div>
              )}
              <span className="registration-profile-stamp-label">
                DIGITALLY SIGNED & VALIDATED
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* ----------------- EDIT PROFILE MODAL / POPUP ---------------------------- */}
      {/* ========================================================================= */}
      {isEditOpen && (
        <div
          className="registration-profile-modal-backdrop"
          onClick={() => setIsEditOpen(false)}
        >
          <div
            className="registration-profile-modal-container"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="registration-profile-modal-header">
              <div>
                <h2 className="registration-profile-modal-headline">Student Registration</h2>
                <p className="registration-profile-modal-subheadline">
                  Please complete your student profile registration details.
                </p>
              </div>
              <button
                type="button"
                className="registration-profile-modal-close"
                onClick={() => setIsEditOpen(false)}
                aria-label="Close modal"
              >
                <X size={20} />
              </button>
            </div>

            {/* Stepper Card */}
            <div className="registration-profile-stepper-card">
              <div className="registration-profile-stepper-track">
                {/* Step 1 */}
                <div
                  className={`registration-profile-step-unit ${activeStep >= 1 ? 'is-active' : ''} ${activeStep > 1 ? 'is-completed' : ''}`}
                  onClick={() => setActiveStep(1)}
                >
                  <div className="registration-profile-step-bubble">
                    {activeStep > 1 ? <Check size={18} strokeWidth={3} /> : '1'}
                  </div>
                  <div className="registration-profile-step-labels">
                    <span className="registration-profile-step-number">Step 1</span>
                    <span className="registration-profile-step-caption">Basic Profile</span>
                  </div>
                </div>

                <div className={`registration-profile-step-line ${activeStep > 1 ? 'is-done' : ''}`}></div>

                {/* Step 2 */}
                <div
                  className={`registration-profile-step-unit ${activeStep >= 2 ? 'is-active' : ''} ${activeStep > 2 ? 'is-completed' : ''}`}
                  onClick={() => setActiveStep(2)}
                >
                  <div className="registration-profile-step-bubble">
                    {activeStep > 2 ? <Check size={18} strokeWidth={3} /> : '2'}
                  </div>
                  <div className="registration-profile-step-labels">
                    <span className="registration-profile-step-number">Step 2</span>
                    <span className="registration-profile-step-caption">Academic Details</span>
                  </div>
                </div>

                <div className={`registration-profile-step-line ${activeStep > 2 ? 'is-done' : ''}`}></div>

                {/* Step 3 */}
                <div
                  className={`registration-profile-step-unit ${activeStep >= 3 ? 'is-active' : ''} ${activeStep > 3 ? 'is-completed' : ''}`}
                  onClick={() => setActiveStep(3)}
                >
                  <div className="registration-profile-step-bubble">
                    {activeStep > 3 ? <Check size={18} strokeWidth={3} /> : '3'}
                  </div>
                  <div className="registration-profile-step-labels">
                    <span className="registration-profile-step-number">Step 3</span>
                    <span className="registration-profile-step-caption">Goals</span>
                  </div>
                </div>

                <div className={`registration-profile-step-line ${activeStep > 3 ? 'is-done' : ''}`}></div>

                {/* Step 4 */}
                <div
                  className={`registration-profile-step-unit ${activeStep >= 4 ? 'is-active' : ''}`}
                  onClick={() => setActiveStep(4)}
                >
                  <div className="registration-profile-step-bubble">4</div>
                  <div className="registration-profile-step-labels">
                    <span className="registration-profile-step-number">Step 4</span>
                    <span className="registration-profile-step-caption">Documents</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Modal Form */}
            <form onSubmit={handleSaveAndNext} className="registration-profile-form">
              {/* -------------------- STEP 1 -------------------- */}
              {activeStep === 1 && (
                <div className="registration-profile-step-content">
                  <div className="registration-profile-form-section-intro">
                    <h3>1. Student Basic Profile</h3>
                    <p>Please fill out your identity and contact coordinates.</p>
                  </div>

                  <div className="registration-profile-form-row">
                    <div className="registration-profile-input-group">
                      <label>
                        FULL NAME<span className="registration-profile-star">*</span>
                      </label>
                      <input
                        type="text"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <div className="registration-profile-input-group">
                      <label>
                        DATE OF BIRTH<span className="registration-profile-star">*</span>
                      </label>
                      <div
                        className="registration-profile-input-addon"
                        onClick={() => dateInputRef.current && dateInputRef.current.showPicker && dateInputRef.current.showPicker()}
                      >
                        <input
                          ref={dateInputRef}
                          type="date"
                          name="dobRaw"
                          value={formData.dobRaw}
                          onChange={handleInputChange}
                          className="registration-profile-date-input"
                          required
                        />
                        <Calendar size={18} className="registration-profile-input-icon" />
                      </div>
                    </div>
                  </div>

                  <div className="registration-profile-form-row">
                    <div className="registration-profile-input-group">
                      <label>
                        FATHER'S NAME<span className="registration-profile-star">*</span>
                      </label>
                      <input
                        type="text"
                        name="fatherName"
                        value={formData.fatherName}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <div className="registration-profile-input-group">
                      <label>
                        MOTHER'S NAME<span className="registration-profile-star">*</span>
                      </label>
                      <input
                        type="text"
                        name="motherName"
                        value={formData.motherName}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                  </div>

                  <div className="registration-profile-form-row">
                    <div className="registration-profile-input-group">
                      <label>
                        GENDER<span className="registration-profile-star">*</span>
                      </label>
                      <select
                        name="gender"
                        value={formData.gender}
                        onChange={handleInputChange}
                      >
                        <option value="Female">Female</option>
                        <option value="Male">Male</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                    <div className="registration-profile-input-group">
                      <label>
                        CATEGORY<span className="registration-profile-star">*</span>
                      </label>
                      <select
                        name="category"
                        value={formData.category}
                        onChange={handleInputChange}
                      >
                        <option value="OBC">OBC</option>
                        <option value="GENERAL">GENERAL</option>
                        <option value="SC">SC</option>
                        <option value="ST">ST</option>
                      </select>
                    </div>
                  </div>

                  {/* Local Address Accordion */}
                  <div className="registration-profile-accordion">
                    <div
                      className="registration-profile-accordion-trigger"
                      onClick={() => setOpenLocal(!openLocal)}
                    >
                      <div className="registration-profile-accordion-title">
                        <MapPin size={18} color="#009668" />
                        <span>
                          Local Address Details <span className="registration-profile-star">*</span>
                        </span>
                      </div>
                      {openLocal ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                    </div>

                    {openLocal && (
                      <div className="registration-profile-accordion-body">
                        <div className="registration-profile-input-group">
                          <label>
                            HOUSE/STREET/LOCAL ADDRESS<span className="registration-profile-star">*</span>
                          </label>
                          <input
                            type="text"
                            name="localAddress"
                            value={formData.localAddress}
                            onChange={handleInputChange}
                            required
                          />
                        </div>

                        <div className="registration-profile-form-row">
                          <div className="registration-profile-input-group">
                            <label>
                              DISTRICT<span className="registration-profile-star">*</span>
                            </label>
                            <input
                              type="text"
                              name="localDistrict"
                              value={formData.localDistrict}
                              onChange={handleInputChange}
                              required
                            />
                          </div>
                          <div className="registration-profile-input-group">
                            <label>
                              STATE<span className="registration-profile-star">*</span>
                            </label>
                            <input
                              type="text"
                              name="localState"
                              value={formData.localState}
                              onChange={handleInputChange}
                              required
                            />
                          </div>
                        </div>

                        <div className="registration-profile-form-row">
                          <div className="registration-profile-input-group">
                            <label>
                              COUNTRY<span className="registration-profile-star">*</span>
                            </label>
                            <input
                              type="text"
                              name="localCountry"
                              value={formData.localCountry}
                              onChange={handleInputChange}
                              required
                            />
                          </div>
                          <div className="registration-profile-input-group">
                            <label>
                              PIN/ZIP CODE<span className="registration-profile-star">*</span>
                            </label>
                            <input
                              type="text"
                              name="localPin"
                              value={formData.localPin}
                              onChange={handleInputChange}
                              required
                            />
                          </div>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Same as local Checkbox */}
                  <div className="registration-profile-checkbox-bar">
                    <label className="registration-profile-custom-checkbox">
                      <input
                        type="checkbox"
                        checked={formData.sameAsLocal}
                        onChange={handleCheckboxChange}
                      />
                      <span className="registration-profile-check-box"></span>
                      SAME AS LOCAL ADDRESS
                    </label>
                  </div>

                  {/* Permanent Address Accordion */}
                  <div className="registration-profile-accordion">
                    <div
                      className="registration-profile-accordion-trigger"
                      onClick={() => setOpenPermanent(!openPermanent)}
                    >
                      <div className="registration-profile-accordion-title">
                        <MapPin size={18} color="#009668" />
                        <span>
                          Permanent Address Details <span className="registration-profile-star">*</span>
                        </span>
                      </div>
                      {openPermanent ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                    </div>

                    {openPermanent && (
                      <div className="registration-profile-accordion-body">
                        <div className="registration-profile-input-group">
                          <label>
                            HOUSE/STREET/PERMANENT ADDRESS<span className="registration-profile-star">*</span>
                          </label>
                          <input
                            type="text"
                            name="permAddress"
                            value={formData.permAddress}
                            onChange={handleInputChange}
                            required
                          />
                        </div>

                        <div className="registration-profile-form-row">
                          <div className="registration-profile-input-group">
                            <label>
                              DISTRICT<span className="registration-profile-star">*</span>
                            </label>
                            <input
                              type="text"
                              name="permDistrict"
                              value={formData.permDistrict}
                              onChange={handleInputChange}
                              required
                            />
                          </div>
                          <div className="registration-profile-input-group">
                            <label>
                              STATE<span className="registration-profile-star">*</span>
                            </label>
                            <input
                              type="text"
                              name="permState"
                              value={formData.permState}
                              onChange={handleInputChange}
                              required
                            />
                          </div>
                        </div>

                        <div className="registration-profile-form-row">
                          <div className="registration-profile-input-group">
                            <label>
                              COUNTRY<span className="registration-profile-star">*</span>
                            </label>
                            <input
                              type="text"
                              name="permCountry"
                              value={formData.permCountry}
                              onChange={handleInputChange}
                              required
                            />
                          </div>
                          <div className="registration-profile-input-group">
                            <label>
                              PIN/ZIP CODE<span className="registration-profile-star">*</span>
                            </label>
                            <input
                              type="text"
                              name="permPin"
                              value={formData.permPin}
                              onChange={handleInputChange}
                              required
                            />
                          </div>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Mobile Number */}
                  <div className="registration-profile-input-group registration-profile-mt-2">
                    <label>
                      MOBILE NO.<span className="registration-profile-star">*</span>
                    </label>
                    <input
                      type="tel"
                      name="mobile"
                      value={formData.mobile}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </div>
              )}

              {/* -------------------- STEP 2: ACADEMIC DETAILS -------------------- */}
              {activeStep === 2 && (
                <div className="registration-profile-step-content">
                  <div className="registration-profile-form-section-intro">
                    <h3>2. Academic Details</h3>
                    <p>Add your qualifications list below. Add at least one record to continue.</p>
                  </div>

                  {/* Accordion 1: Add New Qualification */}
                  <div className="registration-profile-accordion">
                    <div
                      className="registration-profile-accordion-trigger"
                      onClick={() => setOpenAddQual(!openAddQual)}
                    >
                      <div className="registration-profile-accordion-title">
                        <Plus size={18} color="#009668" strokeWidth={2.5} />
                        <span>Add New Qualification</span>
                      </div>
                      {openAddQual ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                    </div>

                    {openAddQual && (
                      <div className="registration-profile-accordion-body">
                        <div className="registration-profile-form-row">
                          <div className="registration-profile-input-group">
                            <label>
                              QUALIFICATION<span className="registration-profile-star">*</span>
                            </label>
                            <select
                              name="qualification"
                              value={newQual.qualification}
                              onChange={handleNewQualChange}
                            >
                              <option value="">Select Qualification</option>
                              <option value="Graduate Pass Out">Graduate Pass Out</option>
                              <option value="Post Graduate">Post Graduate</option>
                              <option value="Diploma">Diploma</option>
                              <option value="12th Standard">12th Standard</option>
                            </select>
                          </div>
                          <div className="registration-profile-input-group">
                            <label>
                              COURSE / DEGREE NAME<span className="registration-profile-star">*</span>
                            </label>
                            <input
                              type="text"
                              name="course"
                              placeholder="e.g. B.Tech, BCA, B.Sc, MCA, MBA"
                              value={newQual.course}
                              onChange={handleNewQualChange}
                            />
                          </div>
                        </div>

                        <div className="registration-profile-form-row">
                          <div className="registration-profile-input-group">
                            <label>
                              BRANCH / SPECIALIZATION<span className="registration-profile-star">*</span>
                            </label>
                            <input
                              type="text"
                              name="branch"
                              placeholder="e.g. Computer Science Engineering, Finance"
                              value={newQual.branch}
                              onChange={handleNewQualChange}
                            />
                          </div>
                          <div className="registration-profile-input-group">
                            <label>
                              COLLEGE / INSTITUTE NAME<span className="registration-profile-star">*</span>
                            </label>
                            <input
                              type="text"
                              name="institute"
                              placeholder="e.g. Techno College"
                              value={newQual.institute}
                              onChange={handleNewQualChange}
                            />
                          </div>
                        </div>

                        <div className="registration-profile-form-row">
                          <div className="registration-profile-input-group">
                            <label>
                              UNIVERSITY NAME<span className="registration-profile-star">*</span>
                            </label>
                            <input
                              type="text"
                              name="university"
                              placeholder="e.g. MAKAUT"
                              value={newQual.university}
                              onChange={handleNewQualChange}
                            />
                          </div>
                          <div className="registration-profile-input-group">
                            <label>
                              SESSION / YEAR<span className="registration-profile-star">*</span>
                            </label>
                            <input
                              type="text"
                              name="year"
                              placeholder="e.g. 2022-26 or 2024"
                              value={newQual.year}
                              onChange={handleNewQualChange}
                            />
                          </div>
                        </div>

                        <div className="registration-profile-form-row">
                          <div className="registration-profile-input-group">
                            <label>
                              GRADE / PERCENTAGE / CGPA<span className="registration-profile-star">*</span>
                            </label>
                            <input
                              type="text"
                              name="grade"
                              placeholder="e.g. 85% or 9.0 CGPA"
                              value={newQual.grade}
                              onChange={handleNewQualChange}
                            />
                          </div>
                          <div className="registration-profile-input-group">
                            <label>
                              STUDENT STATUS<span className="registration-profile-star">*</span>
                            </label>
                            <select
                              name="status"
                              value={newQual.status}
                              onChange={handleNewQualChange}
                            >
                              <option value="Pass Out">Pass Out</option>
                              <option value="Pursuing">Pursuing</option>
                            </select>
                            <span className="registration-profile-field-hint">
                              Auto Selected Regarding Qualification Type
                            </span>
                          </div>
                        </div>

                        <div className="registration-profile-qual-btn-row">
                          <button
                            type="button"
                            className="registration-profile-btn-add-qual"
                            onClick={handleAddQualification}
                          >
                            <Plus size={16} strokeWidth={2.5} /> Add Qualification
                          </button>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Accordion 2: Added Academic Qualifications List */}
                  <div className="registration-profile-accordion">
                    <div
                      className="registration-profile-accordion-trigger"
                      onClick={() => setOpenAddedQualList(!openAddedQualList)}
                    >
                      <div className="registration-profile-accordion-title">
                        <GraduationCap size={18} color="#009668" />
                        <span>Added Academic Qualifications (Total: {qualifications.length})</span>
                      </div>
                      {openAddedQualList ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                    </div>

                    {openAddedQualList && (
                      <div className="registration-profile-accordion-body registration-profile-p-0">
                        <div className="registration-profile-table-scroll">
                          <table className="registration-profile-table registration-profile-modal-tbl">
                            <thead>
                              <tr>
                                <th>Qualification</th>
                                <th>Course / Branch</th>
                                <th>Institute</th>
                                <th>Year</th>
                                <th>Status</th>
                              </tr>
                            </thead>
                            <tbody>
                              {qualifications.map((q) => (
                                <tr key={q.id}>
                                  <td className="registration-profile-td-highlight">
                                    {q.qualification}
                                  </td>
                                  <td>
                                    {q.course} {q.branch ? `/ ${q.branch}` : ''}
                                  </td>
                                  <td>{q.institute}</td>
                                  <td>{q.year}</td>
                                  <td>
                                    <span className="registration-profile-status-pill">
                                      {q.status}
                                    </span>
                                  </td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              )}

              {/* -------------------- STEP 3: INTERNSHIP GOALS -------------------- */}
              {activeStep === 3 && (
                <div className="registration-profile-step-content">
                  <div className="registration-profile-form-section-intro">
                    <h3>3. Internship Goals</h3>
                    <p>Select your internship goals and career objectives.</p>
                  </div>

                  <div className="registration-profile-input-group registration-profile-max-w-xs">
                    <label>
                      WHAT ARE YOUR GOALS AFTER THE INTERNSHIP?
                      <span className="registration-profile-star">*</span>
                    </label>
                    <select
                      name="careerGoal"
                      value={formData.careerGoal}
                      onChange={handleInputChange}
                    >
                      <option value="Job">Job</option>
                      <option value="Higher Studies">Higher Studies</option>
                      <option value="Entrepreneurship">Entrepreneurship</option>
                    </select>
                  </div>
                </div>
              )}

              {/* -------------------- STEP 4: DOCUMENT & UPLOADS -------------------- */}
              {activeStep === 4 && (
                <div className="registration-profile-step-content">
                  <div className="registration-profile-form-section-intro">
                    <h3>4. Document & Uploads</h3>
                    <p>
                      Upload identification details and support documents{' '}
                      <strong>(Max 500 KB per file)</strong>.
                    </p>
                  </div>

                  {/* Aadhar No Field */}
                  <div className="registration-profile-input-group">
                    <label>AADHAR NO. <span className="registration-profile-optional">(OPTIONAL)</span></label>
                    <input
                      type="text"
                      name="aadharInput"
                      value={formData.aadharInput}
                      onChange={handleInputChange}
                      placeholder="Enter 12-digit number"
                    />
                  </div>

                  {/* Upload Dropzones */}
                  <div className="registration-profile-form-row registration-profile-mt-3">
                    {/* Photo Upload Card */}
                    <div className="registration-profile-upload-col">
                      <span className="registration-profile-upload-label">
                        PHOTO (MAX. 500 KB)<span className="registration-profile-star">*</span>
                      </span>
                      <input
                        type="file"
                        ref={photoInputRef}
                        accept="image/*"
                        style={{ display: 'none' }}
                        onChange={(e) => handleFileUpload(e, 'photo')}
                      />
                      <div
                        className="registration-profile-upload-card registration-profile-upload-active"
                        onClick={() => photoInputRef.current && photoInputRef.current.click()}
                      >
                        {formData.photoPreview ? (
                          <img
                            src={formData.photoPreview}
                            alt="Photo Preview"
                            className="registration-profile-uploaded-thumb"
                          />
                        ) : (
                          <div className="registration-profile-thumb-doc">
                            <div className="registration-profile-thumb-header">
                              <span>Profile Preview</span>
                            </div>
                            <div className="registration-profile-thumb-lines">
                              <div></div>
                              <div></div>
                              <div></div>
                            </div>
                          </div>
                        )}
                        <div className="registration-profile-upload-meta">
                          <UploadCloud size={14} />
                          <span className="registration-profile-filename">
                            {formData.photoFileName}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Signature Upload Card */}
                    <div className="registration-profile-upload-col">
                      <span className="registration-profile-upload-label">
                        SIGNATURE (MAX. 500 KB)<span className="registration-profile-star">*</span>
                      </span>
                      <input
                        type="file"
                        ref={sigInputRef}
                        accept="image/*"
                        style={{ display: 'none' }}
                        onChange={(e) => handleFileUpload(e, 'signature')}
                      />
                      <div
                        className="registration-profile-upload-card"
                        onClick={() => sigInputRef.current && sigInputRef.current.click()}
                      >
                        {formData.signaturePreview ? (
                          <img
                            src={formData.signaturePreview}
                            alt="Signature Preview"
                            className="registration-profile-uploaded-sig"
                          />
                        ) : (
                          <div className="registration-profile-signature-thumb">
                            <div className="registration-profile-thumb-badge">
                              <span>Certification 2026</span>
                            </div>
                          </div>
                        )}
                        <div className="registration-profile-upload-meta">
                          <UploadCloud size={14} />
                          <span className="registration-profile-filename">
                            {formData.signatureFileName}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Declaration & Terms Box */}
                  <div className="registration-profile-terms-box">
                    <span className="registration-profile-terms-heading">
                      DECLARATION & TERMS
                    </span>
                    <label className="registration-profile-terms-checkbox">
                      <input
                        type="checkbox"
                        name="agreeTerms"
                        checked={formData.agreeTerms}
                        onChange={handleInputChange}
                      />
                      <span className="registration-profile-check-box"></span>
                      <div className="registration-profile-terms-text">
                        <strong>
                          I HEREBY DECLARE THAT ALL VALUES, CERTIFICATES AND DOCUMENTS
                          LOADED ARE TRUE TO MY KNOWLEDGE.
                        </strong>
                        <p>Agreeing to the Terms & Conditions of International Institute of Internship</p>
                      </div>
                    </label>
                  </div>
                </div>
              )}

              {/* Modal Footer */}
              <div className="registration-profile-modal-footer">
                {activeStep > 1 && (
                  <button
                    type="button"
                    className="registration-profile-btn-back"
                    onClick={handleBack}
                  >
                    <ArrowLeft size={16} /> Back
                  </button>
                )}

                <button type="submit" className="registration-profile-btn-submit">
                  {activeStep === 4 ? (
                    <>
                      Final Submission <CheckCircle2 size={18} />
                    </>
                  ) : (
                    <>
                      Save & Next <ArrowRight size={18} />
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default RegistrationProfile;