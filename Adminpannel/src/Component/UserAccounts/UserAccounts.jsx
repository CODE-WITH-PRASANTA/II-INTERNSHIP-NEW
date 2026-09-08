import React, { useState, useMemo, useEffect } from "react";
import "./UserAccounts.css";

const initialUsers = [
  {
    id: 1,
    name: "RISHABH TOMAR",
    email: "rishabhtomar112233@gmail.com",
    mobile: "—",
    role: "Instructor",
    badgeRole: "INSTRUCTOR",
    profileStatus: "Not Created",
    active: true,
  },
  {
    id: 2,
    name: "SOHIT",
    email: "sohityadav277@gmail.com",
    mobile: "9454987929",
    role: "Instructor",
    badgeRole: "INSTRUCTOR",
    profileStatus: "Completed",
    active: true,
  },
  {
    id: 3,
    name: "BHANU PRAKASH",
    email: "prakashbhanu198416@gmail.com",
    mobile: "—",
    role: "Recruit User",
    badgeRole: "RECRUIT USER",
    profileStatus: "Not Created",
    active: true,
  },
  {
    id: 4,
    name: "DHEERAJ Kumar Srivastava",
    email: "dheerajsri_28@hotmail.com",
    mobile: "—",
    role: "Instructor",
    badgeRole: "INSTRUCTOR",
    profileStatus: "Not Created",
    active: true,
  },
  {
    id: 5,
    name: "Aaliya Gupta",
    email: "aaliyasewayojan@gmail.com",
    mobile: "—",
    role: "Recruit User",
    badgeRole: "RECRUIT USER",
    profileStatus: "Not Created",
    active: true,
  },
  {
    id: 6,
    name: "Amit Tyagi",
    email: "tyagi.amit320@gmail.com",
    mobile: "—",
    role: "Recruit User",
    badgeRole: "RECRUIT USER",
    profileStatus: "Not Created",
    active: true,
  },
  {
    id: 7,
    name: "VIVEK KUMAR",
    email: "vivekk8542@gmail.com",
    mobile: "8542832019",
    role: "Student",
    badgeRole: "STUDENT",
    profileStatus: "Completed",
    active: true,
  },
  {
    id: 8,
    name: "Sandeep Bablani",
    email: "sandeepbablani01@gmail.com",
    mobile: "8299434644",
    role: "Student",
    badgeRole: "STUDENT",
    profileStatus: "Completed",
    active: true,
  },
  {
    id: 9,
    name: "Ramesh Kumar Bagee",
    email: "rameshkumarbagee@gmail.com",
    mobile: "—",
    role: "Instructor",
    badgeRole: "INSTRUCTOR",
    profileStatus: "Not Created",
    active: true,
  },
  {
    id: 10,
    name: "Anita Bharti",
    email: "bhartianita9528@gmail.com",
    mobile: "—",
    role: "Recruit User",
    badgeRole: "RECRUIT USER",
    profileStatus: "Not Created",
    active: true,
  },
];

const ROLE_OPTIONS = [
  "Student",
  "Instructor",
  "Immersion User",
  "Job Applicant User",
  "Super Admin",
];

