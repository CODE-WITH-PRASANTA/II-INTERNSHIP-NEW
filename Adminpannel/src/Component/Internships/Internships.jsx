import React, { useState, useRef, useEffect } from "react";
import "./Internships.css";

const InternshipsIcons = {
  Activity: () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
    </svg>
  ),
  Clock: () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
    </svg>
  ),
  Building: () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 21h18M5 21V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16M9 9h1m4 0h1m-6 4h1m4 0h1m-6 4h1m4 0h1" />
    </svg>
  ),
  Laptop: () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="4" width="18" height="12" rx="2" /><line x1="2" y1="20" x2="22" y2="20" />
    </svg>
  ),
  Search: () => (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" />
    </svg>
  ),
  Plus: () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <line x1="12" y1="5" x2="12" y2="19" /><line x1="5" y1="12" x2="19" y2="12" />
    </svg>
  ),
  MoreHorizontal: () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <circle cx="5" cy="12" r="2" /><circle cx="12" cy="12" r="2" /><circle cx="19" cy="12" r="2" />
    </svg>
  ),
  Eye: () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#00966d" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" /><circle cx="12" cy="12" r="3" />
    </svg>
  ),
  Users: () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#6366f1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  ),
  Edit: () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#f59e0b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" /><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
    </svg>
  ),
  Trash: () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#ef4444" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="3 6 5 6 21 6" /><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" /><line x1="10" y1="11" x2="10" y2="17" /><line x1="14" y1="11" x2="14" y2="17" />
    </svg>
  ),
  AlertTriangle: () => (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#dc2626" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z" />
      <line x1="12" y1="9" x2="12" y2="13" />
      <line x1="12" y1="17" x2="12.01" y2="17" />
    </svg>
  ),
  Briefcase: () => (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="#007a55" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="7" width="20" height="14" rx="2" ry="2" /><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
    </svg>
  ),
  Calendar: () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" strokeWidth="2">
      <rect x="3" y="4" width="18" height="18" rx="2" ry="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" />
    </svg>
  ),
  MapPin: () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" strokeWidth="2">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" />
    </svg>
  ),
  Sparkles: () => (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="#007a55" strokeWidth="2">
      <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" />
    </svg>
  ),
  FileText: () => (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="#9333ea" strokeWidth="2">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" />
    </svg>
  ),
  Layers: () => (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="#ea580c" strokeWidth="2">
      <polygon points="12 2 2 7 12 12 22 7 12 2" /><polyline points="2 17 12 22 22 17" /><polyline points="2 12 12 17 22 12" />
    </svg>
  ),
  DollarSign: () => (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="#16a34a" strokeWidth="2">
      <line x1="12" y1="1" x2="12" y2="23" /><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
    </svg>
  ),
  Close: () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#6b7280" strokeWidth="2.5" strokeLinecap="round">
      <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  ),
  Grid: () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="3" y="3" width="18" height="18" rx="2" /><path d="M3 9h18M3 15h18M9 3v18M15 3v18" />
    </svg>
  ),
  Download: () => (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="7 10 12 15 17 10" /><line x1="12" y1="15" x2="12" y2="3" />
    </svg>
  ),
  CheckCircle: () => (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#059669" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" />
    </svg>
  ),
  XCircle: () => (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#dc2626" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" /><line x1="15" y1="9" x2="9" y2="15" /><line x1="9" y1="9" x2="15" y2="15" />
    </svg>
  )
};

const initialInternships = [
  {
    id: "IN2026II81462",
    title: "FUTURE YUVA 2050: Interns...",
    subtitle: "International Institute of Internship",
    type: "PAID",
    creator: "SUPER_ADMIN",
    mentor: "Mentor: Senior Instructor",
    duration: "7 Days (60 Hrs.) • ₹7...",
    location: "Heartfulness Training Ce...",
    mode: "(OFFLINE)",
    status: "APPROVED"
  }
];

const dummyApplications = [
  {
    id: "APP-2026-001",
    name: "Aarav Sharma",
    email: "aarav.sharma@example.com",
    phone: "+91 98765 43210",
    college: "IIT Bombay",
    course: "B.Tech Computer Science (4th Year)",
    appliedDate: "Oct 02, 2026",
    status: "Shortlisted"
  },
  {
    id: "APP-2026-002",
    name: "Pooja Patel",
    email: "pooja.patel@example.com",
    phone: "+91 98220 12345",
    college: "IIIT Hyderabad",
    course: "M.Tech Data Science (2nd Year)",
    appliedDate: "Oct 04, 2026",
    status: "Under Review"
  },
  {
    id: "APP-2026-003",
    name: "Rohan Verma",
    email: "rohan.v@example.com",
    phone: "+91 99341 55678",
    college: "NIT Trichy",
    course: "B.Tech IT (3rd Year)",
    appliedDate: "Oct 06, 2026",
    status: "Approved"
  },
  {
    id: "APP-2026-004",
    name: "Sneha Reddy",
    email: "sneha.reddy@example.com",
    phone: "+91 97112 34890",
    college: "BITS Pilani",
    course: "B.E. Electrical & Electronics",
    appliedDate: "Oct 08, 2026",
    status: "Rejected"
  }
];

