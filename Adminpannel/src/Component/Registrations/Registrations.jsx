import React, { useState, useMemo, useRef, useEffect } from "react";
import {
  FiSearch,
  FiDownload,
  FiMoreVertical,
  FiEye,
  FiEdit2,
  FiTrash2,
  FiX, 
  FiChevronLeft,
  FiChevronRight,
  FiChevronsLeft,
  FiChevronsRight,
  FiSave,
  FiUser,
  FiPhone,
  FiMapPin,
  FiBookOpen,
  FiFileText
} from "react-icons/fi";
import { FaGraduationCap, FaUserTie, FaCompass, FaBriefcase } from "react-icons/fa";
import "./Registrations.css";

// Initial dataset aligned with reference screens
const INITIAL_STUDENTS = [
  {
    id: 1,
    regId: "S2026VK72465",
    name: "VIVEK KUMAR",
    email: "vivekk8542@gmail.com",
    contact: "8542832019",
    educationTitle: "Under Graduate",
    educationSub: "Handia polytechnic handia Prayagraj",
    address: "Kiraon bakspur, Prayagraj , Uttar Pradesh",
    fatherName: "Sabha jeet",
    motherName: "Suman devi",
    dob: "2002-06-10",
    gender: "Male",
    category: "OBC",
    aadhar: "[Aadhaar Redacted]",
    goal: "Skill Enhancement",
    localAddress: {
      street: "Kiraon bakspur",
      district: "Prayagraj",
      state: "Uttar Pradesh",
      pincode: "221503"
    },
    permanentAddress: {
      street: "Same as Local Address",
      district: "Prayagraj",
      state: "Uttar Pradesh",
      pincode: "221503"
    },
    avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=200&q=80",
    academics: [
      { degree: "Under Graduate (Diploma in electrical engineering )", college: "Handia polytechnic handia Prayagraj", year: "2021", grade: "75.83" },
      { degree: "Graduate Pass Out (Bachlor of arts)", college: "Bhram dev mahavidya handia Prayagraj", year: "2021", grade: "70.83" },
      { degree: "Graduate Pass Out (Bachlor of library and information science )", college: "Atar Singh degree college handia Prayagraj", year: "2022", grade: "83" },
      { degree: "Post Graduate Pass Out (Master's of social work )", college: "Bramhdev Mahavidya prayagraj", year: "2023", grade: "2023" },
      { degree: "Post Graduate Pass Out (Master's of library and information science )", college: "JAIRAM JANAKI MAHAVIDYA, MAHARISHI NAGAR, PRAYAGRAJ", year: "2026", grade: "81" }
    ]
  },
  {
    id: 2,
    regId: "S2026SB99434",
    name: "Sandeep Bablani",
    email: "sandeepbablani01@gmail.com",
    contact: "8299434644",
    educationTitle: "Post Graduate Pass Out",
    educationSub: "ICST",
    address: "Near Anandpur trust hospital Rajghat road Pisnari Baag Lalitpur , Lalitpur , Uttar Pradesh",
    fatherName: "R. K. Bablani",
    motherName: "Kanta Devi",
    dob: "1999-04-12",
    gender: "Male",
    category: "General",
    aadhar: "[Aadhaar Redacted]",
    goal: "Job Readiness",
    localAddress: {
      street: "Near Anandpur trust hospital Rajghat road",
      district: "Lalitpur",
      state: "Uttar Pradesh",
      pincode: "284403"
    },
    permanentAddress: {
      street: "Same as Local Address",
      district: "Lalitpur",
      state: "Uttar Pradesh",
      pincode: "284403"
    },
    avatar: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?auto=format&fit=crop&w=200&q=80",
    academics: [
      { degree: "Post Graduate Pass Out", college: "ICST", year: "2023", grade: "78.20" }
    ]
  },
  {
    id: 3,
    regId: "S2026PP93366",
    name: "Pranjal Pandey",
    email: "placid.pranjal@gmail.com",
    contact: "9336641772",
    educationTitle: "Under Graduate",
    educationSub: "Galgotias University",
    address: "705 Laurel Tower Sikka karnam greens sector 143B, Gautam Buddha Nagar, Uttar Pradesh",
    fatherName: "S. K. Pandey",
    motherName: "Neelam Pandey",
    dob: "2003-09-18",
    gender: "Male",
    category: "General",
    aadhar: "[Aadhaar Redacted]",
    goal: "Internship",
    localAddress: {
      street: "705 Laurel Tower Sikka karnam greens sector 143B",
      district: "Gautam Buddha Nagar",
      state: "Uttar Pradesh",
      pincode: "201301"
    },
    permanentAddress: {
      street: "Same as Local Address",
      district: "Gautam Buddha Nagar",
      state: "Uttar Pradesh",
      pincode: "201301"
    },
    avatar: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?auto=format&fit=crop&w=200&q=80",
    academics: [
      { degree: "Under Graduate (B.Tech)", college: "Galgotias University", year: "2024", grade: "8.4 CGPA" }
    ]
  },
  {
    id: 4,
    regId: "S2026PR62680",
    name: "Pranshu",
    email: "pranshukurrey321@gmail.com",
    contact: "6268007440",
    educationTitle: "Graduate Pass Out",
    educationSub: "Kalinga University Raipur",
    address: "RAMSAGAR PARA MUDPAR CHU, Janjgiri champa , C.G. छत्तीसगढ़",
    fatherName: "M. Kurrey",
    motherName: "G. Kurrey",
    dob: "2001-02-14",
    gender: "Male",
    category: "SC",
    aadhar: "[Aadhaar Redacted]",
    goal: "Skill Enhancement",
    localAddress: {
      street: "RAMSAGAR PARA MUDPAR CHU",
      district: "Janjgiri champa",
      state: "Chhattisgarh",
      pincode: "495668"
    },
    permanentAddress: {
      street: "Same as Local Address",
      district: "Janjgiri champa",
      state: "Chhattisgarh",
      pincode: "495668"
    },
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
    academics: [
      { degree: "Graduate Pass Out", college: "Kalinga University Raipur", year: "2023", grade: "71.40" }
    ]
  },
  {
    id: 5,
    regId: "S2026III7633",
    name: "International Institute of Internship",
    email: "institute@hilux.com",
    contact: "7633567889",
    educationTitle: "Post Graduate Pass Out",
    educationSub: "bb",
    address: "3rd Floor, Prestige Falcon Towers, 19 Brunton Rd, District Test, Karnataka",
    fatherName: "N/A",
    motherName: "N/A",
    dob: "2000-01-01",
    gender: "Other",
    category: "General",
    aadhar: "[Aadhaar Redacted]",
    goal: "Corporate Training",
    localAddress: {
      street: "3rd Floor, Prestige Falcon Towers, 19 Brunton Rd",
      district: "Bengaluru",
      state: "Karnataka",
      pincode: "560025"
    },
    permanentAddress: {
      street: "Same as Local Address",
      district: "Bengaluru",
      state: "Karnataka",
      pincode: "560025"
    },
    avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=200&q=80",
    academics: [
      { degree: "Post Graduate Pass Out", college: "bb", year: "2022", grade: "68.5" }
    ]
  },
  {
    id: 6,
    regId: "S2026PK94070",
    name: "Prasanta Kumar Khuntia",
    email: "pk@gmail.xom",
    contact: "9407057752",
    educationTitle: "Graduate Pass Out",
    educationSub: "mm",
    address: "01 Narsinghpur, hgh, Madhya Pradesh",
    fatherName: "B. Khuntia",
    motherName: "M. Khuntia",
    dob: "1998-11-20",
    gender: "Male",
    category: "OBC",
    aadhar: "[Aadhaar Redacted]",
    goal: "Skill Enhancement",
    localAddress: {
      street: "01 Narsinghpur, hgh",
      district: "Narsinghpur",
      state: "Madhya Pradesh",
      pincode: "487001"
    },
    permanentAddress: {
      street: "Same as Local Address",
      district: "Narsinghpur",
      state: "Madhya Pradesh",
      pincode: "487001"
    },
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80",
    academics: [
      { degree: "Graduate Pass Out", college: "mm", year: "2020", grade: "66.0" }
    ]
  },
  {
    id: 7,
    regId: "S2026DK73571",
    name: "Dhiraj Kumar Suthar",
    email: "dhirajkumarsuthar5@gmail.com",
    contact: "7357199956",
    educationTitle: "Under Graduate",
    educationSub: "Shrinathji institute of technology engineering",
    address: "Raj rajeshwar Mahadev mandir,rohida, Sirohi, Rajasthan",
    fatherName: "L. Suthar",
    motherName: "S. Suthar",
    dob: "2002-08-15",
    gender: "Male",
    category: "OBC",
    aadhar: "[Aadhaar Redacted]",
    goal: "Internship",
    localAddress: {
      street: "Raj rajeshwar Mahadev mandir,rohida",
      district: "Sirohi",
      state: "Rajasthan",
      pincode: "307024"
    },
    permanentAddress: {
      street: "Same as Local Address",
      district: "Sirohi",
      state: "Rajasthan",
      pincode: "307024"
    },
    avatar: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=200&q=80",
    academics: [
      { degree: "Under Graduate", college: "Shrinathji institute of technology engineering", year: "2024", grade: "74.00" }
    ]
  },
  {
    id: 8,
    regId: "S2026RK81077",
    name: "Rahul Kumar",
    email: "rahulmalviya9000@gmail.com",
    contact: "8107756819",
    educationTitle: "Under Graduate",
    educationSub: "Shreenathji institute of technology nathdwara",
    address: "Jain temple near by Ramseen , Jalore , Rajasthan",
    fatherName: "K. Malviya",
    motherName: "P. Malviya",
    dob: "2001-12-05",
    gender: "Male",
    category: "General",
    aadhar: "[Aadhaar Redacted]",
    goal: "Skill Enhancement",
    localAddress: {
      street: "Jain temple near by Ramseen",
      district: "Jalore",
      state: "Rajasthan",
      pincode: "343026"
    },
    permanentAddress: {
      street: "Same as Local Address",
      district: "Jalore",
      state: "Rajasthan",
      pincode: "343026"
    },
    avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=200&q=80",
    academics: [
      { degree: "Under Graduate", college: "Shreenathji institute of technology nathdwara", year: "2023", grade: "79.50" }
    ]
  },
  {
    id: 9,
    regId: "S2026LK97992",
    name: "LOKESH KUMAR JANGID",
    email: "lokeshkumarj22@gmail.com",
    contact: "9799209139",
    educationTitle: "Graduate Pass Out",
    educationSub: "Rajiv Gandhi science Bangalore",
    address: "Aara machine ke pass budha dewal malpura , Tonk, Rajasthan",
    fatherName: "R. Jangid",
    motherName: "G. Jangid",
    dob: "2000-03-30",
    gender: "Male",
    category: "OBC",
    aadhar: "[Aadhaar Redacted]",
    goal: "Skill Enhancement",
    localAddress: {
      street: "Aara machine ke pass budha dewal malpura",
      district: "Tonk",
      state: "Rajasthan",
      pincode: "304502"
    },
    permanentAddress: {
      street: "Same as Local Address",
      district: "Tonk",
      state: "Rajasthan",
      pincode: "304502"
    },
    avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=200&q=80",
    academics: [
      { degree: "Graduate Pass Out", college: "Rajiv Gandhi science Bangalore", year: "2022", grade: "81.20" }
    ]
  },
  {
    id: 10,
    regId: "S2026RS63069",
    name: "R S Mishra",
    email: "rsmishra795@gmail.com",
    contact: "6306904292",
    educationTitle: "Graduate Pass Out",
    educationSub: "ARRDSSPS kotabujurg",
    address: "Awadah Sarawan Lalganj Azamgarh , Azamgarh , Uttar pradesh",
    fatherName: "D. P. Mishra",
    motherName: "Sarita Mishra",
    dob: "1999-07-22",
    gender: "Male",
    category: "General",
    aadhar: "[Aadhaar Redacted]",
    goal: "Higher Education",
    localAddress: {
      street: "Awadah Sarawan Lalganj Azamgarh",
      district: "Azamgarh",
      state: "Uttar pradesh",
      pincode: "276302"
    },
    permanentAddress: {
      street: "Same as Local Address",
      district: "Azamgarh",
      state: "Uttar pradesh",
      pincode: "276302"
    },
    avatar: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=200&q=80",
    academics: [
      { degree: "Graduate Pass Out", college: "ARRDSSPS kotabujurg", year: "2021", grade: "69.80" }
    ]
  },
  {
    id: 11,
    regId: "S2026AK99881",
    name: "Ananya Sharma",
    email: "ananya.sharma@example.com",
    contact: "9811223344",
    educationTitle: "Post Graduate",
    educationSub: "Delhi University",
    address: "Sector 18, Noida, Gautam Buddha Nagar, Uttar Pradesh",
    fatherName: "V. Sharma",
    motherName: "S. Sharma",
    dob: "2001-01-15",
    gender: "Female",
    category: "General",
    aadhar: "[Aadhaar Redacted]",
    goal: "Internship",
    localAddress: {
      street: "Sector 18, Noida",
      district: "Gautam Buddha Nagar",
      state: "Uttar Pradesh",
      pincode: "201301"
    },
    permanentAddress: {
      street: "Same as Local Address",
      district: "Gautam Buddha Nagar",
      state: "Uttar Pradesh",
      pincode: "201301"
    },
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80",
    academics: [
      { degree: "Post Graduate", college: "Delhi University", year: "2023", grade: "85.00" }
    ]
  }
];

