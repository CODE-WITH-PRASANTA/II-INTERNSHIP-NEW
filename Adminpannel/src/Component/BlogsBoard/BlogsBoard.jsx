import React, { useState, useRef } from 'react';
import { 
  FiHome, FiFolder, FiFileText, FiPlus, FiSearch, FiArrowLeft, 
  FiImage, FiUpload, FiMoreVertical, FiEdit2, FiEye, FiTrash2,
  FiBold, FiItalic, FiList, FiMessageSquare, FiCode, FiMinus, FiLink, 
  FiRotateCcw, FiRotateCw
} from 'react-icons/fi';
import './BlogsBoard.css';

// Initial Dummy Data
const initialBlogs = [
  {
    id: '1',
    title: 'Exciting new updates on platform onboarding',
    category: 'News',
    author: 'Coordinator Name',
    authorRole: 'Chief Admin',
    authorEmail: 'admin@iiinternship.com',
    publishedDate: '2026-09-01',
    location: 'Bangalore, India',
    banner: null,
    content: '<p>We are thrilled to announce major enhancements to our platform onboarding process...</p>'
  },
  {
    id: '2',
    title: 'Top 10 Career Advice for Fresh Graduates in 2026',
    category: 'Guide',
    author: 'Sarah Jenkins',
    authorRole: 'Career Advisor',
    authorEmail: 'sarah.j@example.com',
    publishedDate: '2026-08-28',
    location: 'Delhi, India',
    banner: null,
    content: '<p>Navigating the job market after graduation requires a strategic approach...</p>'
  }
];