const defaultEditDescription = `FUTURE YUVA 2050
Internship-cum-Skill Enhancement Programme
(भविष्य पुराण से भविष्य निर्माण तक)

--------------------------------------------------------------------------------

सात दिवसीय, आवासीय आध्यात्मिक+वैज्ञानिक दृष्टिकोण+ UGC मानदंडों पर आधारित

आध्यात्मिक दृष्टि • Artificial Intelligence • Future Skills • Youth Leadership

“पुराणों की दृष्टि से भविष्य को समझें, AI की शक्ति से भविष्य को गढ़ें।”

--------------------------------------------------------------------------------

~ कार्यक्रम दिनांक: 15 से 21 दिसंबर 2026
~ कार्यक्रम स्थल: हार्टफुलनेस प्रशिक्षण केंद्र, वलसाड़, गुजरात, भारत
~ पात्रता: अध्ययनरत/सफल स्नातक व स्नातकोत्तर विद्यार्थी/जिज्ञासु
~ क्रेडिट: 2 (60 घंटा)
~ सीट: 60

ऑनलाइन पंजीकरण लिंक: www.iiinternship.in

इंटर्नशिप: निःशुल्क होगा।
~ व्यवस्था शुल्क: प्रत्येक युवा/युवती को एक खूबसूरत माहौल में आवास+भोजन+अन्य सुविधा हेतु सहयोग शुल्क ऑनलाइन पंजीकरण के वक्त मात्र 7,693/- रुपए अदा करना होगा।

--------------------------------------------------------------------------------

🔱

कार्यक्रम की मूल अवधारणा

भविष्य पुराण हिंदू धर्म के 18 महापुराणों में से नौवां और एक अत्यंत महत्वपूर्ण पुराण है। "भविष्य" शब्द का अर्थ है "आने वाला समय"। महर्षि वेदव्यास जी द्वारा रचित इस पुराण में मुख्य रूप से भविष्य में घटने वाली घटनाओं का वर्णन है।
यह पुराण चार भागों में विभाजित है: ब्राह्म, मध्यम, प्रतिसर्ग और उत्तर पर्व। इसमें धर्म, सदाचार और सूर्य उपासना के साथ-साथ इतिहास और भविष्य का अद्भुत मिश्रण मिलता है।

इस कार्यक्रम का आधार भविष्य पुराण में वर्णित भविष्य की कल्पना, धर्म, सामाजिक जीवन, मानव आचरण और समय-बोध से जुड़े विचारों को एक आध्यात्मिक-सांस्कृतिक अध्ययन के रूप में लेने के साथ-साथ भविष्य में सचेत होते हुए तैयार होना है।

इसके साथ युवाओं को यह समझाया जाएगा कि—
“भविष्य केवल भविष्यवाणी से नहीं बन जाता; भविष्य आज के ज्ञान, चरित्र, नैतिकता, मानवता, कौशल और सही निर्णयों से बनता और संवरता है।”
इसी विचार को AI, डिजिटल टेक्नोलॉजी, रोज़गार, उद्यमिता और नेतृत्व कौशल से जोड़ा जाएगा।

इस Internship-cum-Skill Enhancement Programme के चार स्तंभ होंगे:

Spiritual Wisdom
Artificial Intelligence
Future Skills
Responsible Youth Leadership

--------------------------------------------------------------------------------

7-दिवसीय, आवासीय कार्यक्रम की रूप-रेखा

DAY 1 — “भविष्य की खोज”

Future Through the Lens of Ancient Wisdom

Theme:
“हमारा अतीत हमें भविष्य के लिए क्या सिखाता है?”

सत्र:
~भविष्य पुराण : परिचय और ऐतिहासिक-सांस्कृतिक संदर्भ।
~भारतीय काल-दृष्टि और भविष्य की अवधारणा।
~भविष्यवाणी और भविष्य-निर्माण में अंतर।
~भारतीय ज्ञान परंपरा में मानव जीवन का उद्देश्य
~आज का युवा और बदलती दुनिया

Activity:
“My Vision of 2050”
हर प्रतिभागी लिखेंगे:
वर्ष 2050 में मैं स्वयं को कहाँ देखता/देखती हूँ और भारत को कहाँ देखना चाहता/चाहती हूँ?

--------------------------------------------------------------------------------

DAY 2 — “AI और मानव चेतना”

Artificial Intelligence vs Human Intelligence
यह दिन कार्यक्रम का सबसे आकर्षक हिस्सा होगा।

मुख्य विषय:
~ AI क्या है?
~ Generative AI क्या कर सकता है?
~ AI और मानव बुद्धि में अंतर
~ क्या AI मानव का स्थान लेगा?
~ भविष्य की नौकरियों पर AI का प्रभाव
~ AI Ethics
~ Deepfake, misinformation और digital responsibility.
~ AI के युग में मानवीय मूल्यों की भूमिका

Practical Workshop:
प्रतिभागी सीखेंगे:
~ AI से Research
~ AI से Presentation`;