const UserAccounts = () => {
  const [users, setUsers] = useState(initialUsers);
  const [searchQuery, setSearchQuery] = useState("");
  const [showFilters, setShowFilters] = useState(false);
  const [selectedRoles, setSelectedRoles] = useState([]);

  // Pagination State
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);

  // Active Dropdown state (row ID)
  const [openDropdownId, setOpenDropdownId] = useState(null);

  // Modals state
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const [editingUser, setEditingUser] = useState(null);

  // Create form state
  const [createForm, setCreateForm] = useState({
    email: "",
    mobile: "",
    name: "",
    role: "Student",
    password: "Temp!w59c6jfiA1",
    confirmPassword: "Temp!w59c6jfiA1",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [copied, setCopied] = useState(false);

  // Notification Toast State
  const [toastMessage, setToastMessage] = useState("");

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage("");
    }, 3200);
  };

  // Close dropdown on outside click
  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (!e.target.closest(".userAccounts-actionMenuContainer")) {
        setOpenDropdownId(null);
      }
    };
    document.addEventListener("click", handleOutsideClick);
    return () => document.removeEventListener("click", handleOutsideClick);
  }, []);

  // Filter roles handler
  const handleRoleCheckboxChange = (role) => {
    setSelectedRoles((prev) =>
      prev.includes(role) ? prev.filter((r) => r !== role) : [...prev, role]
    );
    setCurrentPage(1);
  };

  // Toggle user active status
  const handleToggleActive = (id) => {
    setUsers((prev) =>
      prev.map((u) => (u.id === id ? { ...u, active: !u.active } : u))
    );
  };

  // Delete user
  const handleDeleteUser = (id) => {
    if (window.confirm("Are you sure you want to delete this user?")) {
      setUsers((prev) => prev.filter((u) => u.id !== id));
      setOpenDropdownId(null);
      showToast("User account deleted successfully.");
    }
  };

  // Open edit modal
  const handleOpenEditModal = (user) => {
    setEditingUser({ ...user });
    setIsEditModalOpen(true);
    setOpenDropdownId(null);
  };

  // Save changes from Edit Modal
  const handleSaveEdit = (e) => {
    e.preventDefault();
    setUsers((prev) =>
      prev.map((u) =>
        u.id === editingUser.id
          ? {
              ...u,
              name: editingUser.name,
              role: editingUser.role,
              badgeRole: editingUser.role.toUpperCase(),
            }
          : u
      )
    );
    setIsEditModalOpen(false);
    showToast("User updated successfully.");
  };

  // Create User submit
  const handleCreateUser = (e) => {
    e.preventDefault();
    if (!createForm.email || !createForm.name) return;

    const newUser = {
      id: Date.now(),
      name: createForm.name,
      email: createForm.email,
      mobile: createForm.mobile || "—",
      role: createForm.role,
      badgeRole: createForm.role.toUpperCase(),
      profileStatus: "Not Created",
      active: true,
    };

    setUsers([newUser, ...users]);
    setIsCreateModalOpen(false);
    setCreateForm({
      email: "",
      mobile: "",
      name: "",
      role: "Student",
      password: "Temp!w59c6jfiA1",
      confirmPassword: "Temp!w59c6jfiA1",
    });
    showToast("New user profile registered.");
  };

  const copyPasswordToClipboard = () => {
    navigator.clipboard.writeText(createForm.password);
    setCopied(true);
    setTimeout(() => setCopied(false), 1800);
  };

  // Single User Reminder via 3-dots menu
  const handleSendSingleReminder = (user) => {
    setOpenDropdownId(null);
    showToast(`Reminder email sent to ${user.name} (${user.email})`);
  };

  // Bulk Reminder handler
  const handleSendBulkReminder = () => {
    const incompleteUsers = users.filter((u) => u.profileStatus !== "Completed");
    if (incompleteUsers.length === 0) {
      showToast("All user profiles are already completed.");
      return;
    }
    showToast(`Reminder sent to ${incompleteUsers.length} incomplete profile(s).`);
  };

  // Export to Excel / CSV handler
  const handleExportExcel = () => {
    if (filteredUsers.length === 0) {
      showToast("No data to export.");
      return;
    }

    const headers = [
      "S.No",
      "Name",
      "Email Address",
      "Mobile Number",
      "Role",
      "Profile Status",
      "Active Status",
    ];

    const csvRows = [headers.join(",")];

    filteredUsers.forEach((u, idx) => {
      const row = [
        idx + 1,
        `"${u.name.replace(/"/g, '""')}"`,
        `"${u.email.replace(/"/g, '""')}"`,
        `"${u.mobile.replace(/"/g, '""')}"`,
        `"${u.badgeRole}"`,
        `"${u.profileStatus}"`,
        u.active ? "ACTIVE" : "INACTIVE",
      ];
      csvRows.push(row.join(","));
    });

    const blob = new Blob([csvRows.join("\n")], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.setAttribute("href", url);
    link.setAttribute("download", `user_accounts_directory_${Date.now()}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    showToast("User accounts exported to CSV successfully.");
  };

  // Filtering Logic
  const filteredUsers = useMemo(() => {
    return users.filter((u) => {
      const matchesSearch =
        u.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        u.email.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesRole =
        selectedRoles.length === 0 ||
        selectedRoles.some(
          (role) => u.role.toLowerCase() === role.toLowerCase()
        );

      return matchesSearch && matchesRole;
    });
  }, [users, searchQuery, selectedRoles]);

  // Pagination Logic
  const totalPages = Math.ceil(filteredUsers.length / rowsPerPage) || 1;
  const paginatedUsers = useMemo(() => {
    const start = (currentPage - 1) * rowsPerPage;
    return filteredUsers.slice(start, start + rowsPerPage);
  }, [filteredUsers, currentPage, rowsPerPage]);

  return (
    <div className="userAccounts-container">
      {/* Toast feedback popup */}
      {toastMessage && (
        <div className="userAccounts-toastNotification">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
            <polyline points="22 4 12 14.01 9 11.01" />
          </svg>
          {toastMessage}
        </div>
      )}

      {/* Top Header */}
      <header className="userAccounts-pageHeader">
        <div className="userAccounts-headerLeft">
          <h1 className="userAccounts-mainTitle">User Accounts Directory</h1>
          <p className="userAccounts-subTitle">
            Create new database user profiles, toggle active status, and modify organizational role permissions.
          </p>
        </div>
        <div className="userAccounts-headerRight">
          <button
            className="userAccounts-btnOutlineOrange"
            onClick={handleSendBulkReminder}
          >
            <svg
              className="userAccounts-iconMail"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <rect x="2" y="4" width="20" height="16" rx="2" />
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
            </svg>
            Send Reminder to Incomplete Profiles
          </button>
          <button
            className="userAccounts-btnPrimaryGreen"
            onClick={() => setIsCreateModalOpen(true)}
          >
            <span className="userAccounts-plusIcon">⊕</span>
            Add New User
          </button>
        </div>
      </header>

      {/* Control Bar: Filter Toggle, Search, Actions */}
      <div className="userAccounts-controlsBar">
        <div className="userAccounts-controlsLeft">
          <button
            className={`userAccounts-btnFilterToggle ${showFilters ? "userAccounts-active" : ""}`}
            onClick={() => setShowFilters(!showFilters)}
          >
            <svg
              className="userAccounts-filterIcon"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" />
            </svg>
            {showFilters ? "Hide Filters" : "Show Filters"}
          </button>

          <div className="userAccounts-searchWrapper">
            <svg
              className="userAccounts-searchIcon"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <circle cx="11" cy="11" r="8" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
            <input
              type="text"
              placeholder="Search by name or email"
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setCurrentPage(1);
              }}
            />
          </div>
        </div>

        <div className="userAccounts-controlsRight">
          <button
            className="userAccounts-btnSecondaryRemind"
            onClick={handleSendBulkReminder}
          >
            <svg
              className="userAccounts-iconMail"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <rect x="2" y="4" width="20" height="16" rx="2" />
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
            </svg>
            Remind Incomplete
          </button>
          <button
            className="userAccounts-btnSecondaryExport"
            onClick={handleExportExcel}
          >
            <svg
              className="userAccounts-iconDownload"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
            Export Excel
          </button>
          <button className="userAccounts-btnSecondaryColumns">
            <svg
              className="userAccounts-iconChevron"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <polyline points="6 9 12 15 18 9" />
            </svg>
            View Columns
          </button>
        </div>
      </div>

      {/* Main Layout Area */}
      <div className="userAccounts-contentLayout">
        {/* Sidebar Filters */}
        {showFilters && (
          <aside className="userAccounts-filterSidebar">
            <h3 className="userAccounts-filterTitle">Role</h3>
            <div className="userAccounts-filterCheckboxList">
              {ROLE_OPTIONS.map((role) => (
                <label key={role} className="userAccounts-filterCheckboxItem">
                  <input
                    type="checkbox"
                    checked={selectedRoles.includes(role)}
                    onChange={() => handleRoleCheckboxChange(role)}
                  />
                  <span className="userAccounts-checkboxCustom"></span>
                  <span className="userAccounts-checkboxLabel">{role}</span>
                </label>
              ))}
            </div>
          </aside>
        )}

        {/* Data Table */}
        <div className="userAccounts-tableWrapper">
          <table className="userAccounts-table">
            <thead>
              <tr>
                <th className="userAccounts-colSno">S. NO.</th>
                <th className="userAccounts-colName">NAME</th>
                <th className="userAccounts-colEmail">EMAIL ADDRESS</th>
                <th className="userAccounts-colMobile">MOBILE NUMBER</th>
                <th className="userAccounts-colRole">ROLE</th>
                <th className="userAccounts-colProfile">PROFILE STATUS</th>
                <th className="userAccounts-colActive">ACTIVE STATUS</th>
                <th className="userAccounts-colActions">ACTIONS</th>
              </tr>
            </thead>
            <tbody>
              {paginatedUsers.length > 0 ? (
                paginatedUsers.map((user, index) => {
                  const serialNo = (currentPage - 1) * rowsPerPage + index + 1;
                  return (
                    <tr key={user.id}>
                      <td className="userAccounts-colSnoData">{serialNo}</td>
                      <td className="userAccounts-colNameData">
                        <span className="userAccounts-userNameText">{user.name}</span>
                      </td>
                      <td className="userAccounts-colEmailData">{user.email}</td>
                      <td className="userAccounts-colMobileData">{user.mobile}</td>
                      <td>
                        <span
                          className={`userAccounts-badge userAccounts-role-${user.badgeRole
                            ?.toLowerCase()
                            .replace(/\s+/g, "-")}`}
                        >
                          {user.badgeRole}
                        </span>
                      </td>
                      <td>
                        <span
                          className={`userAccounts-badge userAccounts-status-${user.profileStatus
                            .toLowerCase()
                            .replace(/\s+/g, "-")}`}
                        >
                          {user.profileStatus}
                        </span>
                      </td>
                      <td>
                        <div className="userAccounts-activeSwitchContainer">
                          <label className="userAccounts-toggleSwitch">
                            <input
                              type="checkbox"
                              checked={user.active}
                              onChange={() => handleToggleActive(user.id)}
                            />
                            <span className="userAccounts-slider"></span>
                          </label>
                          <span
                            className={`userAccounts-activeLabel ${
                              user.active ? "userAccounts-textActive" : "userAccounts-textInactive"
                            }`}
                          >
                            {user.active ? "ACTIVE" : "INACTIVE"}
                          </span>
                        </div>
                      </td>
                      <td className="userAccounts-colActionsData">
                        <div className="userAccounts-actionMenuContainer">
                          <button
                            className="userAccounts-btnDots"
                            onClick={(e) => {
                              e.stopPropagation();
                              setOpenDropdownId(
                                openDropdownId === user.id ? null : user.id
                              );
                            }}
                          >
                            ⋮
                          </button>

                          {openDropdownId === user.id && (
                            <div className="userAccounts-actionsDropdown">
                              <button
                                className="userAccounts-dropdownItem userAccounts-edit"
                                onClick={() => handleOpenEditModal(user)}
                              >
                                <svg
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth="2"
                                >
                                  <path d="M12 20h9" />
                                  <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
                                </svg>
                                Edit Details
                              </button>
                              <button
                                className="userAccounts-dropdownItem userAccounts-remind"
                                onClick={() => handleSendSingleReminder(user)}
                              >
                                <svg
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth="2"
                                >
                                  <rect x="2" y="4" width="20" height="16" rx="2" />
                                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                                </svg>
                                Send Reminder
                              </button>
                              <button
                                className="userAccounts-dropdownItem userAccounts-delete"
                                onClick={() => handleDeleteUser(user.id)}
                              >
                                <svg
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth="2"
                                >
                                  <polyline points="3 6 5 6 21 6" />
                                  <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                                </svg>
                                Delete User
                              </button>
                            </div>
                          )}
                        </div>
                      </td>
                    </tr>
                  );
                })
              ) : (
                <tr>
                  <td colSpan="8" className="userAccounts-noDataCell">
                    No user accounts found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Pagination Footer */}
      <footer className="userAccounts-paginationBar">
        <div className="userAccounts-rowsPerPage">
          <span>Rows per page</span>
          <div className="userAccounts-selectWrapper">
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
        </div>

        <div className="userAccounts-paginationPages">
          <span>
            Page {currentPage} of {totalPages}
          </span>
          <div className="userAccounts-pageArrows">
            <button
              disabled={currentPage === 1}
              onClick={() => setCurrentPage(1)}
              title="First Page"
            >
              «
            </button>
            <button
              disabled={currentPage === 1}
              onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
              title="Previous Page"
            >
              ‹
            </button>
            <button
              disabled={currentPage === totalPages}
              onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
              title="Next Page"
            >
              ›
            </button>
            <button
              disabled={currentPage === totalPages}
              onClick={() => setCurrentPage(totalPages)}
              title="Last Page"
            >
              »
            </button>
          </div>
        </div>
      </footer>

      {/* Edit User Modal */}
      {isEditModalOpen && editingUser && (
        <div
          className="userAccounts-modalOverlay"
          onClick={() => setIsEditModalOpen(false)}
        >
          <div
            className="userAccounts-modalCard userAccounts-editModal"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="userAccounts-modalHeader">
              <div>
                <h2 className="userAccounts-modalTitle">Edit User Details</h2>
                <p className="userAccounts-modalSubtitle">
                  Update profile name and role assignments.
                </p>
              </div>
              <button
                className="userAccounts-btnModalClose"
                onClick={() => setIsEditModalOpen(false)}
              >
                ✕
              </button>
            </div>

            <form onSubmit={handleSaveEdit} className="userAccounts-modalForm">
              <div className="userAccounts-formGroup">
                <label>ACCOUNT EMAIL</label>
                <input
                  type="text"
                  value={editingUser.email}
                  disabled
                  className="userAccounts-inputDisabled"
                />
              </div>

              <div className="userAccounts-formGroup">
                <label>DISPLAY NAME</label>
                <input
                  type="text"
                  value={editingUser.name}
                  onChange={(e) =>
                    setEditingUser({ ...editingUser, name: e.target.value })
                  }
                  required
                />
              </div>

              <div className="userAccounts-formGroup">
                <label>ASSIGNED ROLE</label>
                <div className="userAccounts-selectContainer">
                  <select
                    value={editingUser.role}
                    onChange={(e) =>
                      setEditingUser({ ...editingUser, role: e.target.value })
                    }
                  >
                    {ROLE_OPTIONS.map((role) => (
                      <option key={role} value={role}>
                        {role}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <button type="submit" className="userAccounts-btnSubmitGreen">
                Save Changes
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Create User Modal */}
      {isCreateModalOpen && (
        <div
          className="userAccounts-modalOverlay"
          onClick={() => setIsCreateModalOpen(false)}
        >
          <div
            className="userAccounts-modalCard userAccounts-createModal"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="userAccounts-modalHeader">
              <div>
                <h2 className="userAccounts-modalTitle">Admin: Create User Account</h2>
                <p className="userAccounts-modalSubtitle">
                  Manually registers a new account on the database.
                </p>
              </div>
              <button
                className="userAccounts-btnModalClose"
                onClick={() => setIsCreateModalOpen(false)}
              >
                ✕
              </button>
            </div>

            <form onSubmit={handleCreateUser} className="userAccounts-modalForm">
              <div className="userAccounts-formGroup">
                <label>EMAIL ADDRESS</label>
                <input
                  type="email"
                  placeholder="user@example.com"
                  value={createForm.email}
                  onChange={(e) =>
                    setCreateForm({ ...createForm, email: e.target.value })
                  }
                  required
                />
              </div>

              <div className="userAccounts-formGroup">
                <label>MOBILE NUMBER*</label>
                <input
                  type="text"
                  placeholder="Enter 10-digit mobile number"
                  value={createForm.mobile}
                  onChange={(e) =>
                    setCreateForm({ ...createForm, mobile: e.target.value })
                  }
                  required
                />
              </div>

              <div className="userAccounts-formGroup">
                <label>DISPLAY NAME</label>
                <input
                  type="text"
                  placeholder="John Doe"
                  value={createForm.name}
                  onChange={(e) =>
                    setCreateForm({ ...createForm, name: e.target.value })
                  }
                  required
                />
              </div>

              <div className="userAccounts-formGroup">
                <label>ASSIGNED ROLE</label>
                <div className="userAccounts-selectContainer">
                  <select
                    value={createForm.role}
                    onChange={(e) =>
                      setCreateForm({ ...createForm, role: e.target.value })
                    }
                  >
                    {ROLE_OPTIONS.map((role) => (
                      <option key={role} value={role}>
                        {role}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Generated Password Box */}
              <div className="userAccounts-autoGenPasswordBox">
                <div className="userAccounts-passwordInfo">
                  <span className="userAccounts-keyIcon">🔑</span>
                  <span className="userAccounts-passwordLabel">
                    Auto-generated Password:
                  </span>
                  <span className="userAccounts-passwordToken">
                    {createForm.password}
                  </span>
                </div>
                <button
                  type="button"
                  className="userAccounts-btnCopy"
                  title="Copy password"
                  onClick={copyPasswordToClipboard}
                >
                  {copied ? (
                    <span className="userAccounts-copiedText">Copied!</span>
                  ) : (
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
                    </svg>
                  )}
                </button>
              </div>

              <div className="userAccounts-formGroup">
                <label>PASSWORD</label>
                <div className="userAccounts-inputWithIcon">
                  <input
                    type={showPassword ? "text" : "password"}
                    value={createForm.password}
                    onChange={(e) =>
                      setCreateForm({
                        ...createForm,
                        password: e.target.value,
                      })
                    }
                    required
                  />
                  <button
                    type="button"
                    className="userAccounts-eyeIconBtn"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8z" />
                      <circle cx="12" cy="12" r="3" />
                    </svg>
                  </button>
                </div>
              </div>

              <div className="userAccounts-formGroup">
                <label>CONFIRM PASSWORD</label>
                <div className="userAccounts-inputWithIcon">
                  <input
                    type={showPassword ? "text" : "password"}
                    value={createForm.confirmPassword}
                    onChange={(e) =>
                      setCreateForm({
                        ...createForm,
                        confirmPassword: e.target.value,
                      })
                    }
                    required
                  />
                  <button
                    type="button"
                    className="userAccounts-eyeIconBtn"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8z" />
                      <circle cx="12" cy="12" r="3" />
                    </svg>
                  </button>
                </div>
              </div>

              <button type="submit" className="userAccounts-btnSubmitGreen">
                Register User
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserAccounts;