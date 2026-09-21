import React, { useEffect, useRef, useState } from "react";
import {
  FaUser,
  FaPrint,
  FaPen,
  FaQrcode,
  FaMapMarkerAlt,
  FaChevronDown,
  FaChevronUp,
  FaArrowLeft,
  FaArrowRight,
  FaPlus,
  FaTrash,
  FaEdit,
  FaUpload,
  FaCheck,
  FaTimes,
  FaFilePdf,
  FaCalendarAlt,
  FaPhone,
  FaEnvelope,
} from "react-icons/fa";

import "./MyProfile.css";

const MyProfile = () => {
  const [showEditModal, setShowEditModal] = useState(false);
  const [activeStep, setActiveStep] = useState(1);
  const [currentAddressOpen, setCurrentAddressOpen] = useState(true);
  const [permanentAddressOpen, setPermanentAddressOpen] = useState(true);

  const [sameAddress, setSameAddress] = useState(false);

  const [profileImage, setProfileImage] = useState(
    "https://images.unsplash.com/photo-1490750967868-88aa4486c946?auto=format&fit=crop&w=400&q=80"
  );

  const [signatureImage, setSignatureImage] = useState(
    "https://images.unsplash.com/photo-1490750967868-88aa4486c946?auto=format&fit=crop&w=400&q=80"
  );

  const [resumeFile, setResumeFile] = useState(null);

  const profileInputRef = useRef(null);
  const signatureInputRef = useRef(null);
  const resumeInputRef = useRef(null);
  const certificateInputRef = useRef(null);

  const [formData, setFormData] = useState({
    fullName: "Test Recruit User",
    gender: "Male",
    dob: "1998-08-15",
    fatherName: "Mock Father",
    motherName: "Mock Mother",
    mobile: "8887776665",
    email: "recruit@hilux.com",
    maritalStatus: "Unmarried",
    nationality: "Indian",
    gotra: "",
    religion: "Sanatan/Hindu",
    category: "General",
    bloodGroup: "O+",
    hobby: "",
    languages: "English, Hindi",
    physicallyChallenged: "No",
    aadhaar: "123456789012",

    currentAddress: "123 Current St, Suite 100",
    currentDistrict: "Varanasi",
    currentState: "Uttar Pradesh",
    currentCountry: "India",
    currentPin: "221001",

    permanentAddress: "Permanent Street 123",
    permanentDistrict: "Varanasi",
    permanentState: "Uttar Pradesh",
    permanentCountry: "India",
    permanentPin: "221001",
  });

  const [educationList, setEducationList] = useState([
    {
      id: 1,
      qualification: "Graduation",
      institute: "Heritage",
      board: "CU",
      startYear: "2025",
      endYear: "2027",
      division: "A",
      marks: "80",
      subject: "Computer Science",
    },
  ]);

  const [experienceList, setExperienceList] = useState([
    {
      id: 1,
      employer: "Tech Solutions Pvt. Ltd.",
      designation: "Frontend Developer",
      location: "Noida, India",
      startDate: "2022-06-15",
      endDate: "2024-07-31",
      nature: "Built responsive web applications using React.js and Tailwind CSS.",
      duration: "2.1 Years",
    },
    {
      id: 2,
      employer: "Innovate Labs",
      designation: "Junior Software Engineer",
      location: "Remote",
      startDate: "2024-08-01",
      endDate: "",
      nature: "Working on full-stack application development using Node.js and React.",
      duration: "1 Year",
    },
  ]);

  const [educationForm, setEducationForm] = useState({
    qualification: "Graduation",
    institute: "",
    board: "",
    startYear: "",
    endYear: "",
    division: "",
    marks: "",
    subject: "",
    certificate: null,
  });

  const [experienceForm, setExperienceForm] = useState({
    employer: "",
    designation: "",
    location: "",
    startDate: "",
    endDate: "",
    nature: "",
    certificate: null,
  });

  const [editingEducationId, setEditingEducationId] = useState(null);
  const [editingExperienceId, setEditingExperienceId] = useState(null);

  const [declarationAccepted, setDeclarationAccepted] = useState(true);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFileChange = (event, type) => {
    const file = event.target.files?.[0];

    if (!file) return;

    if (type === "profile") {
      const reader = new FileReader();

      reader.onload = (e) => {
        setProfileImage(e.target.result);
      };

      reader.readAsDataURL(file);
    }

    if (type === "signature") {
      const reader = new FileReader();

      reader.onload = (e) => {
        setSignatureImage(e.target.result);
      };

      reader.readAsDataURL(file);
    }

    if (type === "resume") {
      setResumeFile(file);
    }

    if (type === "certificate") {
      setEducationForm((prev) => ({
        ...prev,
        certificate: file,
      }));
    }
  };

  const handleSameAddress = (checked) => {
    setSameAddress(checked);

    if (checked) {
      setFormData((prev) => ({
        ...prev,
        permanentAddress: prev.currentAddress,
        permanentDistrict: prev.currentDistrict,
        permanentState: prev.currentState,
        permanentCountry: prev.currentCountry,
        permanentPin: prev.currentPin,
      }));
    }
  };

  useEffect(() => {
    if (sameAddress) {
      setFormData((prev) => ({
        ...prev,
        permanentAddress: prev.currentAddress,
        permanentDistrict: prev.currentDistrict,
        permanentState: prev.currentState,
        permanentCountry: prev.currentCountry,
        permanentPin: prev.currentPin,
      }));
    }
  }, [
    sameAddress,
    formData.currentAddress,
    formData.currentDistrict,
    formData.currentState,
    formData.currentCountry,
    formData.currentPin,
  ]);

  const openEditProfile = () => {
    setActiveStep(1);
    setShowEditModal(true);
  };

  const closeEditProfile = () => {
    setShowEditModal(false);
  };

  const nextStep = () => {
    if (activeStep < 4) {
      setActiveStep((prev) => prev + 1);
    }
  };

  const previousStep = () => {
    if (activeStep > 1) {
      setActiveStep((prev) => prev - 1);
    }
  };

  const goToStep = (step) => {
    setActiveStep(step);
  };

  const resetEducationForm = () => {
    setEducationForm({
      qualification: "Graduation",
      institute: "",
      board: "",
      startYear: "",
      endYear: "",
      division: "",
      marks: "",
      subject: "",
      certificate: null,
    });

    setEditingEducationId(null);
  };

  const addEducation = () => {
    if (
      !educationForm.institute ||
      !educationForm.board ||
      !educationForm.subject
    ) {
      alert("Please complete the required education fields.");
      return;
    }

    if (editingEducationId) {
      setEducationList((prev) =>
        prev.map((item) =>
          item.id === editingEducationId
            ? {
                ...item,
                ...educationForm,
              }
            : item
        )
      );
    } else {
      setEducationList((prev) => [
        ...prev,
        {
          id: Date.now(),
          ...educationForm,
        },
      ]);
    }

    resetEducationForm();
  };

  const editEducation = (item) => {
    setEducationForm({
      qualification: item.qualification || "Graduation",
      institute: item.institute || "",
      board: item.board || "",
      startYear: item.startYear || "",
      endYear: item.endYear || "",
      division: item.division || "",
      marks: item.marks || "",
      subject: item.subject || "",
      certificate: item.certificate || null,
    });

    setEditingEducationId(item.id);
  };

  const deleteEducation = (id) => {
    if (window.confirm("Delete this qualification?")) {
      setEducationList((prev) => prev.filter((item) => item.id !== id));
    }
  };

  const resetExperienceForm = () => {
    setExperienceForm({
      employer: "",
      designation: "",
      location: "",
      startDate: "",
      endDate: "",
      nature: "",
      certificate: null,
    });

    setEditingExperienceId(null);
  };

  const addExperience = () => {
    if (
      !experienceForm.employer ||
      !experienceForm.designation ||
      !experienceForm.location
    ) {
      alert("Please complete the required experience fields.");
      return;
    }

    if (editingExperienceId) {
      setExperienceList((prev) =>
        prev.map((item) =>
          item.id === editingExperienceId
            ? {
                ...item,
                ...experienceForm,
                duration: calculateDuration(
                  experienceForm.startDate,
                  experienceForm.endDate
                ),
              }
            : item
        )
      );
    } else {
      setExperienceList((prev) => [
        ...prev,
        {
          id: Date.now(),
          ...experienceForm,
          duration: calculateDuration(
            experienceForm.startDate,
            experienceForm.endDate
          ),
        },
      ]);
    }

    resetExperienceForm();
  };

  const editExperience = (item) => {
    setExperienceForm({
      employer: item.employer || "",
      designation: item.designation || "",
      location: item.location || "",
      startDate: item.startDate || "",
      endDate: item.endDate || "",
      nature: item.nature || "",
      certificate: item.certificate || null,
    });

    setEditingExperienceId(item.id);
  };

  const deleteExperience = (id) => {
    if (window.confirm("Delete this experience?")) {
      setExperienceList((prev) => prev.filter((item) => item.id !== id));
    }
  };

  const calculateDuration = (start, end) => {
    if (!start) return "Auto Calculated";

    const startDate = new Date(start);
    const endDate = end ? new Date(end) : new Date();

    if (Number.isNaN(startDate.getTime())) {
      return "Auto Calculated";
    }

    const months =
      (endDate.getFullYear() - startDate.getFullYear()) * 12 +
      (endDate.getMonth() - startDate.getMonth());

    const years = Math.floor(Math.max(months, 0) / 12);
    const remainingMonths = Math.max(months, 0) % 12;

    if (years > 0 && remainingMonths > 0) {
      return `${years} Year(s) ${remainingMonths} Month(s)`;
    }

    if (years > 0) {
      return `${years} Year(s)`;
    }

    return `${remainingMonths} Month(s)`;
  };

  const formatDate = (date) => {
    if (!date) return "—";

    const value = new Date(date);

    if (Number.isNaN(value.getTime())) return date;

    return value.toLocaleDateString("en-GB");
  };

  const formatLongDate = (date) => {
    if (!date) return "—";

    const value = new Date(date);

    return value.toLocaleDateString("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric",
    });
  };

  const printProfile = () => {
    window.print();
  };

  const finalSubmit = () => {
    if (!declarationAccepted) {
      alert("Please accept the declaration before submitting.");
      return;
    }

    alert("Application submitted successfully.");
    setShowEditModal(false);
  };

  return (
    <div className="MyProfile">
      {/* ================= PROFILE HEADER ================= */}

      <div className="MyProfile__header">
        <div className="MyProfile__headerLeft">
          <div className="MyProfile__headerIcon">
            <FaUser />
          </div>

          <div>
            <h1 className="MyProfile__title">My Profile</h1>

            <p className="MyProfile__subtitle">
              View and manage your Job Applicant registration profile.
            </p>
          </div>
        </div>

        <div className="MyProfile__headerActions">
          <button
            type="button"
            className="MyProfile__printButton"
            onClick={printProfile}
          >
            <FaPrint />
            <span>Print / Save PDF</span>
          </button>

          <button
            type="button"
            className="MyProfile__editButton"
            onClick={openEditProfile}
          >
            <FaPen />
            <span>Edit Profile</span>
          </button>
        </div>
      </div>

      {/* ================= PRINTABLE PROFILE ================= */}

      <div className="MyProfile__printArea">
        <div className="MyProfile__application">

          <div className="MyProfile__applicationHeader">
            <div className="MyProfile__applicationTitle">
              <h2>International Institute of Internship [i3]</h2>
              <p>Recruitment Application Form</p>
            </div>

            <div className="MyProfile__qr">
              <FaQrcode />
            </div>
          </div>

          <div className="MyProfile__applicationMeta">
            <span>
              <strong>Advt. No:</strong> —
            </span>

            <span>
              <strong>Application No:</strong> REG26HJN35791
            </span>

            <span>
              <strong>Position:</strong> —
            </span>
          </div>

          {/* Personal Information */}

          <div className="MyProfile__printSection">
            <div className="MyProfile__printSectionTitle">
              Personal Information
            </div>

            <div className="MyProfile__personalGrid">
              <div className="MyProfile__personalRows">
                <div className="MyProfile__printRow">
                  <span>Name</span>
                  <strong>{formData.fullName}</strong>
                </div>

                <div className="MyProfile__printRow">
                  <span>S/O | D/O | W/O</span>
                  <strong>{formData.fatherName}</strong>
                </div>

                <div className="MyProfile__printRow">
                  <span>Mother&apos;s Name</span>
                  <strong>{formData.motherName}</strong>
                </div>

                <div className="MyProfile__printRow">
                  <span>Date of Birth</span>
                  <strong>{formatDate(formData.dob)}</strong>
                </div>

                <div className="MyProfile__printRow">
                  <span>Age</span>
                  <strong>28 Year(s) 1 Month(s) 4 Day(s)</strong>
                </div>

                <div className="MyProfile__printRow">
                  <span>Gender</span>
                  <strong>{formData.gender}</strong>
                </div>

                <div className="MyProfile__printRow">
                  <span>Physically Challenged</span>
                  <strong>
                    {formData.physicallyChallenged === "Yes" ? "Y" : "N"}
                  </strong>
                </div>

                <div className="MyProfile__printRow">
                  <span>Marital Status</span>
                  <strong>{formData.maritalStatus}</strong>
                </div>

                <div className="MyProfile__printRow">
                  <span>Category</span>
                  <strong>{formData.category}</strong>
                </div>

                <div className="MyProfile__printRow">
                  <span>Religion</span>
                  <strong>{formData.religion}</strong>
                </div>

                <div className="MyProfile__printRow">
                  <span>Blood Group</span>
                  <strong>{formData.bloodGroup}</strong>
                </div>

                <div className="MyProfile__printRow">
                  <span>Nationality</span>
                  <strong>{formData.nationality}</strong>
                </div>

                <div className="MyProfile__printRow">
                  <span>Mobile No</span>
                  <strong>{formData.mobile}</strong>
                </div>

                <div className="MyProfile__printRow">
                  <span>Email</span>
                  <strong>{formData.email}</strong>
                </div>

                <div className="MyProfile__printRow">
                  <span>Aadhaar No</span>
                  <strong>{formData.aadhaar}</strong>
                </div>

                <div className="MyProfile__printRow">
                  <span>Language(s) Known</span>
                  <strong>{formData.languages}</strong>
                </div>
              </div>

              <div className="MyProfile__profilePhotoBox">
                <img
                  src={profileImage}
                  alt="Applicant"
                  className="MyProfile__profilePhoto"
                />
              </div>
            </div>
          </div>

          {/* Address */}

          <div className="MyProfile__addressGrid">
            <div className="MyProfile__addressBox">
              <div className="MyProfile__addressTitle">
                Permanent Address
              </div>

              <p>
                {formData.permanentAddress}
                <br />
                {formData.permanentDistrict}, {formData.permanentState}
                <br />
                {formData.permanentCountry} - {formData.permanentPin}
              </p>
            </div>

            <div className="MyProfile__addressBox">
              <div className="MyProfile__addressTitle">
                Correspondence Address
              </div>

              <p>
                {formData.currentAddress}
                <br />
                {formData.currentDistrict}, {formData.currentState}
                <br />
                {formData.currentCountry} - {formData.currentPin}
              </p>
            </div>
          </div>

          {/* Education */}

          <div className="MyProfile__printSection">
            <div className="MyProfile__printSectionHeading">
              <strong>Education Qualification Details</strong>
              <span>
                Essential Qualification : Graduation
              </span>
            </div>

            <div className="MyProfile__tableWrapper">
              <table className="MyProfile__table">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Qualification</th>
                    <th>Board or University</th>
                    <th>Subjects</th>
                    <th>Division Marks Year</th>
                  </tr>
                </thead>

                <tbody>
                  {educationList.map((item, index) => (
                    <tr key={item.id}>
                      <td>{index + 1}</td>
                      <td>{item.qualification}</td>
                      <td>{item.board}</td>
                      <td>{item.subject}</td>
                      <td>
                        {item.division || "A"} - {item.marks || "80"}% -{" "}
                        {item.endYear || "2027"}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Experience */}

          <div className="MyProfile__printSection">
            <div className="MyProfile__printSectionHeading">
              <strong>Work Experience Details</strong>
              <span>
                Total Experience : 0 Year(s)
              </span>
            </div>

            <div className="MyProfile__tableWrapper">
              <table className="MyProfile__table MyProfile__experienceTable">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Employer Details</th>
                    <th>Employment Details</th>
                    <th>Nature of Work</th>
                  </tr>
                </thead>

                <tbody>
                  {experienceList.map((item, index) => (
                    <tr key={item.id}>
                      <td>{index + 1}</td>

                      <td>
                        <strong>{item.employer}</strong>
                        <br />
                        {item.location}
                      </td>

                      <td>
                        <strong>{item.designation}</strong>
                        <br />
                        Tenure: {formatDate(item.startDate)} —{" "}
                        {item.endDate
                          ? formatDate(item.endDate)
                          : "Present"}
                        <br />
                        Duration: {item.duration}
                      </td>

                      <td>{item.nature}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Reference */}

          <div className="MyProfile__printSection">
            <div className="MyProfile__printSectionTitle">
              Reference Details
            </div>

            <table className="MyProfile__table">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Name with Designation</th>
                  <th>Organization Name with Address</th>
                  <th>Mobile</th>
                  <th>Email ID</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td>—</td>
                  <td>No records</td>
                  <td>—</td>
                  <td>—</td>
                  <td>—</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Fee */}

          <div className="MyProfile__printSection">
            <div className="MyProfile__printSectionTitle">
              Application Fee
            </div>

            <p className="MyProfile__printText">
              No Application fee to be Paid.
            </p>
          </div>

          {/* Documents */}

          <div className="MyProfile__printSection">
            <div className="MyProfile__printSectionTitle">
              Additional Documents
            </div>

            <ol className="MyProfile__documentList">
              <li>RESUME</li>
              <li>SIGNATURE</li>
              <li>PHOTOGRAPH</li>
            </ol>
          </div>

          {/* Specific Information */}

          <div className="MyProfile__printSection">
            <div className="MyProfile__printSectionTitle">
              Specific Information
            </div>

            <ol className="MyProfile__specificList">
              <li>
                Whether agreeable to undergo thorough training on various
                issues relating to the job to be performed as per the Terms
                of Reference: —
              </li>

              <li>
                Whether agreeable to reside in any State of India or own my
                arrangement, work in the remote rural areas of the allocated
                districts: —
              </li>

              <li>
                Preference of State/UT for your posting:
                <strong> Not Applicable</strong>
              </li>

              <li>
                Language(s) known:
                <strong> ENGLISH, HINDI</strong>
              </li>
            </ol>
          </div>

          {/* Declaration */}

          <div className="MyProfile__printSection">
            <div className="MyProfile__printSectionTitle">
              Declaration
            </div>

            <p className="MyProfile__declarationText">
              I have carefully gone through the vacancy advertisement and I
              am well aware that the information furnished in the Application
              Form duly supported by the documents in respect of Essential
              Qualification / Work Experience submitted by me will also be
              assessed by the Selection Committee at the time of selection
              for the post. The information / details furnished by me are
              correct and true to the best of my knowledge and no material
              fact having a bearing on my selection has been suppressed /
              withheld.
            </p>

            <div className="MyProfile__signatureArea">
              <div>
                <p>Date: 04/08/2026</p>
                <strong>
                  Application No: REG26HJN35791
                </strong>
              </div>

              <div className="MyProfile__signatureBox">
                <img
                  src={signatureImage}
                  alt="Signature"
                  className="MyProfile__signatureImage"
                />

                <strong>SIGNATURE OF THE APPLICANT</strong>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ================= EDIT PROFILE MODAL ================= */}

      {showEditModal && (
        <div
          className="MyProfile__modalOverlay"
          onMouseDown={(e) => {
            if (e.target === e.currentTarget) {
              closeEditProfile();
            }
          }}
        >
          <div className="MyProfile__registrationModal">

            {/* LEFT SIDE */}

            <aside className="MyProfile__registrationSidebar">
              <div className="MyProfile__sidebarLogo">
                <div className="MyProfile__fakeLogo">
                  <span>i3</span>
                </div>

                <div>
                  <strong>International</strong>
                  <strong>Institute of</strong>
                  <strong>Internship</strong>
                </div>
              </div>

              <div className="MyProfile__sidebarContent">
                <h3>
                  Complete your Recruiter registration details to setup your
                  company profile, contact details, and platform access.
                </h3>

                <div className="MyProfile__sidebarDivider" />

                <strong>Recruiter Portal</strong>
                <span>Verification &amp; Setup</span>
              </div>
            </aside>

            {/* RIGHT SIDE */}

            <main className="MyProfile__registrationContent">

              <div className="MyProfile__registrationTop">
                <div>
                  <h2>Job Applicant Registration</h2>
                  <p>
                    Please complete your job applicant profile registration
                    details.
                  </p>
                </div>

                <button
                  type="button"
                  className="MyProfile__modalClose"
                  onClick={closeEditProfile}
                >
                  <FaTimes />
                </button>
              </div>

              {/* STEPS */}

              <div className="MyProfile__steps">
                {[1, 2, 3, 4].map((step) => {
                  const completed = activeStep > step;
                  const active = activeStep === step;

                  return (
                    <React.Fragment key={step}>
                      <button
                        type="button"
                        className={`MyProfile__step ${
                          active ? "MyProfile__step--active" : ""
                        } ${
                          completed
                            ? "MyProfile__step--completed"
                            : ""
                        }`}
                        onClick={() => goToStep(step)}
                      >
                        <span className="MyProfile__stepCircle">
                          {completed ? <FaCheck /> : step}
                        </span>

                        <span className="MyProfile__stepText">
                          <strong>Step {step}</strong>

                          <small>
                            {step === 1 && "Basic Info"}
                            {step === 2 && "Education"}
                            {step === 3 && "Experience"}
                            {step === 4 && "Documents"}
                          </small>
                        </span>
                      </button>

                      {step !== 4 && (
                        <span
                          className={`MyProfile__stepLine ${
                            activeStep > step
                              ? "MyProfile__stepLine--completed"
                              : ""
                          }`}
                        />
                      )}
                    </React.Fragment>
                  );
                })}
              </div>

              {/* ================= STEP 1 ================= */}

              {activeStep === 1 && (
                <section className="MyProfile__registrationCard">

                  <div className="MyProfile__registrationCardHeader">
                    <h3>A. Personal Information</h3>

                    <p>
                      Please fill out your identity, contact details, and
                      basic address parameters.
                    </p>
                  </div>

                  <div className="MyProfile__formGrid">

                    <MyProfileInput
                      label="FULL NAME"
                      required
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                    />

                    <MyProfileSelect
                      label="GENDER"
                      required
                      name="gender"
                      value={formData.gender}
                      onChange={handleChange}
                      options={["Male", "Female", "Other"]}
                    />

                    <MyProfileInput
                      label="DATE OF BIRTH"
                      required
                      type="date"
                      name="dob"
                      value={formData.dob}
                      onChange={handleChange}
                    />

                    <MyProfileInput
                      label="FATHER'S NAME"
                      required
                      name="fatherName"
                      value={formData.fatherName}
                      onChange={handleChange}
                    />

                    <MyProfileInput
                      label="MOTHER'S NAME"
                      required
                      name="motherName"
                      value={formData.motherName}
                      onChange={handleChange}
                    />

                    <MyProfileInput
                      label="MOBILE NUMBER"
                      required
                      name="mobile"
                      value={formData.mobile}
                      onChange={handleChange}
                      icon={<FaPhone />}
                    />

                    <MyProfileInput
                      label="EMAIL ID"
                      required
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      icon={<FaEnvelope />}
                    />

                    <MyProfileSelect
                      label="MARITAL STATUS"
                      required
                      name="maritalStatus"
                      value={formData.maritalStatus}
                      onChange={handleChange}
                      options={[
                        "Unmarried",
                        "Married",
                        "Divorced",
                        "Widowed",
                      ]}
                    />

                    <MyProfileInput
                      label="NATIONALITY"
                      required
                      name="nationality"
                      value={formData.nationality}
                      onChange={handleChange}
                    />

                    <MyProfileInput
                      label="GOTRA"
                      name="gotra"
                      placeholder="Gotra (optional)"
                      value={formData.gotra}
                      onChange={handleChange}
                    />

                    <MyProfileSelect
                      label="RELIGION"
                      required
                      name="religion"
                      value={formData.religion}
                      onChange={handleChange}
                      options={[
                        "Sanatan/Hindu",
                        "Muslim",
                        "Christian",
                        "Sikh",
                        "Other",
                      ]}
                    />

                    <MyProfileSelect
                      label="CATEGORY"
                      required
                      name="category"
                      value={formData.category}
                      onChange={handleChange}
                      options={[
                        "General",
                        "OBC",
                        "SC",
                        "ST",
                        "EWS",
                      ]}
                    />

                    <MyProfileSelect
                      label="BLOOD GROUP"
                      required
                      name="bloodGroup"
                      value={formData.bloodGroup}
                      onChange={handleChange}
                      options={[
                        "A+",
                        "A-",
                        "B+",
                        "B-",
                        "AB+",
                        "AB-",
                        "O+",
                        "O-",
                      ]}
                    />

                    <MyProfileInput
                      label="HOBBY"
                      placeholder="Hobby"
                      name="hobby"
                      value={formData.hobby}
                      onChange={handleChange}
                    />

                    <MyProfileInput
                      label="LANGUAGES KNOWN"
                      required
                      name="languages"
                      value={formData.languages}
                      onChange={handleChange}
                    />

                    <MyProfileSelect
                      label="PHYSICALLY CHALLENGED"
                      required
                      name="physicallyChallenged"
                      value={formData.physicallyChallenged}
                      onChange={handleChange}
                      options={["No", "Yes"]}
                    />

                    <MyProfileInput
                      label="AADHAR NO."
                      optional
                      name="aadhaar"
                      value={formData.aadhaar}
                      onChange={handleChange}
                    />
                  </div>

                  {/* Current Address */}

                  <div className="MyProfile__addressAccordion">
                    <button
                      type="button"
                      className="MyProfile__accordionHeader"
                      onClick={() =>
                        setCurrentAddressOpen((prev) => !prev)
                      }
                    >
                      <span>
                        <FaMapMarkerAlt />
                        Current Address <em>*</em>
                      </span>

                      {currentAddressOpen ? (
                        <FaChevronUp />
                      ) : (
                        <FaChevronDown />
                      )}
                    </button>

                    {currentAddressOpen && (
                      <div className="MyProfile__accordionBody">
                        <MyProfileInput
                          label="ADDRESS LINE 1"
                          required
                          name="currentAddress"
                          value={formData.currentAddress}
                          onChange={handleChange}
                          full
                        />

                        <div className="MyProfile__addressFormGrid">
                          <MyProfileInput
                            label="DISTRICT"
                            required
                            name="currentDistrict"
                            value={formData.currentDistrict}
                            onChange={handleChange}
                          />

                          <MyProfileInput
                            label="STATE"
                            required
                            name="currentState"
                            value={formData.currentState}
                            onChange={handleChange}
                          />

                          <MyProfileInput
                            label="COUNTRY"
                            name="currentCountry"
                            value={formData.currentCountry}
                            onChange={handleChange}
                          />

                          <MyProfileInput
                            label="PIN CODE"
                            required
                            name="currentPin"
                            value={formData.currentPin}
                            onChange={handleChange}
                          />
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Same address */}

                  <label className="MyProfile__sameAddress">
                    <input
                      type="checkbox"
                      checked={sameAddress}
                      onChange={(e) =>
                        handleSameAddress(e.target.checked)
                      }
                    />

                    <span>
                      PERMANENT ADDRESS SAME AS CURRENT ADDRESS
                    </span>
                  </label>

                  {/* Permanent Address */}

                  <div className="MyProfile__addressAccordion">
                    <button
                      type="button"
                      className="MyProfile__accordionHeader"
                      onClick={() =>
                        setPermanentAddressOpen((prev) => !prev)
                      }
                    >
                      <span>
                        <FaMapMarkerAlt />
                        Permanent Address <em>*</em>
                      </span>

                      {permanentAddressOpen ? (
                        <FaChevronUp />
                      ) : (
                        <FaChevronDown />
                      )}
                    </button>

                    {permanentAddressOpen && (
                      <div className="MyProfile__accordionBody">
                        <MyProfileInput
                          label="ADDRESS LINE 1"
                          required
                          name="permanentAddress"
                          value={formData.permanentAddress}
                          onChange={handleChange}
                          full
                          disabled={sameAddress}
                        />

                        <div className="MyProfile__addressFormGrid">
                          <MyProfileInput
                            label="DISTRICT"
                            required
                            name="permanentDistrict"
                            value={formData.permanentDistrict}
                            onChange={handleChange}
                            disabled={sameAddress}
                          />

                          <MyProfileInput
                            label="STATE"
                            required
                            name="permanentState"
                            value={formData.permanentState}
                            onChange={handleChange}
                            disabled={sameAddress}
                          />

                          <MyProfileInput
                            label="COUNTRY"
                            name="permanentCountry"
                            value={formData.permanentCountry}
                            onChange={handleChange}
                            disabled={sameAddress}
                          />

                          <MyProfileInput
                            label="PIN CODE"
                            required
                            name="permanentPin"
                            value={formData.permanentPin}
                            onChange={handleChange}
                            disabled={sameAddress}
                          />
                        </div>
                      </div>
                    )}
                  </div>

                  <MyProfileNavigation
                    previous={false}
                    next={nextStep}
                    nextText="Save & Next"
                  />
                </section>
              )}

              {/* ================= STEP 2 ================= */}

              {activeStep === 2 && (
                <section className="MyProfile__registrationCard">

                  <div className="MyProfile__registrationCardHeader">
                    <h3>B. Educational Qualification Details</h3>

                    <p>
                      Please add all your educational qualifications,
                      starting with matriculation or higher.
                    </p>
                  </div>

                  <div className="MyProfile__itemsList">
                    {educationList.map((item) => (
                      <div
                        className="MyProfile__itemCard"
                        key={item.id}
                      >
                        <div>
                          <strong>
                            {item.qualification} - {item.subject}
                          </strong>

                          <small>
                            {item.institute || "Institute"} |{" "}
                            {item.board || "Board"} (
                            {item.startYear || "2025"} -{" "}
                            {item.endYear || "2027"})
                          </small>
                        </div>

                        <div className="MyProfile__itemActions">
                          <button
                            type="button"
                            onClick={() => editEducation(item)}
                            className="MyProfile__iconButton MyProfile__iconButton--edit"
                          >
                            <FaEdit />
                          </button>

                          <button
                            type="button"
                            onClick={() =>
                              deleteEducation(item.id)
                            }
                            className="MyProfile__iconButton MyProfile__iconButton--delete"
                          >
                            <FaTrash />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="MyProfile__addBox">
                    <h4>
                      <FaPlus /> Add Qualification
                    </h4>

                    <div className="MyProfile__formGrid">
                      <MyProfileSelect
                        label="QUALIFICATION"
                        required
                        value={educationForm.qualification}
                        onChange={(e) =>
                          setEducationForm((prev) => ({
                            ...prev,
                            qualification: e.target.value,
                          }))
                        }
                        options={[
                          "Matriculation",
                          "Intermediate",
                          "Diploma",
                          "Graduation",
                          "Post Graduation",
                        ]}
                      />

                      <MyProfileInput
                        label="SCHOOL/COLLEGE/INSTITUTE"
                        required
                        placeholder="Institute Name"
                        value={educationForm.institute}
                        onChange={(e) =>
                          setEducationForm((prev) => ({
                            ...prev,
                            institute: e.target.value,
                          }))
                        }
                      />

                      <MyProfileInput
                        label="BOARD/UNIVERSITY"
                        required
                        placeholder="Board / University"
                        value={educationForm.board}
                        onChange={(e) =>
                          setEducationForm((prev) => ({
                            ...prev,
                            board: e.target.value,
                          }))
                        }
                      />

                      <MyProfileInput
                        label="START YEAR"
                        required
                        placeholder="e.g. 2020"
                        value={educationForm.startYear}
                        onChange={(e) =>
                          setEducationForm((prev) => ({
                            ...prev,
                            startYear: e.target.value,
                          }))
                        }
                      />

                      <MyProfileInput
                        label="END YEAR"
                        required
                        placeholder="e.g. 2023"
                        value={educationForm.endYear}
                        onChange={(e) =>
                          setEducationForm((prev) => ({
                            ...prev,
                            endYear: e.target.value,
                          }))
                        }
                      />

                      <MyProfileInput
                        label="PASSING DIVISION"
                        required
                        placeholder="e.g. 1st / A Grade"
                        value={educationForm.division}
                        onChange={(e) =>
                          setEducationForm((prev) => ({
                            ...prev,
                            division: e.target.value,
                          }))
                        }
                      />

                      <MyProfileInput
                        label="PASSING MARKS (%)"
                        required
                        placeholder="e.g. 85"
                        value={educationForm.marks}
                        onChange={(e) =>
                          setEducationForm((prev) => ({
                            ...prev,
                            marks: e.target.value,
                          }))
                        }
                      />

                      <MyProfileInput
                        label="SUBJECT"
                        required
                        placeholder="e.g. Computer Science"
                        value={educationForm.subject}
                        onChange={(e) =>
                          setEducationForm((prev) => ({
                            ...prev,
                            subject: e.target.value,
                          }))
                        }
                      />

                      <div className="MyProfile__field">
                        <label>
                          ATTACH CERTIFICATE <span>*</span>
                        </label>

                        <div className="MyProfile__fileControl">
                          <button
                            type="button"
                            onClick={() =>
                              certificateInputRef.current?.click()
                            }
                          >
                            <FaUpload /> Upload
                          </button>

                          <span>
                            {educationForm.certificate
                              ? educationForm.certificate.name
                              : "No file chosen"}
                          </span>

                          <input
                            ref={certificateInputRef}
                            type="file"
                            accept=".pdf,.jpg,.jpeg,.png"
                            hidden
                            onChange={(e) =>
                              handleFileChange(e, "certificate")
                            }
                          />
                        </div>
                      </div>
                    </div>

                    <button
                      type="button"
                      className="MyProfile__saveAddButton"
                      onClick={addEducation}
                    >
                      <FaPlus />
                      {editingEducationId
                        ? "Update Qualification"
                        : "Save & Add"}
                    </button>
                  </div>

                  <MyProfileNavigation
                    previous={previousStep}
                    next={nextStep}
                    nextText="Save & Next"
                  />
                </section>
              )}

              {/* ================= STEP 3 ================= */}

              {activeStep === 3 && (
                <section className="MyProfile__registrationCard">

                  <div className="MyProfile__registrationCardHeader">
                    <h3>C. Work Experience Details</h3>

                    <p>
                      Please add your past employment records.
                    </p>
                  </div>

                  <div className="MyProfile__itemsList">
                    {experienceList.map((item) => (
                      <div
                        className="MyProfile__itemCard"
                        key={item.id}
                      >
                        <div>
                          <strong>
                            {item.employer} - {item.designation}
                          </strong>

                          <small>
                            {item.location} (
                            {formatDate(item.startDate)} to{" "}
                            {item.endDate
                              ? formatDate(item.endDate)
                              : "Present"}
                            ) | {item.duration}
                          </small>
                        </div>

                        <div className="MyProfile__itemActions">
                          <button
                            type="button"
                            onClick={() =>
                              editExperience(item)
                            }
                            className="MyProfile__iconButton MyProfile__iconButton--edit"
                          >
                            <FaEdit />
                          </button>

                          <button
                            type="button"
                            onClick={() =>
                              deleteExperience(item.id)
                            }
                            className="MyProfile__iconButton MyProfile__iconButton--delete"
                          >
                            <FaTrash />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="MyProfile__addBox">
                    <h4>
                      <FaPlus /> Add Experience
                    </h4>

                    <div className="MyProfile__formGrid">

                      <MyProfileInput
                        label="EMPLOYER NAME"
                        required
                        placeholder="Company Name"
                        value={experienceForm.employer}
                        onChange={(e) =>
                          setExperienceForm((prev) => ({
                            ...prev,
                            employer: e.target.value,
                          }))
                        }
                      />

                      <MyProfileInput
                        label="DESIGNATION"
                        required
                        placeholder="e.g. Software Developer"
                        value={experienceForm.designation}
                        onChange={(e) =>
                          setExperienceForm((prev) => ({
                            ...prev,
                            designation: e.target.value,
                          }))
                        }
                      />

                      <MyProfileInput
                        label="POSTING LOCATION"
                        required
                        placeholder="e.g. Noida, Delhi"
                        value={experienceForm.location}
                        onChange={(e) =>
                          setExperienceForm((prev) => ({
                            ...prev,
                            location: e.target.value,
                          }))
                        }
                      />

                      <MyProfileInput
                        label="START DATE"
                        required
                        type="date"
                        value={experienceForm.startDate}
                        onChange={(e) =>
                          setExperienceForm((prev) => ({
                            ...prev,
                            startDate: e.target.value,
                          }))
                        }
                      />

                      <MyProfileInput
                        label="END DATE"
                        type="date"
                        value={experienceForm.endDate}
                        onChange={(e) =>
                          setExperienceForm((prev) => ({
                            ...prev,
                            endDate: e.target.value,
                          }))
                        }
                      />

                      <MyProfileInput
                        label="NATURE OF WORK"
                        required
                        placeholder="Responsibilities / Techstack"
                        value={experienceForm.nature}
                        onChange={(e) =>
                          setExperienceForm((prev) => ({
                            ...prev,
                            nature: e.target.value,
                          }))
                        }
                      />

                      <MyProfileInput
                        label="TOTAL EXPERIENCE (YEARS)"
                        value={
                          experienceForm.startDate
                            ? calculateDuration(
                                experienceForm.startDate,
                                experienceForm.endDate
                              )
                            : ""
                        }
                        placeholder="Auto Calculated"
                        disabled
                      />

                      <div className="MyProfile__field">
                        <label>
                          ATTACHED EXPERIENCE CERTIFICATE
                          <span>*</span>
                        </label>

                        <div className="MyProfile__fileControl">
                          <button
                            type="button"
                            onClick={() =>
                              certificateInputRef.current?.click()
                            }
                          >
                            <FaUpload /> Upload
                          </button>

                          <span>
                            {experienceForm.certificate
                              ? experienceForm.certificate.name
                              : "No file chosen"}
                          </span>
                        </div>
                      </div>
                    </div>

                    <button
                      type="button"
                      className="MyProfile__saveAddButton"
                      onClick={addExperience}
                    >
                      <FaPlus />
                      {editingExperienceId
                        ? "Update Experience"
                        : "Save & Add"}
                    </button>
                  </div>

                  <MyProfileNavigation
                    previous={previousStep}
                    next={nextStep}
                    nextText="Save & Next"
                  />
                </section>
              )}

              {/* ================= STEP 4 ================= */}

              {activeStep === 4 && (
                <section className="MyProfile__registrationCard">

                  <div className="MyProfile__registrationCardHeader">
                    <h3>
                      D. Documents Attachment &amp; Declaration
                    </h3>

                    <p>
                      Please upload your profile photo, signature spec,
                      and current resume.
                    </p>
                  </div>

                  <div className="MyProfile__uploadGrid">

                    {/* Resume */}

                    <div className="MyProfile__uploadCard">
                      <h4>Attached Resume*</h4>

                      <button
                        type="button"
                        className="MyProfile__uploadButton"
                        onClick={() =>
                          resumeInputRef.current?.click()
                        }
                      >
                        <FaUpload />
                        Upload Resume
                      </button>

                      <input
                        ref={resumeInputRef}
                        type="file"
                        accept=".pdf,.doc,.docx"
                        hidden
                        onChange={(e) =>
                          handleFileChange(e, "resume")
                        }
                      />

                      <span className="MyProfile__uploadedName">
                        {resumeFile
                          ? resumeFile.name
                          : "resume.pdf"}
                      </span>
                    </div>

                    {/* Photo */}

                    <div className="MyProfile__uploadCard">
                      <h4>Upload Photo*</h4>

                      <img
                        src={profileImage}
                        alt="Profile"
                        className="MyProfile__uploadPhoto"
                      />

                      <button
                        type="button"
                        className="MyProfile__uploadButton"
                        onClick={() =>
                          profileInputRef.current?.click()
                        }
                      >
                        <FaUpload />
                        Upload Photo
                      </button>

                      <input
                        ref={profileInputRef}
                        type="file"
                        accept="image/*"
                        hidden
                        onChange={(e) =>
                          handleFileChange(e, "profile")
                        }
                      />
                    </div>

                    {/* Signature */}

                    <div className="MyProfile__uploadCard">
                      <h4>Upload Signature*</h4>

                      <img
                        src={signatureImage}
                        alt="Signature"
                        className="MyProfile__uploadSignature"
                      />

                      <button
                        type="button"
                        className="MyProfile__uploadButton"
                        onClick={() =>
                          signatureInputRef.current?.click()
                        }
                      >
                        <FaUpload />
                        Upload Signature
                      </button>

                      <input
                        ref={signatureInputRef}
                        type="file"
                        accept="image/*"
                        hidden
                        onChange={(e) =>
                          handleFileChange(e, "signature")
                        }
                      />
                    </div>
                  </div>

                  <label className="MyProfile__declarationCheck">
                    <input
                      type="checkbox"
                      checked={declarationAccepted}
                      onChange={(e) =>
                        setDeclarationAccepted(
                          e.target.checked
                        )
                      }
                    />

                    <span>
                      I ACCEPT ALL THE TERMS AND CONDITIONS AND
                      DECLARE THAT ALL THE DETAILS PROVIDED ARE
                      CORRECT AND ACCURATE.
                    </span>
                  </label>

                  <div className="MyProfile__navigation">
                    <button
                      type="button"
                      className="MyProfile__previousButton"
                      onClick={previousStep}
                    >
                      <FaArrowLeft />
                      Previous
                    </button>

                    <button
                      type="button"
                      className="MyProfile__finalButton"
                      onClick={finalSubmit}
                    >
                      Final Submit
                    </button>
                  </div>
                </section>
              )}
            </main>
          </div>
        </div>
      )}
    </div>
  );
};

/* ================= REUSABLE INPUT ================= */

const MyProfileInput = ({
  label,
  required,
  optional,
  type = "text",
  name,
  value,
  onChange,
  placeholder,
  disabled,
  full,
  icon,
}) => {
  return (
    <div
      className={`MyProfile__field ${
        full ? "MyProfile__field--full" : ""
      }`}
    >
      <label>
        {label}

        {required && <span>*</span>}

        {optional && (
          <small className="MyProfile__optional">
            (OPTIONAL)
          </small>
        )}
      </label>

      <div className="MyProfile__inputWrapper">
        {icon && (
          <span className="MyProfile__inputIcon">
            {icon}
          </span>
        )}

        <input
          type={type}
          name={name}
          value={value ?? ""}
          onChange={onChange}
          placeholder={placeholder}
          disabled={disabled}
        />

        {type === "date" && (
          <span className="MyProfile__calendarIcon">
            <FaCalendarAlt />
          </span>
        )}
      </div>
    </div>
  );
};

/* ================= REUSABLE SELECT ================= */

const MyProfileSelect = ({
  label,
  required,
  name,
  value,
  onChange,
  options,
}) => {
  return (
    <div className="MyProfile__field">
      <label>
        {label}
        {required && <span>*</span>}
      </label>

      <div className="MyProfile__selectWrapper">
        <select
          name={name}
          value={value}
          onChange={onChange}
        >
          {options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>

        <FaChevronDown />
      </div>
    </div>
  );
};

/* ================= NAVIGATION ================= */

const MyProfileNavigation = ({
  previous,
  next,
  nextText,
}) => {
  return (
    <div className="MyProfile__navigation">
      {previous ? (
        <button
          type="button"
          className="MyProfile__previousButton"
          onClick={previous}
        >
          <FaArrowLeft />
          Previous
        </button>
      ) : (
        <span />
      )}

      <button
        type="button"
        className="MyProfile__nextButton"
        onClick={next}
      >
        {nextText}
        <FaArrowRight />
      </button>
    </div>
  );
};

export default MyProfile;