const Internships = () => {
  const [internshipsList, setInternshipsList] = useState(initialInternships);
  const [activeTab, setActiveTab] = useState("running");
  const [searchTerm, setSearchTerm] = useState("");
  const [isActionsDropdownOpen, setIsActionsDropdownOpen] = useState(false);
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const [isDetailsModalOpen, setIsDetailsModalOpen] = useState(false);
  const [isApplicationsModalOpen, setIsApplicationsModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [selectedInternship, setSelectedInternship] = useState(null);

  // Applications modal search & status filters
  const [appSearchTerm, setAppSearchTerm] = useState("");
  const [appFilterStatus, setAppFilterStatus] = useState("ALL");

  // Edit form interactive module & skill tags
  const [editModules, setEditModules] = useState(["AI"]);
  const [editSkills, setEditSkills] = useState([
    "प्रतिभागियों के लिए कंप्यूटर का बेसिक ज्ञान होना अनिवार्य है।"
  ]);

  const actionsDropdownRef = useRef(null);
  const actionButtonRef = useRef(null);

  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (
        actionsDropdownRef.current &&
        !actionsDropdownRef.current.contains(e.target) &&
        actionButtonRef.current &&
        !actionButtonRef.current.contains(e.target)
      ) {
        setIsActionsDropdownOpen(false);
      }
    };

    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setIsActionsDropdownOpen(false);
        setIsCreateModalOpen(false);
        setIsDetailsModalOpen(false);
        setIsApplicationsModalOpen(false);
        setIsEditModalOpen(false);
        setIsDeleteModalOpen(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  useEffect(() => {
    if (
      isCreateModalOpen ||
      isDetailsModalOpen ||
      isApplicationsModalOpen ||
      isEditModalOpen ||
      isDeleteModalOpen
    ) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [
    isCreateModalOpen,
    isDetailsModalOpen,
    isApplicationsModalOpen,
    isEditModalOpen,
    isDeleteModalOpen
  ]);

  const tabs = [
    { id: "running", label: "Running Internships", icon: <InternshipsIcons.Activity /> },
    { id: "pending", label: "Pending Internships", icon: <InternshipsIcons.Clock /> },
    { id: "oncampus", label: "On Campus Internships", icon: <InternshipsIcons.Building /> },
    { id: "virtual", label: "Virtual Internships", icon: <InternshipsIcons.Laptop /> },
  ];

  const filteredApplications = dummyApplications.filter((app) => {
    const matchesSearch =
      app.name.toLowerCase().includes(appSearchTerm.toLowerCase()) ||
      app.email.toLowerCase().includes(appSearchTerm.toLowerCase()) ||
      app.college.toLowerCase().includes(appSearchTerm.toLowerCase()) ||
      app.id.toLowerCase().includes(appSearchTerm.toLowerCase());
    const matchesStatus =
      appFilterStatus === "ALL" || app.status.toUpperCase() === appFilterStatus.toUpperCase();
    return matchesSearch && matchesStatus;
  });

  const confirmDeleteInternship = () => {
    if (selectedInternship) {
      setInternshipsList((prev) =>
        prev.filter((item) => item.id !== selectedInternship.id)
      );
    }
    setIsDeleteModalOpen(false);
    setSelectedInternship(null);
  };

  return (
    <div className="internships-root">
      {/* Top Header */}
      <div className="internships-header">
        <h1 className="internships-header-title">Internships</h1>
        <p className="internships-header-subtitle">
          Manage active internship postings across running, on-campus, and virtual categories — monitor applications and approve submissions.
        </p>
      </div>

      {/* Navigation Tabs */}
      <div className="internships-tabs-bar">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={`internships-tab-button ${activeTab === tab.id ? "internships-tab-button-active" : ""}`}
            onClick={() => {
              setActiveTab(tab.id);
              setIsActionsDropdownOpen(false);
            }}
          >
            <span className="internships-tab-button-icon">{tab.icon}</span>
            <span>{tab.label}</span>
          </button>
        ))}
      </div>

      {/* Action Filters Bar */}
      <div className="internships-toolbar">
        <div className="internships-search-field">
          <InternshipsIcons.Search />
          <input
            type="text"
            placeholder="Search by ID, title, company or location"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <button className="internships-btn-add" onClick={() => setIsCreateModalOpen(true)}>
          <InternshipsIcons.Plus />
          <span>Add New Internship</span>
        </button>
      </div>

      {/* Internship Table */}
      <div className="internships-table-container">
        <table className="internships-table">
          <thead>
            <tr>
              <th>INTERNSHIP ID</th>
              <th>OPPORTUNITY TITLE</th>
              <th>CATEGORY / TYPE</th>
              <th>CREATED BY / MENTOR</th>
              <th>DURATION / PRICING</th>
              <th>LOCATION / MODE</th>
              <th>APPROVAL STATUS</th>
              <th className="internships-table-th-actions">ACTIONS</th>
            </tr>
          </thead>
          <tbody>
            {activeTab === "running" && internshipsList.length > 0 ? (
              internshipsList.map((item) => (
                <tr key={item.id}>
                  <td>
                    <span className="internships-badge-id">{item.id}</span>
                  </td>
                  <td>
                    <div className="internships-opp-title">{item.title}</div>
                    <div className="internships-opp-subtitle">{item.subtitle}</div>
                  </td>
                  <td>
                    <span className="internships-badge-type">{item.type}</span>
                  </td>
                  <td>
                    <div>
                      <span className="internships-badge-creator">{item.creator}</span>
                    </div>
                    <div className="internships-opp-mentor">{item.mentor}</div>
                  </td>
                  <td>
                    <div className="internships-cell-text">{item.duration}</div>
                  </td>
                  <td>
                    <div className="internships-cell-text">{item.location}</div>
                    <div className="internships-cell-subtext">{item.mode}</div>
                  </td>
                  <td>
                    <span className="internships-badge-status-approved">{item.status}</span>
                  </td>
                  <td className="internships-table-actions-cell">
                    <button
                      ref={actionButtonRef}
                      className={`internships-btn-action-trigger ${isActionsDropdownOpen ? "active" : ""}`}
                      onClick={() => {
                        setSelectedInternship(item);
                        setIsActionsDropdownOpen((prev) => !prev);
                      }}
                      aria-label="Actions"
                      aria-expanded={isActionsDropdownOpen}
                    >
                      <InternshipsIcons.MoreHorizontal />
                    </button>

                    {/* 3-Dot Action Dropdown with Smooth Transitions */}
                    <div
                      ref={actionsDropdownRef}
                      className={`internships-dropdown-menu ${isActionsDropdownOpen ? "internships-dropdown-menu-open" : ""}`}
                    >
                      <button
                        type="button"
                        className="internships-dropdown-item"
                        onClick={() => {
                          setIsActionsDropdownOpen(false);
                          setIsDetailsModalOpen(true);
                        }}
                      >
                        <InternshipsIcons.Eye />
                        <span>View Full Details</span>
                      </button>
                      <button
                        type="button"
                        className="internships-dropdown-item"
                        onClick={() => {
                          setIsActionsDropdownOpen(false);
                          setIsApplicationsModalOpen(true);
                        }}
                      >
                        <InternshipsIcons.Users />
                        <span>View Applications</span>
                      </button>
                      <button
                        type="button"
                        className="internships-dropdown-item"
                        onClick={() => {
                          setIsActionsDropdownOpen(false);
                          setIsEditModalOpen(true);
                        }}
                      >
                        <InternshipsIcons.Edit />
                        <span>Edit Internship</span>
                      </button>
                      <button
                        type="button"
                        className="internships-dropdown-item internships-dropdown-item-danger"
                        onClick={() => {
                          setIsActionsDropdownOpen(false);
                          setSelectedInternship(item);
                          setIsDeleteModalOpen(true);
                        }}
                      >
                        <InternshipsIcons.Trash />
                        <span>Delete Internship</span>
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="8" className="internships-table-empty">
                  <div className="internships-empty-wrap">
                    <InternshipsIcons.Grid />
                    <span>No results found.</span>
                  </div>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* DELETE CONFIRMATION MODAL */}
      {isDeleteModalOpen && (
        <div className="internships-modal-overlay" onClick={() => setIsDeleteModalOpen(false)}>
          <div
            className="internships-modal-dialog internships-delete-modal-dialog"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="internships-delete-modal-body">
              <div className="internships-delete-icon-wrapper">
                <InternshipsIcons.AlertTriangle />
              </div>
              <h3 className="internships-delete-title">Delete Internship Posting?</h3>
              <p className="internships-delete-text">
                Are you sure you want to delete{" "}
                <strong>{selectedInternship?.title || "this internship"}</strong> (ID:{" "}
                <span className="internships-delete-id-tag">{selectedInternship?.id}</span>)?
                This action cannot be undone and will permanently remove all related specifications and applicant tracking records.
              </p>
            </div>
            <div className="internships-delete-modal-footer">
              <button
                type="button"
                className="internships-btn-cancel"
                onClick={() => setIsDeleteModalOpen(false)}
              >
                Keep Internship
              </button>
              <button
                type="button"
                className="internships-btn-delete-confirm"
                onClick={confirmDeleteInternship}
              >
                Delete Permanently
              </button>
            </div>
          </div>
        </div>
      )}

      {/* EDIT RUNNING INTERNSHIP MODAL */}
      {isEditModalOpen && (
        <div className="internships-modal-overlay" onClick={() => setIsEditModalOpen(false)}>
          <div className="internships-modal-dialog" onClick={(e) => e.stopPropagation()}>
            <div className="internships-modal-header">
              <div>
                <h2 className="internships-modal-header-title">Super Admin: Edit Running Internship</h2>
                <p className="internships-modal-header-subtitle">
                  Modify and update details, assigned instructor, and curriculum metadata.
                </p>
              </div>
              <button
                className="internships-modal-close-btn"
                onClick={() => setIsEditModalOpen(false)}
                aria-label="Close modal"
              >
                <InternshipsIcons.Close />
              </button>
            </div>

            <div className="internships-modal-body">
              {/* Section 1: Basic Information */}
              <div className="internships-form-section">
                <div className="internships-form-section-header">
                  <InternshipsIcons.Briefcase />
                  <span className="internships-form-section-title">Basic Information</span>
                </div>
                <div className="internships-form-grid">
                  <div className="internships-field-group">
                    <label>INTERNSHIP TITLE *</label>
                    <div className="internships-input-box">
                      <InternshipsIcons.Briefcase />
                      <input
                        type="text"
                        defaultValue="FUTURE YUVA 2050: Internship-cum-Skill Enhancement Progra..."
                        className="internships-input-highlighted"
                      />
                    </div>
                  </div>

                  <div className="internships-field-group">
                    <label>COMPANY / ORGANIZATION NAME *</label>
                    <div className="internships-input-box">
                      <InternshipsIcons.Building />
                      <input type="text" defaultValue="International Institute of Internship" />
                    </div>
                  </div>

                  <div className="internships-field-group">
                    <label>MODE *</label>
                    <div className="internships-select-box">
                      <select defaultValue="Offline (In-Person)">
                        <option>Offline (In-Person)</option>
                        <option>Online (Virtual)</option>
                        <option>Hybrid</option>
                      </select>
                    </div>
                  </div>

                  <div className="internships-field-group">
                    <label>LOCATION *</label>
                    <div className="internships-input-box">
                      <InternshipsIcons.MapPin />
                      <input type="text" defaultValue="Heartfulness Training Centre, Valsad, Gujrat, India" />
                    </div>
                  </div>

                  <div className="internships-field-group">
                    <label>DURATION *</label>
                    <div className="internships-input-box">
                      <InternshipsIcons.Clock />
                      <input type="text" defaultValue="7 Days (60 Hrs.)" />
                    </div>
                  </div>

                  <div className="internships-field-group">
                    <label>PROGRAM START DATE</label>
                    <div className="internships-input-box">
                      <InternshipsIcons.Calendar />
                      <input type="text" defaultValue="December 14th, 2026" />
                    </div>
                  </div>

                  <div className="internships-field-group internships-col-single">
                    <label>LAST DATE TO APPLY</label>
                    <div className="internships-input-box">
                      <InternshipsIcons.Calendar />
                      <input type="text" defaultValue="October 9th, 2026" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Section 2: Instructor & Mentor Assignment */}
              <div className="internships-form-section">
                <div className="internships-form-section-header">
                  <InternshipsIcons.Users />
                  <span className="internships-form-section-title">Instructor & Mentor Assignment</span>
                </div>
                <div className="internships-form-grid internships-form-grid-full">
                  <div className="internships-field-group">
                    <label>ASSIGNED INSTRUCTOR / MENTOR</label>
                    <div className="internships-select-box">
                      <select defaultValue="Senior Instructor (instructor@hilux.com)">
                        <option>Senior Instructor (instructor@hilux.com)</option>
                        <option>Dr. Rajesh Verma (dr.verma@example.com)</option>
                        <option>Dr. Avishek Kumar (avishek@example.com)</option>
                      </select>
                    </div>
                    <span className="internships-field-guide">
                      Assigning an instructor routes the internship to their review panel for approval or tracking.
                    </span>
                  </div>
                </div>
              </div>

              {/* Section 3: Program & Academic Metadata */}
              <div className="internships-form-section">
                <div className="internships-form-section-header">
                  <InternshipsIcons.Layers />
                  <span className="internships-form-section-title">Program & Academic Metadata</span>
                </div>
                <div className="internships-form-grid">
                  <div className="internships-field-group">
                    <label>DEPARTMENT</label>
                    <div className="internships-input-box">
                      <InternshipsIcons.Building />
                      <input type="text" defaultValue="Education & Skill Development (AI/ML)" />
                    </div>
                  </div>

                  <div className="internships-field-group">
                    <label>CATEGORY *</label>
                    <div className="internships-select-box">
                      <select defaultValue="Running Program">
                        <option>Running Program</option>
                        <option>Incubation</option>
                      </select>
                    </div>
                  </div>

                  <div className="internships-field-group">
                    <label>TIME PERIOD / HOUSING</label>
                    <div className="internships-input-box">
                      <InternshipsIcons.Clock />
                      <input type="text" defaultValue="7 Days Residential" />
                    </div>
                  </div>

                  <div className="internships-field-group">
                    <label>ACADEMIC CREDITS</label>
                    <div className="internships-input-box">
                      <input type="text" defaultValue="2" />
                    </div>
                  </div>

                  <div className="internships-field-group">
                    <label>ORGANIZER NAME</label>
                    <div className="internships-input-box">
                      <InternshipsIcons.Building />
                      <input type="text" defaultValue="International Institute of Internship" />
                    </div>
                  </div>

                  <div className="internships-field-group">
                    <label>CONTACT DETAILS</label>
                    <div className="internships-input-box">
                      <input type="text" defaultValue="Dr. Avishek Kumar (+91 9472351693)" />
                    </div>
                  </div>

                  <div className="internships-field-group internships-col-span-2">
                    <label>ELIGIBILITY / QUALIFICATION REQUIRED</label>
                    <div className="internships-input-box">
                      <input
                        type="text"
                        defaultValue="Under Graduate/PG & Pass Out Graduate/PG Any Discipline Student"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Section 4: Compensation & Pricing */}
              <div className="internships-form-section">
                <div className="internships-form-section-header">
                  <InternshipsIcons.DollarSign />
                  <span className="internships-form-section-title">Compensation & Pricing</span>
                </div>
                <div className="internships-form-grid">
                  <div className="internships-field-group">
                    <label>INTERNSHIP TYPE *</label>
                    <div className="internships-select-box">
                      <select defaultValue="Paid (Enrollment Fee Required)">
                        <option>Paid (Enrollment Fee Required)</option>
                        <option>Free (No fees)</option>
                        <option>Stipend</option>
                      </select>
                    </div>
                  </div>

                  <div className="internships-field-group">
                    <label>ENROLLMENT FEE (INR) *</label>
                    <div className="internships-input-box">
                      <span className="internships-currency-sym">$</span>
                      <input type="text" defaultValue="7693" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Section 5: Details, Facilities & Career Opportunities */}
              <div className="internships-form-section">
                <div className="internships-form-section-header">
                  <InternshipsIcons.FileText />
                  <span className="internships-form-section-title">Details, Facilities & Career Opportunities</span>
                </div>

                <div className="internships-editor-wrapper">
                  <label className="internships-editor-label">DESCRIPTION *</label>
                  <div className="internships-editor-box">
                    <div className="internships-editor-toolbar">
                      <div className="internships-editor-toolbar-group">
                        <button type="button" className="internships-editor-btn"><b>B</b></button>
                        <button type="button" className="internships-editor-btn"><i>I</i></button>
                        <button type="button" className="internships-editor-btn">H₂</button>
                        <button type="button" className="internships-editor-btn">H₃</button>
                        <button type="button" className="internships-editor-btn">P</button>
                      </div>
                      <div className="internships-editor-toolbar-separator" />
                      <div className="internships-editor-toolbar-group">
                        <button type="button" className="internships-editor-btn">≡</button>
                        <button type="button" className="internships-editor-btn">1≡</button>
                        <button type="button" className="internships-editor-btn">❝</button>
                        <button type="button" className="internships-editor-btn">&lt;&gt;</button>
                        <button type="button" className="internships-editor-btn">—</button>
                      </div>
                      <div className="internships-editor-toolbar-separator" />
                      <div className="internships-editor-toolbar-group">
                        <button type="button" className="internships-editor-btn">🔗</button>
                        <button type="button" className="internships-editor-btn">Tx</button>
                        <button type="button" className="internships-editor-btn">↺</button>
                        <button type="button" className="internships-editor-btn">↻</button>
                      </div>
                      <div className="internships-editor-toolbar-right">
                        <button type="button" className="internships-editor-html-btn">&lt;&gt; HTML</button>
                      </div>
                    </div>
                    <textarea
                      className="internships-editor-textarea internships-editor-textarea-large"
                      defaultValue={defaultEditDescription}
                    />
                    <div className="internships-editor-tip">
                      Tip: Use toolbar or keyboard shortcuts — Ctrl+B Bold, Ctrl+I Italic. Switch to HTML view for raw editing.
                    </div>
                  </div>
                </div>
              </div>

              {/* Section 6: Curriculum, Tools & Skills */}
              <div className="internships-form-section">
                <div className="internships-form-section-header">
                  <InternshipsIcons.Sparkles />
                  <span className="internships-form-section-title">Curriculum, Tools & Skills</span>
                </div>

                <div className="internships-form-grid internships-form-grid-full">
                  <div className="internships-field-group">
                    <label>MODULES</label>
                    <div className="internships-chip-input-container">
                      {editModules.map((mod, idx) => (
                        <span key={idx} className="internships-chip-tag">
                          {mod}
                          <button
                            type="button"
                            className="internships-chip-remove"
                            onClick={() => setEditModules(editModules.filter((_, i) => i !== idx))}
                          >
                            ×
                          </button>
                        </span>
                      ))}
                    </div>
                    <span className="internships-field-guide">Press Enter or Comma after typing each module.</span>
                  </div>

                  <div className="internships-field-group">
                    <label>TOOLS USED</label>
                    <div className="internships-input-box">
                      <input type="text" placeholder="E.g. Next.js, Go, Docker, Kubernetes, Prometheus" />
                    </div>
                    <span className="internships-field-guide">Press Enter or Comma after typing each tool.</span>
                  </div>

                  <div className="internships-field-group">
                    <label>SKILLS REQUIRED / LEARNED</label>
                    <div className="internships-chip-input-container">
                      {editSkills.map((sk, idx) => (
                        <span key={idx} className="internships-chip-tag">
                          {sk}
                          <button
                            type="button"
                            className="internships-chip-remove"
                            onClick={() => setEditSkills(editSkills.filter((_, i) => i !== idx))}
                          >
                            ×
                          </button>
                        </span>
                      ))}
                    </div>
                    <span className="internships-field-guide">Press Enter or Comma after typing each skill.</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="internships-modal-footer">
              <button
                type="button"
                className="internships-btn-cancel"
                onClick={() => setIsEditModalOpen(false)}
              >
                Cancel
              </button>
              <button
                type="button"
                className="internships-btn-submit"
                onClick={() => {
                  alert("Internship updated successfully!");
                  setIsEditModalOpen(false);
                }}
              >
                Update Internship
              </button>
            </div>
          </div>
        </div>
      )}

      {/* VIEW APPLICATIONS MODAL */}
      {isApplicationsModalOpen && (
        <div className="internships-modal-overlay" onClick={() => setIsApplicationsModalOpen(false)}>
          <div
            className="internships-modal-dialog internships-applications-modal-dialog"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="internships-modal-header">
              <div>
                <div className="internships-app-header-title-row">
                  <h2 className="internships-modal-header-title">Cohort Student Applications</h2>
                  <span className="internships-badge-id">IN2026II81462</span>
                </div>
                <p className="internships-modal-header-subtitle">
                  FUTURE YUVA 2050: Internship-cum-Skill Enhancement Programme • Total Submissions: {dummyApplications.length}
                </p>
              </div>
              <button
                className="internships-modal-close-btn"
                onClick={() => setIsApplicationsModalOpen(false)}
                aria-label="Close modal"
              >
                <InternshipsIcons.Close />
              </button>
            </div>

            <div className="internships-modal-body internships-applications-modal-body">
              <div className="internships-app-stats-strip">
                <div className="internships-app-stat-tile">
                  <span className="internships-app-stat-number">4</span>
                  <span className="internships-app-stat-tag">Total Received</span>
                </div>
                <div className="internships-app-stat-tile">
                  <span className="internships-app-stat-number stat-green">1</span>
                  <span className="internships-app-stat-tag">Approved</span>
                </div>
                <div className="internships-app-stat-tile">
                  <span className="internships-app-stat-number stat-indigo">1</span>
                  <span className="internships-app-stat-tag">Shortlisted</span>
                </div>
                <div className="internships-app-stat-tile">
                  <span className="internships-app-stat-number stat-amber">1</span>
                  <span className="internships-app-stat-tag">Under Review</span>
                </div>
                <div className="internships-app-stat-tile">
                  <span className="internships-app-stat-number stat-red">1</span>
                  <span className="internships-app-stat-tag">Rejected</span>
                </div>
              </div>

              <div className="internships-app-controls-bar">
                <div className="internships-app-search-wrap">
                  <InternshipsIcons.Search />
                  <input
                    type="text"
                    placeholder="Search applicant name, email, college or application ID..."
                    value={appSearchTerm}
                    onChange={(e) => setAppSearchTerm(e.target.value)}
                  />
                </div>

                <div className="internships-app-filters-right">
                  <select
                    className="internships-app-filter-select"
                    value={appFilterStatus}
                    onChange={(e) => setAppFilterStatus(e.target.value)}
                  >
                    <option value="ALL">All Statuses</option>
                    <option value="SHORTLISTED">Shortlisted</option>
                    <option value="UNDER REVIEW">Under Review</option>
                    <option value="APPROVED">Approved</option>
                    <option value="REJECTED">Rejected</option>
                  </select>

                  <button
                    type="button"
                    className="internships-app-btn-export"
                    onClick={() => alert("Downloading applications CSV...")}
                  >
                    <InternshipsIcons.Download />
                    <span>Export CSV</span>
                  </button>
                </div>
              </div>

              <div className="internships-app-table-wrapper">
                <table className="internships-app-table">
                  <thead>
                    <tr>
                      <th>APPLICANT ID</th>
                      <th>CANDIDATE INFO</th>
                      <th>COLLEGE & PROGRAM</th>
                      <th>APPLIED DATE</th>
                      <th>STATUS</th>
                      <th className="internships-table-th-actions">REVIEW ACTION</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredApplications.length > 0 ? (
                      filteredApplications.map((candidate) => (
                        <tr key={candidate.id}>
                          <td>
                            <span className="internships-app-id-tag">{candidate.id}</span>
                          </td>
                          <td>
                            <div className="internships-app-cand-name">{candidate.name}</div>
                            <div className="internships-app-cand-contact">
                              {candidate.email} • {candidate.phone}
                            </div>
                          </td>
                          <td>
                            <div className="internships-app-college-name">{candidate.college}</div>
                            <div className="internships-app-course-name">{candidate.course}</div>
                          </td>
                          <td>
                            <span className="internships-app-date">{candidate.appliedDate}</span>
                          </td>
                          <td>
                            <span
                              className={`internships-app-status-badge status-${candidate.status.toLowerCase().replace(/\s+/g, "-")}`}
                            >
                              {candidate.status}
                            </span>
                          </td>
                          <td className="internships-table-actions-cell">
                            <div className="internships-app-row-actions">
                              <button
                                type="button"
                                className="internships-app-btn-status btn-approve"
                                title="Approve Application"
                                onClick={() => alert(`Application ${candidate.id} Approved`)}
                              >
                                <InternshipsIcons.CheckCircle />
                                <span>Approve</span>
                              </button>
                              <button
                                type="button"
                                className="internships-app-btn-status btn-reject"
                                title="Reject Application"
                                onClick={() => alert(`Application ${candidate.id} Rejected`)}
                              >
                                <InternshipsIcons.XCircle />
                                <span>Reject</span>
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td colSpan="6" className="internships-table-empty">
                          <div className="internships-empty-wrap">
                            <InternshipsIcons.Grid />
                            <span>No matching applicant applications found.</span>
                          </div>
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="internships-modal-footer">
              <button
                type="button"
                className="internships-btn-cancel"
                onClick={() => setIsApplicationsModalOpen(false)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* VIEW FULL DETAILS MODAL */}
      {isDetailsModalOpen && (
        <div className="internships-modal-overlay" onClick={() => setIsDetailsModalOpen(false)}>
          <div
            className="internships-modal-dialog internships-details-modal-dialog"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="internships-modal-header">
              <div>
                <h2 className="internships-modal-header-title">Internship Payload Details</h2>
                <p className="internships-modal-header-subtitle">
                  IN2026II81462 — Full breakdown of cohort specification and responses.
                </p>
              </div>
              <button
                className="internships-modal-close-btn"
                onClick={() => setIsDetailsModalOpen(false)}
                aria-label="Close modal"
              >
                <InternshipsIcons.Close />
              </button>
            </div>

            <div className="internships-modal-body internships-details-modal-body">
              <div className="internships-payload-status-card">
                <span className="internships-payload-status-label">Approval Status:</span>
                <span className="internships-badge-status-approved">APPROVED</span>
              </div>

              <div className="internships-payload-hero-card">
                <div className="internships-payload-hero-top">
                  <div className="internships-payload-hero-left">
                    <h3 className="internships-payload-title">
                      FUTURE YUVA 2050: Internship-cum-Skill Enhancement Programme (भविष्य पुराण से भविष्य निर्माण तक)
                    </h3>
                    <p className="internships-payload-subtitle">
                      International Institute of Internship • Heartfulness Training Centre, Valsad, Gujrat, India
                    </p>
                  </div>
                  <div className="internships-payload-hero-right">
                    <span className="internships-badge-running">RUNNING</span>
                    <div className="internships-payload-pricing">
                      <span className="internships-payload-pricing-label">Type & Pricing</span>
                      <span className="internships-payload-pricing-value">₹7,693</span>
                    </div>
                  </div>
                </div>

                <div className="internships-payload-stats-grid">
                  <div className="internships-payload-stat-item">
                    <span className="internships-payload-stat-label">Mode</span>
                    <span className="internships-payload-stat-value">OFFLINE</span>
                  </div>
                  <div className="internships-payload-stat-item">
                    <span className="internships-payload-stat-label">Duration</span>
                    <span className="internships-payload-stat-value">7 Days (60 Hrs.)</span>
                  </div>
                  <div className="internships-payload-stat-item">
                    <span className="internships-payload-stat-label">Start Date</span>
                    <span className="internships-payload-stat-value">Dec 14, 2026</span>
                  </div>
                  <div className="internships-payload-stat-item">
                    <span className="internships-payload-stat-label">Last Date to Apply</span>
                    <span className="internships-payload-stat-value">Oct 10, 2026</span>
                  </div>
                </div>
              </div>

              <div className="internships-payload-section-card">
                <div className="internships-payload-card-title">
                  <InternshipsIcons.Layers />
                  <span>Program & Academic Specifications</span>
                </div>
                <div className="internships-payload-specs-grid">
                  <div className="internships-payload-spec-item">
                    <span className="internships-payload-spec-label">Internship ID:</span>
                    <span className="internships-badge-id">IN2026II81462</span>
                  </div>
                  <div className="internships-payload-spec-item">
                    <span className="internships-payload-spec-label">Department:</span>
                    <span className="internships-payload-spec-val">Education & Skill Development (AI/ML)</span>
                  </div>
                  <div className="internships-payload-spec-item">
                    <span className="internships-payload-spec-label">Academic Credits:</span>
                    <span className="internships-payload-spec-val">2</span>
                  </div>
                  <div className="internships-payload-spec-item">
                    <span className="internships-payload-spec-label">Housing / Time Period:</span>
                    <span className="internships-payload-spec-val">7 Days Residential</span>
                  </div>
                  <div className="internships-payload-spec-item">
                    <span className="internships-payload-spec-label">Organizer:</span>
                    <span className="internships-payload-spec-val">International Institute of Internship</span>
                  </div>
                  <div className="internships-payload-spec-item">
                    <span className="internships-payload-spec-label">Contact Person / Details:</span>
                    <span className="internships-payload-spec-val">Dr. Avishek Kumar (+91 9472351693)</span>
                  </div>
                  <div className="internships-payload-spec-item internships-payload-full-row">
                    <span className="internships-payload-spec-label">Eligibility / Qualification:</span>
                    <span className="internships-payload-spec-val">
                      Under Graduate/PG & Pass Out Graduate/PG Any Discipline Student
                    </span>
                  </div>
                </div>
              </div>

              <div className="internships-payload-section-card">
                <div className="internships-payload-card-title">
                  <InternshipsIcons.FileText />
                  <span>Description & Opportunities</span>
                </div>

                <div className="internships-payload-desc-group">
                  <span className="internships-payload-subheading">Description:</span>
                  <div className="internships-payload-desc-box">
                    <p>
                      <strong>FUTURE YUVA 2050: Internship-cum-Skill Enhancement Programme (भविष्य पुराण से भविष्य निर्माण तक)</strong>
                    </p>
                    <p>
                      सात दिवसीय, आवासीय आध्यात्मिक+वैज्ञानिक दृष्टिकोण+ UGC मानदंडों पर आधारित — आध्यात्मिक दृष्टि • Artificial Intelligence • Future Skills • Youth Leadership
                    </p>
                    <p>
                      "पुराणों की दृष्टि से भविष्य को समझें, AI की शक्ति से भविष्य को गढ़ें।"
                    </p>
                    <p>
                      ~ कार्यक्रम दिनांक: 15 से 21 दिसंबर 2026<br />
                      ~ कार्यक्रम स्थल: हार्टफुलनेस प्रशिक्षण केंद्र, वलसाड़, गुजरात, भारत<br />
                      ~ पात्रता: अध्ययनरत/सफल स्नातक व स्नातकोत्तर विद्यार्थी/जिज्ञासु<br />
                      ~ क्रेडिट: 2 (60 घंटा) | सीट: 60
                    </p>
                    <p>
                      ऑनलाइन पंजीकरण लिंक:{" "}
                      <a href="http://www.iiinternship.in" target="_blank" rel="noreferrer" className="internships-payload-link">
                        www.iiinternship.in
                      </a>
                    </p>
                    <p>
                      Technical Support: Lernify Consultancy LLP, BCC Greens, Deva Road, Lucknow, UP<br />
                      संपर्क सूत्र: डॉ. अभिषेक कुमार (मुख्य प्रबंध निदेशक):{" "}
                      <a href="tel:+919472351693" className="internships-payload-link">+91 9472351693</a>, श्री तपस कुमार (मुख्य कार्यपालक अधिकारी):{" "}
                      <a href="tel:+919911439898" className="internships-payload-link">+91 9911439898</a>, श्री राजीव भारद्वाज (कार्यक्रम प्रबंधक):{" "}
                      <a href="tel:+919006726655" className="internships-payload-link">+91 9006726655</a><br />
                      सानिध्य व मार्गदर्शन: सौहार्द शिरोमणि संत डॉ. सौरभ जी महाराज, गोरखपुर, उत्तर प्रदेश
                    </p>
                    <p>
                      यह Internship-cum-Skill Enhancement Programme ज्ञान, कौशल, practical experience और सामाजिक उत्तरदायित्व के माध्यम से युवाओं को भविष्य पुराण से भविष्य निर्माण की दिशा में सक्षम बनाने पर केंद्रित है।
                    </p>
                  </div>
                </div>

                <div className="internships-payload-desc-group">
                  <span className="internships-payload-subheading">Facilities Provided:</span>
                  <div className="internships-payload-facility-box">
                    कार्यक्रम के अंतर्गत प्रतिभागियों को 7 दिनों तक सुरक्षित, स्वच्छ एवं सुखद वातावरण में रहने तथा पौष्टिक भोजन की समुचित व्यवस्था उपलब्ध कराई जाएगी। छात्र एवं छात्राओं के लिए अलग-अलग सुरक्षित एवं सुव्यवस्थित डॉर्मेटरी आवास की व्यवस्था होगी। साथ ही, अध्ययन, प्रशिक्षण एवं सामूहिक गतिविधियों के लिए आवश्यक अनुकूल वातावरण सुनिश्चित किया जाएगा।
                  </div>
                </div>

                <div className="internships-payload-desc-group">
                  <span className="internships-payload-subheading">Career Opportunities:</span>
                  <div className="internships-payload-facility-box">
                    इस इंटर्नशिप से युवाओं को आर्टिफ़िशियल इंटेलिजेंस (AI), मशीन लर्निंग, डेटा साइंस, डिजिटल टेक्नोलॉजी, सॉफ्टवेयर डेवलपमेंट, रिसर्च एवं इनोवेशन जैसे उभरते क्षेत्रों में करियर के अवसर प्राप्त होंगे। यह कार्यक्रम युवाओं की व्यावहारिक दक्षता, रोज़गार क्षमता, उद्यमिता एवं भविष्य की तकनीकी आवश्यकताओं के अनुरूप तैयारी को बढ़ावा देगा।
                  </div>
                </div>
              </div>

              <div className="internships-payload-section-card">
                <div className="internships-payload-card-title">
                  <InternshipsIcons.Sparkles />
                  <span>Curriculum, Tools & Skills</span>
                </div>
                <div className="internships-payload-curriculum-content">
                  <div className="internships-payload-curriculum-block">
                    <span className="internships-payload-subheading">Modules:</span>
                    <div>
                      <span className="internships-badge-module">AI</span>
                    </div>
                  </div>

                  <div className="internships-payload-curriculum-block">
                    <span className="internships-payload-subheading">Tools Required:</span>
                    <div className="internships-payload-plain-text">No tools listed</div>
                  </div>

                  <div className="internships-payload-curriculum-block">
                    <span className="internships-payload-subheading">Skills Imparted:</span>
                    <div>
                      <span className="internships-badge-skill">प्रतिभागियों के लिए कंप्यूटर का बेसिक ज्ञान होना अनिवार्य है।</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="internships-modal-footer">
              <button
                type="button"
                className="internships-btn-cancel"
                onClick={() => setIsDetailsModalOpen(false)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* CREATE NEW INTERNSHIP MODAL */}
      {isCreateModalOpen && (
        <div className="internships-modal-overlay" onClick={() => setIsCreateModalOpen(false)}>
          <div className="internships-modal-dialog" onClick={(e) => e.stopPropagation()}>
            <div className="internships-modal-header">
              <div>
                <h2 className="internships-modal-header-title">Super Admin: Create Running Internship</h2>
                <p className="internships-modal-header-subtitle">
                  Register and post a new running internship with complete cohort metadata and mentor assignment.
                </p>
              </div>
              <button className="internships-modal-close-btn" onClick={() => setIsCreateModalOpen(false)}>
                <InternshipsIcons.Close />
              </button>
            </div>

            <div className="internships-modal-body">
              {/* Basic Information */}
              <div className="internships-form-section">
                <div className="internships-form-section-header">
                  <InternshipsIcons.Briefcase />
                  <span className="internships-form-section-title">Basic Information</span>
                </div>
                <div className="internships-form-grid">
                  <div className="internships-field-group">
                    <label>INTERNSHIP TITLE *</label>
                    <div className="internships-input-box">
                      <InternshipsIcons.Briefcase />
                      <input type="text" placeholder="E.g. Software Engineering Practice (Full-Stack)" />
                    </div>
                  </div>

                  <div className="internships-field-group">
                    <label>COMPANY / ORGANIZATION NAME *</label>
                    <div className="internships-input-box">
                      <InternshipsIcons.Building />
                      <input type="text" placeholder="E.g. IIIT Center of Excellence" />
                    </div>
                  </div>

                  <div className="internships-field-group">
                    <label>MODE *</label>
                    <div className="internships-select-box">
                      <select defaultValue="Offline (In-Person)">
                        <option>Offline (In-Person)</option>
                        <option>Online (Virtual)</option>
                        <option>Hybrid</option>
                      </select>
                    </div>
                  </div>

                  <div className="internships-field-group">
                    <label>LOCATION *</label>
                    <div className="internships-input-box">
                      <InternshipsIcons.MapPin />
                      <input type="text" placeholder="E.g. BCC Greens, Deva Road, Lucknow, Uttar Pradesh" />
                    </div>
                  </div>

                  <div className="internships-field-group">
                    <label>DURATION *</label>
                    <div className="internships-input-box">
                      <InternshipsIcons.Clock />
                      <input type="text" placeholder="E.g. 3 Months" />
                    </div>
                  </div>

                  <div className="internships-field-group">
                    <label>PROGRAM START DATE</label>
                    <div className="internships-input-box">
                      <InternshipsIcons.Calendar />
                      <input type="text" placeholder="Pick a date" />
                    </div>
                  </div>

                  <div className="internships-field-group internships-col-single">
                    <label>LAST DATE TO APPLY</label>
                    <div className="internships-input-box">
                      <InternshipsIcons.Calendar />
                      <input type="text" placeholder="Pick a date" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Instructor & Mentor Assignment */}
              <div className="internships-form-section">
                <div className="internships-form-section-header">
                  <InternshipsIcons.Users />
                  <span className="internships-form-section-title">Instructor & Mentor Assignment</span>
                </div>
                <div className="internships-form-grid internships-form-grid-full">
                  <div className="internships-field-group">
                    <label>ASSIGNED INSTRUCTOR / MENTOR</label>
                    <div className="internships-select-box">
                      <select defaultValue="">
                        <option value="" disabled>Select an instructor</option>
                        <option value="1">Dr. Rajesh Verma</option>
                        <option value="2">Senior Instructor</option>
                      </select>
                    </div>
                    <span className="internships-field-guide">
                      Assigning an instructor routes the internship to their review panel for approval or tracking.
                    </span>
                  </div>
                </div>
              </div>

              {/* Program & Academic Metadata */}
              <div className="internships-form-section">
                <div className="internships-form-section-header">
                  <InternshipsIcons.Layers />
                  <span className="internships-form-section-title">Program & Academic Metadata</span>
                </div>
                <div className="internships-form-grid">
                  <div className="internships-field-group">
                    <label>DEPARTMENT</label>
                    <div className="internships-input-box">
                      <InternshipsIcons.Building />
                      <input type="text" placeholder="E.g. Engineering" />
                    </div>
                  </div>

                  <div className="internships-field-group">
                    <label>CATEGORY *</label>
                    <div className="internships-select-box">
                      <select defaultValue="Running Program">
                        <option>Running Program</option>
                        <option>Incubation</option>
                      </select>
                    </div>
                  </div>

                  <div className="internships-field-group">
                    <label>TIME PERIOD / HOUSING</label>
                    <div className="internships-input-box">
                      <InternshipsIcons.Clock />
                      <input type="text" placeholder="E.g. Non-Residential or Residential" />
                    </div>
                  </div>

                  <div className="internships-field-group">
                    <label>ACADEMIC CREDITS</label>
                    <div className="internships-input-box">
                      <input type="text" placeholder="E.g. 4 Credits" />
                    </div>
                  </div>

                  <div className="internships-field-group">
                    <label>ORGANIZER NAME</label>
                    <div className="internships-input-box">
                      <InternshipsIcons.Building />
                      <input type="text" placeholder="E.g. IIIT Center of Excellence" />
                    </div>
                  </div>

                  <div className="internships-field-group">
                    <label>CONTACT DETAILS</label>
                    <div className="internships-input-box">
                      <input type="text" placeholder="E.g. Mr. Rajan Kumar (+91 9472351693)" />
                    </div>
                  </div>

                  <div className="internships-field-group internships-col-span-2">
                    <label>ELIGIBILITY / QUALIFICATION REQUIRED</label>
                    <div className="internships-input-box">
                      <input type="text" placeholder="E.g. B.Tech/M.Tech (CS/IT) 3rd/4th Year" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Compensation & Pricing */}
              <div className="internships-form-section">
                <div className="internships-form-section-header">
                  <InternshipsIcons.DollarSign />
                  <span className="internships-form-section-title">Compensation & Pricing</span>
                </div>
                <div className="internships-form-grid">
                  <div className="internships-field-group">
                    <label>INTERNSHIP TYPE *</label>
                    <div className="internships-select-box">
                      <select defaultValue="Free (No fees)">
                        <option>Free (No fees)</option>
                        <option>Paid</option>
                        <option>Stipend</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>

              {/* Details, Facilities & Career Opportunities */}
              <div className="internships-form-section">
                <div className="internships-form-section-header">
                  <InternshipsIcons.FileText />
                  <span className="internships-form-section-title">Details, Facilities & Career Opportunities</span>
                </div>

                <div className="internships-editor-wrapper">
                  <label className="internships-editor-label">DESCRIPTION *</label>
                  <div className="internships-editor-box">
                    <div className="internships-editor-toolbar">
                      <div className="internships-editor-toolbar-group">
                        <button type="button" className="internships-editor-btn"><b>B</b></button>
                        <button type="button" className="internships-editor-btn"><i>I</i></button>
                        <button type="button" className="internships-editor-btn">H₂</button>
                        <button type="button" className="internships-editor-btn">H₃</button>
                        <button type="button" className="internships-editor-btn">P</button>
                      </div>
                      <div className="internships-editor-toolbar-separator" />
                      <div className="internships-editor-toolbar-group">
                        <button type="button" className="internships-editor-btn">≡</button>
                        <button type="button" className="internships-editor-btn">1≡</button>
                        <button type="button" className="internships-editor-btn">❝</button>
                        <button type="button" className="internships-editor-btn">&lt;&gt;</button>
                        <button type="button" className="internships-editor-btn">—</button>
                      </div>
                      <div className="internships-editor-toolbar-separator" />
                      <div className="internships-editor-toolbar-group">
                        <button type="button" className="internships-editor-btn">🔗</button>
                        <button type="button" className="internships-editor-btn">Tx</button>
                        <button type="button" className="internships-editor-btn">↺</button>
                        <button type="button" className="internships-editor-btn">↻</button>
                      </div>
                      <div className="internships-editor-toolbar-right">
                        <button type="button" className="internships-editor-html-btn">&lt;&gt; HTML</button>
                      </div>
                    </div>
                    <textarea className="internships-editor-textarea" placeholder="Write your article..."></textarea>
                    <div className="internships-editor-tip">
                      Tip: Use toolbar or keyboard shortcuts — Ctrl+B Bold, Ctrl+I Italic. Switch to HTML view for raw editing.
                    </div>
                  </div>
                </div>

                <div className="internships-form-grid internships-form-grid-full" style={{ marginTop: 16 }}>
                  <div className="internships-field-group">
                    <label>PROJECT FOCUS</label>
                    <div className="internships-input-box">
                      <InternshipsIcons.Sparkles />
                      <input type="text" placeholder="E.g. Real-time Telemetry Dashboard" />
                    </div>
                  </div>

                  <div className="internships-field-group">
                    <label>FACILITIES PROVIDED</label>
                    <div className="internships-input-box">
                      <input type="text" placeholder="E.g. Access to high-performance computing lab, library subscription, and lunch coupons" />
                    </div>
                  </div>

                  <div className="internships-field-group">
                    <label>CAREER OPPORTUNITIES</label>
                    <div className="internships-input-box">
                      <input type="text" placeholder="E.g. Pre-placement interview (PPI) opportunity with partner tech firms" />
                    </div>
                  </div>

                  <div className="internships-field-group">
                    <label>ONBOARDING INSTRUCTIONS</label>
                    <div className="internships-input-box">
                      <input type="text" placeholder="Setup instructions, link to onboarding portal, pre-requisites..." />
                    </div>
                  </div>
                </div>
              </div>

              {/* Curriculum, Tools & Skills */}
              <div className="internships-form-section">
                <div className="internships-form-section-header">
                  <InternshipsIcons.Sparkles />
                  <span className="internships-form-section-title">Curriculum, Tools & Skills</span>
                </div>

                <div className="internships-form-grid internships-form-grid-full">
                  <div className="internships-field-group">
                    <label>MODULES</label>
                    <div className="internships-input-box">
                      <input type="text" placeholder="E.g. Microservices Architecture, Docker & Kubernetes, CI/CD Setup" />
                    </div>
                    <span className="internships-field-guide">Press Enter or Comma after typing each module.</span>
                  </div>

                  <div className="internships-field-group">
                    <label>TOOLS USED</label>
                    <div className="internships-input-box">
                      <input type="text" placeholder="E.g. Next.js, Go, Docker, Kubernetes, Prometheus" />
                    </div>
                    <span className="internships-field-guide">Press Enter or Comma after typing each tool.</span>
                  </div>

                  <div className="internships-field-group">
                    <label>SKILLS REQUIRED / LEARNED</label>
                    <div className="internships-input-box">
                      <input type="text" placeholder="E.g. TypeScript, Golang, Docker basics" />
                    </div>
                    <span className="internships-field-guide">Press Enter or Comma after typing each skill.</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="internships-modal-footer">
              <button className="internships-btn-cancel" onClick={() => setIsCreateModalOpen(false)}>
                Cancel
              </button>
              <button className="internships-btn-submit" onClick={() => setIsCreateModalOpen(false)}>
                Create Running Internship
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Internships;