const BlogsBoard = () => {
  const [blogs, setBlogs] = useState(initialBlogs);
  const [currentView, setCurrentView] = useState('board'); // 'board' | 'compose' | 'view'
  const [searchQuery, setSearchQuery] = useState('');
  const [activeDropdownId, setActiveDropdownId] = useState(null);
  const [selectedBlog, setSelectedBlog] = useState(null);
  
  const fileInputRef = useRef(null);

  const [formData, setFormData] = useState({
    id: '',
    title: '',
    category: '',
    publishedDate: '',
    content: '',
    location: '',
    authorName: '',
    authorRole: '',
    authorEmail: '',
    bannerPreview: null
  });

  const filteredBlogs = blogs.filter((blog) => 
    blog.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    blog.author.toLowerCase().includes(searchQuery.toLowerCase()) ||
    blog.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const toggleDropdown = (id, e) => {
    e.stopPropagation();
    setActiveDropdownId(activeDropdownId === id ? null : id);
  };

  const handleViewBlog = (blog) => {
    setSelectedBlog(blog);
    setCurrentView('view');
    setActiveDropdownId(null);
  };

  const handleEditBlog = (blog) => {
    setSelectedBlog(blog);
    setFormData({
      id: blog.id,
      title: blog.title,
      category: blog.category,
      publishedDate: blog.publishedDate,
      content: blog.content,
      location: blog.location || '',
      authorName: blog.author || '',
      authorRole: blog.authorRole || '',
      authorEmail: blog.authorEmail || '',
      bannerPreview: blog.banner || null
    });
    setCurrentView('compose');
    setActiveDropdownId(null);
  };

  const handleDeleteBlog = (id) => {
    if (window.confirm('Are you sure you want to delete this blog post?')) {
      setBlogs(blogs.filter((blog) => blog.id !== id));
      setActiveDropdownId(null);
    }
  };

  const handleOpenCompose = () => {
    setSelectedBlog(null);
    setFormData({
      id: '',
      title: '',
      category: '',
      publishedDate: new Date().toISOString().split('T')[0],
      content: '',
      location: '',
      authorName: '',
      authorRole: '',
      authorEmail: '',
      bannerPreview: null
    });
    setCurrentView('compose');
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleBannerUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData((prev) => ({ ...prev, bannerPreview: URL.createObjectURL(file) }));
    }
  };

  const handlePublishPost = (e) => {
    e.preventDefault();

    if (formData.id) {
      setBlogs(blogs.map((b) => b.id === formData.id ? {
        ...b,
        title: formData.title,
        category: formData.category,
        publishedDate: formData.publishedDate,
        content: formData.content,
        location: formData.location,
        author: formData.authorName,
        authorRole: formData.authorRole,
        authorEmail: formData.authorEmail,
        banner: formData.bannerPreview
      } : b));
    } else {
      const newPost = {
        id: Date.now().toString(),
        title: formData.title || 'Untitled Post',
        category: formData.category || 'General',
        publishedDate: formData.publishedDate || new Date().toISOString().split('T')[0],
        content: formData.content || '',
        location: formData.location || 'N/A',
        author: formData.authorName || 'Super Admin',
        authorRole: formData.authorRole || 'Chief Admin',
        authorEmail: formData.authorEmail || 'admin@iiinternship.com',
        banner: formData.bannerPreview
      };
      setBlogs([newPost, ...blogs]);
    }

    setCurrentView('board');
  };

  const handleEditorToolbarAction = (command, value = null) => {
    document.execCommand(command, false, value);
  };

  return (
    <div className="BlogsBoard-container" onClick={() => setActiveDropdownId(null)}>
      {currentView === 'board' && (
        <>
          <div className="BlogsBoard-breadcrumb">
            <span className="BlogsBoard-breadcrumb-item"><FiHome /> Home</span>
            <span className="BlogsBoard-breadcrumb-sep">&gt;</span>
            <span className="BlogsBoard-breadcrumb-item"><FiFolder /> Super Admin</span>
            <span className="BlogsBoard-breadcrumb-sep">&gt;</span>
            <span className="BlogsBoard-breadcrumb-item active"><FiFileText /> Blogs Board</span>
          </div>

          <div className="BlogsBoard-header">
            <div>
              <h1 className="BlogsBoard-title">Blogs & Articles Board</h1>
              <p className="BlogsBoard-subtitle">Manage news, stories, and educational articles.</p>
            </div>
            <button className="BlogsBoard-btn-primary" onClick={handleOpenCompose}>
              <FiPlus /> Write Blog Post
            </button>
          </div>

          <div className="BlogsBoard-search-bar">
            <FiSearch className="BlogsBoard-search-icon" />
            <input 
              type="text" 
              placeholder="Search by title, author or category" 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          <div className="BlogsBoard-table-wrapper">
            <table className="BlogsBoard-table">
              <thead>
                <tr>
                  <th>BLOG TITLE</th>
                  <th>CATEGORY</th>
                  <th>AUTHOR</th>
                  <th>PUBLISHED DATE</th>
                  <th style={{ width: '40px', textAlign: 'right' }}>ACTIONS</th>
                </tr>
              </thead>
              <tbody>
                {filteredBlogs.length > 0 ? (
                  filteredBlogs.map((blog) => (
                    <tr key={blog.id}>
                      <td className="BlogsBoard-td-title">{blog.title}</td>
                      <td><span className="BlogsBoard-badge">{blog.category}</span></td>
                      <td className="BlogsBoard-td-author">{blog.author}</td>
                      <td className="BlogsBoard-td-date">{blog.publishedDate}</td>
                      <td className="BlogsBoard-actions-cell" style={{ textAlign: 'right' }}>
                        <button className="BlogsBoard-action-btn" onClick={(e) => toggleDropdown(blog.id, e)}>
                          <FiMoreVertical />
                        </button>

                        {activeDropdownId === blog.id && (
                          <div className="BlogsBoard-dropdown">
                            <button onClick={() => handleViewBlog(blog)}><FiEye /> View Article</button>
                            <button onClick={() => handleEditBlog(blog)}><FiEdit2 /> Edit Article</button>
                            <button onClick={() => handleDeleteBlog(blog.id)} className="delete-btn"><FiTrash2 /> Delete</button>
                          </div>
                        )}
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="5" className="BlogsBoard-no-data">No posts found.</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </>
      )}

      {currentView === 'compose' && (
        <>
          <div className="BlogsBoard-breadcrumb">
            <span className="BlogsBoard-breadcrumb-item"><FiHome /> Home</span>
            <span className="BlogsBoard-breadcrumb-sep">&gt;</span>
            <span className="BlogsBoard-breadcrumb-item" onClick={() => setCurrentView('board')}>
              <FiFileText /> Blogs Board
            </span>
            <span className="BlogsBoard-breadcrumb-sep">&gt;</span>
            <span className="BlogsBoard-breadcrumb-item active">{formData.id ? 'Edit' : 'New'}</span>
          </div>

          <div className="BlogsBoard-header">
            <div>
              <h1 className="BlogsBoard-title">Compose Blog Post</h1>
              <p className="BlogsBoard-subtitle">Draft your article and upload a cover banner.</p>
            </div>
            <button className="BlogsBoard-btn-outline" onClick={() => setCurrentView('board')}>
              <FiArrowLeft /> Back to board
            </button>
          </div>

          <form onSubmit={handlePublishPost} className="BlogsBoard-card-form">
            <div className="BlogsBoard-form-section">
              <label className="BlogsBoard-field-label">Cover Banner Image</label>
              <div className="BlogsBoard-banner-upload-box">
                <div className="BlogsBoard-banner-preview">
                  {formData.bannerPreview ? (
                    <img src={formData.bannerPreview} alt="Cover Banner" />
                  ) : (
                    <FiImage className="placeholder-icon" />
                  )}
                </div>
                <div>
                  <input type="file" accept="image/*" ref={fileInputRef} style={{ display: 'none' }} onChange={handleBannerUpload} />
                  <button type="button" className="BlogsBoard-btn-upload" onClick={() => fileInputRef.current.click()}>
                    <FiUpload /> Upload Banner
                  </button>
                </div>
              </div>
            </div>

            <div className="BlogsBoard-form-group">
              <label className="BlogsBoard-field-label">BLOG TITLE</label>
              <input type="text" name="title" value={formData.title} onChange={handleInputChange} required />
            </div>

            <div className="BlogsBoard-form-grid">
              <div className="BlogsBoard-form-group">
                <label className="BlogsBoard-field-label">CATEGORY</label>
                <input type="text" name="category" value={formData.category} onChange={handleInputChange} required />
              </div>
              <div className="BlogsBoard-form-group">
                <label className="BlogsBoard-field-label">PUBLISH DATE</label>
                <input type="date" name="publishedDate" value={formData.publishedDate} onChange={handleInputChange} required />
              </div>
            </div>

            <div className="BlogsBoard-form-group">
              <label className="BlogsBoard-field-label">CONTENT</label>
              <div className="BlogsBoard-editor-container">
                <div className="BlogsBoard-editor-toolbar">
                  <button type="button" onClick={() => handleEditorToolbarAction('bold')}><FiBold /></button>
                  <button type="button" onClick={() => handleEditorToolbarAction('italic')}><FiItalic /></button>
                  <button type="button" onClick={() => handleEditorToolbarAction('insertUnorderedList')}><FiList /></button>
                  <button type="button" onClick={() => handleEditorToolbarAction('formatBlock', 'blockquote')}><FiMessageSquare /></button>
                  <button type="button" onClick={() => handleEditorToolbarAction('formatBlock', 'pre')}><FiCode /></button>
                  <button type="button" onClick={() => handleEditorToolbarAction('insertHorizontalRule')}><FiMinus /></button>
                  <button type="button" onClick={() => handleEditorToolbarAction('createLink', prompt('Enter URL:'))}><FiLink /></button>
                  <button type="button" onClick={() => handleEditorToolbarAction('undo')}><FiRotateCcw /></button>
                  <button type="button" onClick={() => handleEditorToolbarAction('redo')}><FiRotateCw /></button>
                </div>

                <div 
                  className="BlogsBoard-editor-content"
                  contentEditable
                  suppressContentEditableWarning
                  onInput={(e) => setFormData(prev => ({ ...prev, content: e.currentTarget.innerHTML }))}
                  dangerouslySetInnerHTML={{ __html: formData.content || '' }}
                />
              </div>
            </div>

            <div className="BlogsBoard-form-actions">
              <button type="button" className="BlogsBoard-btn-secondary" onClick={() => setCurrentView('board')}>Cancel</button>
              <button type="submit" className="BlogsBoard-btn-primary">Publish Post</button>
            </div>
          </form>
        </>
      )}
    </div>
  );
};

export default BlogsBoard;