const Registrations = () => {
  const [activeTab, setActiveTab] = useState("student");
  const [students, setStudents] = useState(INITIAL_STUDENTS);
  const [searchQuery, setSearchQuery] = useState("");

  // Action Menu State
  const [openActionId, setOpenActionId] = useState(null);

  // Pagination State
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);

  // Modal States
  const [viewModalData, setViewModalData] = useState(null);
  const [editModalData, setEditModalData] = useState(null);

  // Close action dropdown on outside click
  const menuRef = useRef(null);
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setOpenActionId(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Filter logic
  const filteredData = useMemo(() => {
    return students.filter((item) => {
      const query = searchQuery.toLowerCase();
      return (
        item.name.toLowerCase().includes(query) ||
        item.email.toLowerCase().includes(query) ||
        item.educationSub.toLowerCase().includes(query) ||
        item.address.toLowerCase().includes(query)
      );
    });
  }, [students, searchQuery]);

  // Pagination calculations
  const totalPages = Math.ceil(filteredData.length / rowsPerPage) || 1;
  const startIndex = (currentPage - 1) * rowsPerPage;
  const currentRows = filteredData.slice(startIndex, startIndex + rowsPerPage);

  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(newPage);
    }
  };

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this registration?")) {
      setStudents((prev) => prev.filter((s) => s.id !== id));
      setOpenActionId(null);
    }
  };

  const handleDownload = (item) => {
    const jsonStr =
      "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(item, null, 2));
    const downloadAnchor = document.createElement("a");
    downloadAnchor.setAttribute("href", jsonStr);
    downloadAnchor.setAttribute("download", `${item.name.replace(/\s+/g, "_")}_Details.json`);
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
    setOpenActionId(null);
  };

  const handleEditSave = (e) => {
    e.preventDefault();
    setStudents((prev) =>
      prev.map((item) => (item.id === editModalData.id ? editModalData : item))
    );
    setEditModalData(null);
  };

  const exportToExcel = () => {
    let csv = "S.NO,APPLICANT NAME,EMAIL,CONTACT NO,EDUCATION,COLLEGE,ADDRESS\n";
    filteredData.forEach((row, idx) => {
      csv += `"${idx + 1}","${row.name}","${row.email}","${row.contact}","${row.educationTitle}","${row.educationSub}","${row.address.replace(/"/g, '""')}"\n`;
    });
    const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", `Registrations_${new Date().toISOString().slice(0, 10)}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="registrations-container">
      {/* Top Header */}
      <header className="registrations-header">
        <div className="registrations-header-content">
          <div className="header-pill">Onboarding Center</div>
          <h1 className="registrations-title">Registrations &amp; Onboarding</h1>
          <p className="registrations-subtitle">
            Oversee, filter, verify, and export member candidate records across all tracks.
          </p>
        </div>
      </header>

      {/* Tabs */}
      <div className="registrations-tabs">
        <button
          type="button"
          className={`registrations-tab-btn ${activeTab === "student" ? "active" : ""}`}
          onClick={() => setActiveTab("student")}
        >
          <FaGraduationCap className="registrations-tab-icon" /> Student Registration
        </button>
        <button
          type="button"
          className={`registrations-tab-btn ${activeTab === "instructor" ? "active" : ""}`}
          onClick={() => setActiveTab("instructor")}
        >
          <FaUserTie className="registrations-tab-icon" /> Instructor Registration
        </button>
        <button
          type="button"
          className={`registrations-tab-btn ${activeTab === "immersion" ? "active" : ""}`}
          onClick={() => setActiveTab("immersion")}
        >
          <FaCompass className="registrations-tab-icon" /> Immersion Registration
        </button>
        <button
          type="button"
          className={`registrations-tab-btn ${activeTab === "recruit" ? "active" : ""}`}
          onClick={() => setActiveTab("recruit")}
        >
          <FaBriefcase className="registrations-tab-icon" /> Recruit Registration
        </button>
      </div>

      {/* Counter & Action Controls Bar */}
      <div className="registrations-top-actions">
        <div className="registrations-user-counter">
          Total Registered Users: <strong>{filteredData.length}</strong>
        </div>

        <div className="registrations-controls-bar">
          <div className="registrations-left-tools">
            <div className="registrations-search-wrap">
              <FiSearch className="registrations-search-icon" />
              <input
                type="text"
                placeholder="Search by name, email or institution..."
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  setCurrentPage(1);
                }}
              />
            </div>
          </div>

          <button type="button" className="registrations-export-btn" onClick={exportToExcel}>
            <FiDownload /> Export Excel
          </button>
        </div>
      </div>

      {/* Responsive Table */}
      <div className="registrations-content-row">
        <div className="registrations-table-container">
          <table className="registrations-table">
            <thead>
              <tr>
                <th className="registrations-col-sno">S.NO.</th>
                <th className="registrations-col-name">APPLICANT NAME</th>
                <th className="registrations-col-contact">CONTACT NO.</th>
                <th className="registrations-col-edu">EDUCATION / QUALIFICATION</th>
                <th className="registrations-col-address">ADDRESS</th>
                <th className="registrations-col-actions">ACTIONS</th>
              </tr>
            </thead>
            <tbody>
              {currentRows.length > 0 ? (
                currentRows.map((item, index) => (
                  <tr key={item.id} className="registrations-table-row">
                    <td className="registrations-col-sno">{startIndex + index + 1}</td>
                    <td className="registrations-col-name">
                      <div className="registrations-applicant-wrap">
                        <span className="registrations-applicant-name">{item.name}</span>
                        <span className="registrations-applicant-email">{item.email}</span>
                      </div>
                    </td>
                    <td className="registrations-col-contact">{item.contact}</td>
                    <td className="registrations-col-edu">
                      <div className="registrations-edu-wrap">
                        <span className="registrations-edu-title">{item.educationTitle}</span>
                        <span className="registrations-edu-sub">{item.educationSub}</span>
                      </div>
                    </td>
                    <td className="registrations-col-address">{item.address}</td>
                    <td className="registrations-col-actions">
                      <div
                        className="registrations-actions-dropdown-wrap"
                        ref={openActionId === item.id ? menuRef : null}
                      >
                        <button
                          type="button"
                          className="registrations-dot-btn"
                          onClick={() =>
                            setOpenActionId(openActionId === item.id ? null : item.id)
                          }
                          aria-label="Actions"
                        >
                          <FiMoreVertical />
                        </button>

                        {openActionId === item.id && (
                          <div className="registrations-dropdown-menu">
                            <button
                              type="button"
                              onClick={() => {
                                setViewModalData(item);
                                setOpenActionId(null);
                              }}
                            >
                              <FiEye /> View Details
                            </button>
                            <button
                              type="button"
                              onClick={() => {
                                setEditModalData({ ...item });
                                setOpenActionId(null);
                              }}
                            >
                              <FiEdit2 /> Edit Details
                            </button>
                            <button type="button" onClick={() => handleDownload(item)}>
                              <FiDownload /> Download Details
                            </button>
                            <button
                              type="button"
                              className="registrations-delete-opt"
                              onClick={() => handleDelete(item.id)}
                            >
                              <FiTrash2 /> Delete
                            </button>
                          </div>
                        )}
                      </div>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="6" className="registrations-no-data">
                    No matching registration records found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>

          {/* Footer Pagination */}
          <div className="registrations-pagination">
            <div className="registrations-rows-select">
              <span>Rows per page</span>
              <select
                value={rowsPerPage}
                onChange={(e) => {
                  setRowsPerPage(Number(e.target.value));
                  setCurrentPage(1);
                }}
              >
                <option value={5}>5</option>
                <option value={10}>10</option>
                <option value={20}>20</option>
                <option value={50}>50</option>
              </select>
            </div>

            <div className="registrations-pagination-ctrls">
              <span>
                Page {currentPage} of {totalPages}
              </span>
              <div className="registrations-pagination-arrows">
                <button
                  type="button"
                  disabled={currentPage === 1}
                  onClick={() => handlePageChange(1)}
                  title="First Page"
                >
                  <FiChevronsLeft />
                </button>
                <button
                  type="button"
                  disabled={currentPage === 1}
                  onClick={() => handlePageChange(currentPage - 1)}
                  title="Previous Page"
                >
                  <FiChevronLeft />
                </button>
                <button
                  type="button"
                  disabled={currentPage === totalPages}
                  onClick={() => handlePageChange(currentPage + 1)}
                  title="Next Page"
                >
                  <FiChevronRight />
                </button>
                <button
                  type="button"
                  disabled={currentPage === totalPages}
                  onClick={() => handlePageChange(totalPages)}
                  title="Last Page"
                >
                  <FiChevronsRight />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* VIEW DETAILS MODAL */}
      {viewModalData && (
        <div className="registrations-modal-overlay" onClick={() => setViewModalData(null)}>
          <div
            className="registrations-modal-box view-card"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="registrations-modal-header">
              <h2>Student Registration Profile</h2>
              <button
                type="button"
                className="registrations-close-x"
                onClick={() => setViewModalData(null)}
              >
                <FiX />
              </button>
            </div>

            <div className="registrations-modal-scroll-area">
              {/* Profile Card Header */}
              <div className="registrations-view-profile-card">
                <img
                  src={viewModalData.avatar}
                  alt={viewModalData.name}
                  className="registrations-view-avatar"
                />
                <div className="registrations-view-profile-info">
                  <div className="registrations-view-badge-row">
                    <h3>{viewModalData.name}</h3>
                    <span className="registrations-code-badge">{viewModalData.regId}</span>
                  </div>
                  <p className="registrations-view-email">{viewModalData.email}</p>
                  <div className="registrations-view-tags">
                    <span className="registrations-tag-gray">Goal: {viewModalData.goal}</span>
                    <span className="registrations-tag-orange">{viewModalData.category}</span>
                  </div>
                </div>
              </div>

              {/* Personal & Contact Details Cards */}
              <div className="registrations-view-row">
                <div className="registrations-info-box">
                  <div className="registrations-info-title">
                    <FiUser /> PERSONAL DETAILS
                  </div>
                  <div className="registrations-grid-two">
                    <div>
                      <span className="registrations-info-label">Father's Name</span>
                      <strong className="registrations-info-value">
                        {viewModalData.fatherName}
                      </strong>
                    </div>
                    <div>
                      <span className="registrations-info-label">Mother's Name</span>
                      <strong className="registrations-info-value">
                        {viewModalData.motherName}
                      </strong>
                    </div>
                    <div>
                      <span className="registrations-info-label">Gender</span>
                      <strong className="registrations-info-value">{viewModalData.gender}</strong>
                    </div>
                    <div>
                      <span className="registrations-info-label">Date of Birth</span>
                      <strong className="registrations-info-value">{viewModalData.dob}</strong>
                    </div>
                  </div>
                  <div style={{ marginTop: "14px" }}>
                    <span className="registrations-info-label">Aadhar Card No.</span>
                    <strong className="registrations-info-value">{viewModalData.aadhar}</strong>
                  </div>
                </div>

                <div className="registrations-info-box">
                  <div className="registrations-info-title">
                    <FiPhone /> CONTACT DETAILS
                  </div>
                  <div>
                    <span className="registrations-info-label">Mobile Phone Number</span>
                    <strong className="registrations-info-value">{viewModalData.contact}</strong>
                  </div>
                  <div style={{ marginTop: "14px" }}>
                    <span className="registrations-info-label">Email Address</span>
                    <strong className="registrations-info-value">{viewModalData.email}</strong>
                  </div>
                </div>
              </div>

              {/* Addresses */}
              <div className="registrations-view-row">
                <div className="registrations-info-box">
                  <div className="registrations-info-title">
                    <FiMapPin /> LOCAL ADDRESS
                  </div>
                  <p className="registrations-address-text bold">
                    {viewModalData.localAddress?.street}
                  </p>
                  <p className="registrations-address-text">
                    {viewModalData.localAddress?.district} , {viewModalData.localAddress?.state},{" "}
                    India
                  </p>
                  <p className="registrations-address-text">
                    PIN Code: {viewModalData.localAddress?.pincode}
                  </p>
                </div>

                <div className="registrations-info-box">
                  <div className="registrations-info-title">
                    <FiMapPin /> PERMANENT ADDRESS
                  </div>
                  <p className="registrations-address-text italic-sub">Same as Local Address</p>
                </div>
              </div>

              {/* Academic History */}
              <div className="registrations-info-box full-width">
                <div className="registrations-info-title">
                  <FiBookOpen /> ACADEMIC HISTORY
                </div>
                <div className="registrations-academic-list">
                  {viewModalData.academics?.map((academic, i) => (
                    <div key={i} className="registrations-academic-item">
                      <div className="registrations-academic-main">
                        <strong className="registrations-academic-deg">{academic.degree}</strong>
                        <span className="registrations-academic-col">{academic.college}</span>
                      </div>
                      <div className="registrations-academic-scores">
                        <span className="registrations-score-lbl">YEAR/SESSION</span>
                        <strong className="registrations-score-val">{academic.year}</strong>
                        <span className="registrations-score-lbl">GRADE/DIVISION</span>
                        <strong className="registrations-score-val">{academic.grade}</strong>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Signed Documents */}
              <div className="registrations-info-box full-width">
                <div className="registrations-info-title">
                  <FiFileText /> SIGNED DOCUMENTS
                </div>
                <span className="registrations-info-label" style={{ marginBottom: "8px" }}>
                  Applicant Signature
                </span>
                <div className="registrations-signature-card">
                  <span className="registrations-handwritten">{viewModalData.name}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* EDIT DETAILS MODAL */}
      {editModalData && (
        <div className="registrations-modal-overlay" onClick={() => setEditModalData(null)}>
          <div
            className="registrations-modal-box edit-card"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="registrations-modal-header">
              <div>
                <h2>Edit Student Registration</h2>
                <p className="registrations-modal-subtext">
                  Update candidate profiles and onboarding registration details.
                </p>
              </div>
              <button
                type="button"
                className="registrations-close-x"
                onClick={() => setEditModalData(null)}
              >
                <FiX />
              </button>
            </div>

            <form onSubmit={handleEditSave} className="registrations-modal-scroll-area">
              <div className="registrations-edit-card-section">
                <h4 className="registrations-edit-section-header">PERSONAL DETAILS</h4>
                <div className="registrations-edit-grid-two">
                  <div className="registrations-field-group">
                    <label>FULL NAME</label>
                    <input
                      type="text"
                      value={editModalData.name}
                      onChange={(e) =>
                        setEditModalData({ ...editModalData, name: e.target.value })
                      }
                      required
                    />
                  </div>
                  <div className="registrations-field-group">
                    <label>DATE OF BIRTH</label>
                    <input
                      type="date"
                      value={editModalData.dob}
                      onChange={(e) =>
                        setEditModalData({ ...editModalData, dob: e.target.value })
                      }
                    />
                  </div>
                </div>

                <div className="registrations-edit-grid-two">
                  <div className="registrations-field-group">
                    <label>FATHER'S NAME</label>
                    <input
                      type="text"
                      value={editModalData.fatherName}
                      onChange={(e) =>
                        setEditModalData({ ...editModalData, fatherName: e.target.value })
                      }
                    />
                  </div>
                  <div className="registrations-field-group">
                    <label>MOTHER'S NAME</label>
                    <input
                      type="text"
                      value={editModalData.motherName}
                      onChange={(e) =>
                        setEditModalData({ ...editModalData, motherName: e.target.value })
                      }
                    />
                  </div>
                </div>

                <div className="registrations-edit-grid-two">
                  <div className="registrations-field-group">
                    <label>GENDER</label>
                    <select
                      value={editModalData.gender}
                      onChange={(e) =>
                        setEditModalData({ ...editModalData, gender: e.target.value })
                      }
                    >
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                  <div className="registrations-field-group">
                    <label>CATEGORY</label>
                    <input
                      type="text"
                      value={editModalData.category}
                      onChange={(e) =>
                        setEditModalData({ ...editModalData, category: e.target.value })
                      }
                    />
                  </div>
                </div>
              </div>

              <div className="registrations-edit-card-section">
                <h4 className="registrations-edit-section-header">CONTACT &amp; INTERNSHIP GOALS</h4>
                <div className="registrations-edit-grid-two">
                  <div className="registrations-field-group">
                    <label>MOBILE NUMBER</label>
                    <input
                      type="text"
                      value={editModalData.contact}
                      onChange={(e) =>
                        setEditModalData({ ...editModalData, contact: e.target.value })
                      }
                      required
                    />
                  </div>
                  <div className="registrations-field-group">
                    <label>AADHAR NUMBER (OPTIONAL)</label>
                    <input
                      type="text"
                      value={editModalData.aadhar}
                      onChange={(e) =>
                        setEditModalData({ ...editModalData, aadhar: e.target.value })
                      }
                    />
                  </div>
                </div>
                <div className="registrations-field-group single-line">
                  <label>INTERNSHIP GOAL</label>
                  <select
                    value={editModalData.goal}
                    onChange={(e) =>
                      setEditModalData({ ...editModalData, goal: e.target.value })
                    }
                  >
                    <option value="Skill Enhancement">Skill Enhancement</option>
                    <option value="Job Readiness">Job Readiness</option>
                    <option value="Internship">Internship</option>
                    <option value="Corporate Training">Corporate Training</option>
                    <option value="Higher Education">Higher Education</option>
                  </select>
                </div>
              </div>

              <div className="registrations-edit-card-section">
                <h4 className="registrations-edit-section-header">LOCAL ADDRESS</h4>
                <div className="registrations-field-group single-line">
                  <label>FLAT / STREET / LOCALITY</label>
                  <input
                    type="text"
                    value={editModalData.localAddress?.street || ""}
                    onChange={(e) =>
                      setEditModalData({
                        ...editModalData,
                        localAddress: { ...editModalData.localAddress, street: e.target.value }
                      })
                    }
                  />
                </div>
                <div className="registrations-edit-grid-two">
                  <div className="registrations-field-group">
                    <label>DISTRICT</label>
                    <input
                      type="text"
                      value={editModalData.localAddress?.district || ""}
                      onChange={(e) =>
                        setEditModalData({
                          ...editModalData,
                          localAddress: { ...editModalData.localAddress, district: e.target.value }
                        })
                      }
                    />
                  </div>
                  <div className="registrations-field-group">
                    <label>STATE</label>
                    <input
                      type="text"
                      value={editModalData.localAddress?.state || ""}
                      onChange={(e) =>
                        setEditModalData({
                          ...editModalData,
                          localAddress: { ...editModalData.localAddress, state: e.target.value }
                        })
                      }
                    />
                  </div>
                </div>
                <div className="registrations-edit-grid-two">
                  <div className="registrations-field-group">
                    <label>PIN CODE</label>
                    <input
                      type="text"
                      value={editModalData.localAddress?.pincode || ""}
                      onChange={(e) =>
                        setEditModalData({
                          ...editModalData,
                          localAddress: { ...editModalData.localAddress, pincode: e.target.value }
                        })
                      }
                    />
                  </div>
                </div>
              </div>

              <div className="registrations-edit-card-section">
                <h4 className="registrations-edit-section-header">PERMANENT ADDRESS</h4>
                <div className="registrations-field-group single-line">
                  <label>FLAT / STREET / LOCALITY</label>
                  <input
                    type="text"
                    value={editModalData.permanentAddress?.street || ""}
                    onChange={(e) =>
                      setEditModalData({
                        ...editModalData,
                        permanentAddress: {
                          ...editModalData.permanentAddress,
                          street: e.target.value
                        }
                      })
                    }
                  />
                </div>
                <div className="registrations-edit-grid-two">
                  <div className="registrations-field-group">
                    <label>DISTRICT</label>
                    <input
                      type="text"
                      value={editModalData.permanentAddress?.district || ""}
                      onChange={(e) =>
                        setEditModalData({
                          ...editModalData,
                          permanentAddress: {
                            ...editModalData.permanentAddress,
                            district: e.target.value
                          }
                        })
                      }
                    />
                  </div>
                  <div className="registrations-field-group">
                    <label>STATE</label>
                    <input
                      type="text"
                      value={editModalData.permanentAddress?.state || ""}
                      onChange={(e) =>
                        setEditModalData({
                          ...editModalData,
                          permanentAddress: {
                            ...editModalData.permanentAddress,
                            state: e.target.value
                          }
                        })
                      }
                    />
                  </div>
                </div>
                <div className="registrations-edit-grid-two">
                  <div className="registrations-field-group">
                    <label>PIN CODE</label>
                    <input
                      type="text"
                      value={editModalData.permanentAddress?.pincode || ""}
                      onChange={(e) =>
                        setEditModalData({
                          ...editModalData,
                          permanentAddress: {
                            ...editModalData.permanentAddress,
                            pincode: e.target.value
                          }
                        })
                      }
                    />
                  </div>
                </div>
              </div>

              <div className="registrations-modal-footer">
                <button
                  type="button"
                  className="registrations-cancel-btn"
                  onClick={() => setEditModalData(null)}
                >
                  Cancel
                </button>
                <button type="submit" className="registrations-submit-btn">
                  <FiSave /> Save Changes
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Registrations;