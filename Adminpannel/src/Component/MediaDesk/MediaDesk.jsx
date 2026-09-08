import React, { useState } from 'react';
import { 
  FiHome, 
  FiFolder, 
  FiImage, 
  FiPlus, 
  FiEdit2, 
  FiTrash2, 
  FiCalendar, 
  FiExternalLink, 
  FiX, 
  FiUpload 
} from 'react-icons/fi';
import './MediaDesk.css';

// Initial Dummy Data matching reference screenshots
const initialPhotos = [
  {
    id: 'p1',
    title: 'DBMS Online',
    subtitle: 'Digital Bookkiping Management System',
    date: '8/4/2026',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&auto=format&fit=crop&q=80'
  }
];

const initialVideos = [
  {
    id: 'v1',
    title: 'Behind the Scenes at Bengaluru Hub',
    subtitle: 'A sneak peek into the daily operations and engineering challenges at our Tech Hub.',
    date: '7/5/2026',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    channelName: 'REO Speedwagon - Can\'t Fight This...',
    artist: 'RSpwagonVEVO'
  },
  {
    id: 'v2',
    title: 'Student Success Stories & Testimonials',
    subtitle: 'Graduates share their journey and experiences during the Summer cohort.',
    date: '7/1/2026',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    channelName: 'Fireplace Ambience - Cozy Fire for...',
    artist: 'Fireplace Atmosphere'
  },
  {
    id: 'v3',
    title: 'Portal Walkthrough & Orientation',
    subtitle: 'Orientation video for incoming students explaining how to register and enroll.',
    date: '6/26/2026',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    channelName: 'Rick Astley - Never Gonna Give You...',
    artist: 'Rick Astley'
  }
];

const initialClippings = [
  {
    id: 'c1',
    category: 'INTERNATIONAL INSTITUTE OF INTERNSHIP',
    title: 'Proposals for universities and educational institutions to join [i3].',
    subtitle: 'Universities and educational institutions can partner with [i3] to encourage their students to participate in various internship programs based on UGC standards. If ...',
    date: '9/6/2026',
    image: 'https://images.unsplash.com/photo-1585829365295-ab7cd400c167?w=600&auto=format&fit=crop&q=80'
  }
];

const initialLinks = [
  {
    id: 'l1',
    slNo: '01',
    headline: 'IIInternship Launches India-wide Digital Training Hub',
    url: 'https://example.com',
    agency: 'TechPulse',
    date: '6/20/2026'
  },
  {
    id: 'l2',
    slNo: '02',
    headline: 'Next Gen E-Commerce Logistics Internships Announced',
    url: 'https://example.com',
    agency: 'Logistics Wire',
    date: '6/27/2026'
  },
  {
    id: 'l3',
    slNo: '03',
    headline: 'AI in Warehousing: Empowering Youth with Practical Skills',
    url: 'https://example.com',
    agency: 'Future Tech News',
    date: '7/4/2026'
  },
  {
    id: 'l4',
    slNo: '04',
    headline: 'DBMS',
    url: 'https://example.com',
    agency: 'DPK BLOG POST',
    date: '8/4/2026'
  }
];

const MediaDesk = () => {
  // Tab State
  const [activeTab, setActiveTab] = useState('photos'); // 'photos' | 'videos' | 'clippings' | 'links'

  // Data Collections State
  const [photos, setPhotos] = useState(initialPhotos);
  const [videos, setVideos] = useState(initialVideos);
  const [clippings, setClippings] = useState(initialClippings);
  const [links, setLinks] = useState(initialLinks);

  // Modal / Popup State
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingItem, setEditingItem] = useState(null);

  // Form Field State
  const [formData, setFormData] = useState({
    title: '',
    subtitle: '',
    category: '',
    agency: '',
    date: '',
    url: '',
    image: ''
  });

  // Handle Tab Switch
  const handleTabChange = (tabKey) => {
    setActiveTab(tabKey);
  };

  // Open Modal for Creating Item
  const handleOpenCreateModal = () => {
    setEditingItem(null);
    setFormData({
      title: '',
      subtitle: '',
      category: '',
      agency: '',
      date: new Date().toLocaleDateString('en-US'),
      url: '',
      image: ''
    });
    setIsModalOpen(true);
  };

  // Open Modal for Editing Item
  const handleOpenEditModal = (item) => {
    setEditingItem(item);
    setFormData({
      title: item.title || item.headline || '',
      subtitle: item.subtitle || '',
      category: item.category || '',
      agency: item.agency || '',
      date: item.date || item.dateLinked || '',
      url: item.url || item.videoUrl || '',
      image: item.image || ''
    });
    setIsModalOpen(true);
  };

  // Delete Action Handler
  const handleDeleteItem = (id) => {
    if (window.confirm('Are you sure you want to delete this item?')) {
      if (activeTab === 'photos') setPhotos(photos.filter(item => item.id !== id));
      if (activeTab === 'videos') setVideos(videos.filter(item => item.id !== id));
      if (activeTab === 'clippings') setClippings(clippings.filter(item => item.id !== id));
      if (activeTab === 'links') setLinks(links.filter(item => item.id !== id));
    }
  };

  // Input Change Handler
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  // File Upload Preview Simulator
  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const tempUrl = URL.createObjectURL(file);
      setFormData(prev => ({ ...prev, image: tempUrl }));
    }
  };

  // Form Submission
  const handleSubmit = (e) => {
    e.preventDefault();

    if (editingItem) {
      // Update Logic
      if (activeTab === 'photos') {
        setPhotos(photos.map(p => p.id === editingItem.id ? { ...p, ...formData } : p));
      } else if (activeTab === 'videos') {
        setVideos(videos.map(v => v.id === editingItem.id ? { ...v, ...formData } : v));
      } else if (activeTab === 'clippings') {
        setClippings(clippings.map(c => c.id === editingItem.id ? { ...c, ...formData } : c));
      } else if (activeTab === 'links') {
        setLinks(links.map(l => l.id === editingItem.id ? { ...l, headline: formData.title, ...formData } : l));
      }
    } else {
      // Create Logic
      const newId = Date.now().toString();
      if (activeTab === 'photos') {
        setPhotos([...photos, {
          id: newId,
          title: formData.title || 'New Photo',
          subtitle: formData.subtitle || 'Photo Description',
          date: formData.date || '9/8/2026',
          image: formData.image || 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&auto=format&fit=crop&q=80'
        }]);
      } else if (activeTab === 'videos') {
        setVideos([...videos, {
          id: newId,
          title: formData.title || 'New Video Title',
          subtitle: formData.subtitle || 'Video Description',
          date: formData.date || '9/8/2026',
          videoUrl: formData.url || 'https://www.youtube.com/embed/dQw4w9WgXcQ',
          channelName: formData.agency || 'Public Channel',
          artist: 'Media Desk'
        }]);
      } else if (activeTab === 'clippings') {
        setClippings([...clippings, {
          id: newId,
          category: formData.category || 'PRESS HIGHLIGHT',
          title: formData.title || 'New Press Clipping',
          subtitle: formData.subtitle || 'Description of clipping',
          date: formData.date || '9/8/2026',
          image: formData.image || 'https://images.unsplash.com/photo-1585829365295-ab7cd400c167?w=600&auto=format&fit=crop&q=80'
        }]);
      } else if (activeTab === 'links') {
        const nextSl = (links.length + 1).toString().padStart(2, '0');
        setLinks([...links, {
          id: newId,
          slNo: nextSl,
          headline: formData.title || 'New Article Headline',
          url: formData.url || '#',
          agency: formData.agency || 'News Agency',
          date: formData.date || '9/8/2026'
        }]);
      }
    }

    setIsModalOpen(false);
  };

  return (
    <div className="MediaDesk-container">
      
      {/* Top Breadcrumb Navigation */}
      <div className="MediaDesk-breadcrumb">
        <span className="MediaDesk-breadcrumb-item"><FiHome /> Home</span>
        <span className="MediaDesk-breadcrumb-sep">&gt;</span>
        <span className="MediaDesk-breadcrumb-item"><FiFolder /> Super Admin</span>
        <span className="MediaDesk-breadcrumb-sep">&gt;</span>
        <span className="MediaDesk-breadcrumb-item active"><FiImage /> Media Desk</span>
      </div>

      {/* Main Header */}
      <div className="MediaDesk-header">
        <h1 className="MediaDesk-title">Public Media Desk</h1>
        <p className="MediaDesk-subtitle">
          Manage promotional press, online article coverage, newspaper highlights, and gallery assets.
        </p>
      </div>

      {/* Navigation Tabs */}
      <div className="MediaDesk-tabs-nav">
        <button 
          className={`MediaDesk-tab-btn ${activeTab === 'photos' ? 'active' : ''}`}
          onClick={() => handleTabChange('photos')}
        >
          Photos
        </button>
        <button 
          className={`MediaDesk-tab-btn ${activeTab === 'videos' ? 'active' : ''}`}
          onClick={() => handleTabChange('videos')}
        >
          Videos
        </button>
        <button 
          className={`MediaDesk-tab-btn ${activeTab === 'clippings' ? 'active' : ''}`}
          onClick={() => handleTabChange('clippings')}
        >
          Newspaper Clippings
        </button>
        <button 
          className={`MediaDesk-tab-btn ${activeTab === 'links' ? 'active' : ''}`}
          onClick={() => handleTabChange('links')}
        >
          Online Links
        </button>
      </div>

      {/* Dynamic Tab Content Section */}
      <div className="MediaDesk-content-wrapper">

        {/* 1. PHOTOS TAB */}
        {activeTab === 'photos' && (
          <div>
            <div className="MediaDesk-section-bar">
              <div>
                <h2 className="MediaDesk-section-title">Photos Directory</h2>
                <p className="MediaDesk-section-subtitle">Manage and upload promotional or event gallery photos.</p>
              </div>
              <button className="MediaDesk-btn-primary" onClick={handleOpenCreateModal}>
                <FiPlus /> Add Photo
              </button>
            </div>

            <div className="MediaDesk-grid">
              {photos.map(photo => (
                <div key={photo.id} className="MediaDesk-card">
                  <div className="MediaDesk-card-media">
                    <img src={photo.image} alt={photo.title} />
                    <div className="MediaDesk-card-actions">
                      <button className="MediaDesk-icon-btn edit" onClick={() => handleOpenEditModal(photo)}><FiEdit2 /></button>
                      <button className="MediaDesk-icon-btn delete" onClick={() => handleDeleteItem(photo.id)}><FiTrash2 /></button>
                    </div>
                  </div>
                  <div className="MediaDesk-card-body">
                    <div className="MediaDesk-card-title-row">
                      <h3 className="MediaDesk-card-title">{photo.title}</h3>
                      <span className="MediaDesk-card-date"><FiCalendar /> {photo.date}</span>
                    </div>
                    <p className="MediaDesk-card-sub">{photo.subtitle}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* 2. VIDEOS TAB */}
        {activeTab === 'videos' && (
          <div>
            <div className="MediaDesk-section-bar">
              <div>
                <h2 className="MediaDesk-section-title">Videos Directory</h2>
                <p className="MediaDesk-section-subtitle">Manage and add promotional YouTube video links.</p>
              </div>
              <button className="MediaDesk-btn-primary" onClick={handleOpenCreateModal}>
                <FiPlus /> Add Video
              </button>
            </div>

            <div className="MediaDesk-grid">
              {videos.map(video => (
                <div key={video.id} className="MediaDesk-card">
                  <div className="MediaDesk-card-media video-preview">
                    <iframe 
                      src={video.videoUrl} 
                      title={video.title} 
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                      allowFullScreen
                    ></iframe>
                    <div className="MediaDesk-card-actions">
                      <button className="MediaDesk-icon-btn edit" onClick={() => handleOpenEditModal(video)}><FiEdit2 /></button>
                      <button className="MediaDesk-icon-btn delete" onClick={() => handleDeleteItem(video.id)}><FiTrash2 /></button>
                    </div>
                  </div>
                  <div className="MediaDesk-card-body">
                    <div className="MediaDesk-card-title-row">
                      <h3 className="MediaDesk-card-title">{video.title}</h3>
                      <span className="MediaDesk-card-date"><FiCalendar /> {video.date}</span>
                    </div>
                    <p className="MediaDesk-card-sub">{video.subtitle}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* 3. NEWSPAPER CLIPPINGS TAB */}
        {activeTab === 'clippings' && (
          <div>
            <div className="MediaDesk-section-bar">
              <div>
                <h2 className="MediaDesk-section-title">Newspaper Clippings</h2>
                <p className="MediaDesk-section-subtitle">Manage and upload scans of newspaper highlights and press clippings.</p>
              </div>
              <button className="MediaDesk-btn-primary" onClick={handleOpenCreateModal}>
                <FiPlus /> Add Clipping
              </button>
            </div>

            <div className="MediaDesk-grid">
              {clippings.map(clip => (
                <div key={clip.id} className="MediaDesk-card">
                  <div className="MediaDesk-card-media">
                    <img src={clip.image} alt={clip.title} />
                    <div className="MediaDesk-card-actions">
                      <button className="MediaDesk-icon-btn edit" onClick={() => handleOpenEditModal(clip)}><FiEdit2 /></button>
                      <button className="MediaDesk-icon-btn delete" onClick={() => handleDeleteItem(clip.id)}><FiTrash2 /></button>
                    </div>
                  </div>
                  <div className="MediaDesk-card-body">
                    <div className="MediaDesk-card-tag">{clip.category}</div>
                    <div className="MediaDesk-card-title-row" style={{ marginTop: '4px' }}>
                      <h3 className="MediaDesk-card-title">{clip.title}</h3>
                      <span className="MediaDesk-card-date"><FiCalendar /> {clip.date}</span>
                    </div>
                    <p className="MediaDesk-card-sub">{clip.subtitle}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* 4. ONLINE LINKS TAB */}
        {activeTab === 'links' && (
          <div>
            <div className="MediaDesk-section-bar">
              <div>
                <h2 className="MediaDesk-section-title">Online Coverage Links</h2>
                <p className="MediaDesk-section-subtitle">Manage and link external online articles and press coverage.</p>
              </div>
              <button className="MediaDesk-btn-primary" onClick={handleOpenCreateModal}>
                <FiPlus /> Add Link
              </button>
            </div>

            <div className="MediaDesk-table-container">
              <table className="MediaDesk-table">
                <thead>
                  <tr>
                    <th style={{ width: '80px' }}>SL NO.</th>
                    <th>HEADLINE / SOURCE</th>
                    <th>AGENCY</th>
                    <th>DATE LINKED</th>
                    <th style={{ width: '100px', textAlign: 'right' }}>ACTIONS</th>
                  </tr>
                </thead>
                <tbody>
                  {links.map((link) => (
                    <tr key={link.id}>
                      <td className="MediaDesk-td-sl">{link.slNo}</td>
                      <td className="MediaDesk-td-headline">
                        <a href={link.url} target="_blank" rel="noopener noreferrer">
                          {link.headline} <FiExternalLink className="ext-icon" />
                        </a>
                      </td>
                      <td className="MediaDesk-td-agency">{link.agency}</td>
                      <td className="MediaDesk-td-date">{link.date}</td>
                      <td className="MediaDesk-td-actions">
                        <button className="MediaDesk-action-icon edit" onClick={() => handleOpenEditModal(link)}><FiEdit2 /></button>
                        <button className="MediaDesk-action-icon delete" onClick={() => handleDeleteItem(link.id)}><FiTrash2 /></button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

      </div>

      {/* SMOOTH POPUP MODAL FOR ADD/EDIT */}
      {isModalOpen && (
        <div className="MediaDesk-modal-backdrop" onClick={() => setIsModalOpen(false)}>
          <div className="MediaDesk-modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="MediaDesk-modal-header">
              <h3>
                {editingItem ? 'Edit' : 'Add New'}{' '}
                {activeTab === 'photos' && 'Photo'}
                {activeTab === 'videos' && 'Video Link'}
                {activeTab === 'clippings' && 'Newspaper Clipping'}
                {activeTab === 'links' && 'Online Coverage Link'}
              </h3>
              <button className="MediaDesk-modal-close" onClick={() => setIsModalOpen(false)}>
                <FiX />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="MediaDesk-modal-body">
              <div className="MediaDesk-form-group">
                <label>TITLE / HEADLINE</label>
                <input 
                  type="text" 
                  name="title" 
                  value={formData.title} 
                  onChange={handleInputChange} 
                  placeholder="Enter title or article headline"
                  required 
                />
              </div>

              {(activeTab === 'photos' || activeTab === 'videos' || activeTab === 'clippings') && (
                <div className="MediaDesk-form-group">
                  <label>DESCRIPTION / SUBTITLE</label>
                  <textarea 
                    name="subtitle" 
                    rows="3" 
                    value={formData.subtitle} 
                    onChange={handleInputChange} 
                    placeholder="Enter short description"
                  />
                </div>
              )}

              {activeTab === 'clippings' && (
                <div className="MediaDesk-form-group">
                  <label>CATEGORY / INSTITUTION</label>
                  <input 
                    type="text" 
                    name="category" 
                    value={formData.category} 
                    onChange={handleInputChange} 
                    placeholder="e.g. INTERNATIONAL INSTITUTE OF INTERNSHIP"
                  />
                </div>
              )}

              {(activeTab === 'links' || activeTab === 'videos') && (
                <div className="MediaDesk-form-group">
                  <label>{activeTab === 'videos' ? 'CHANNEL / AGENCY' : 'AGENCY / PUBLISHER'}</label>
                  <input 
                    type="text" 
                    name="agency" 
                    value={formData.agency} 
                    onChange={handleInputChange} 
                    placeholder="e.g. TechPulse, Times News"
                  />
                </div>
              )}

              {(activeTab === 'links' || activeTab === 'videos') && (
                <div className="MediaDesk-form-group">
                  <label>URL / EMBED LINK</label>
                  <input 
                    type="url" 
                    name="url" 
                    value={formData.url} 
                    onChange={handleInputChange} 
                    placeholder="https://..."
                  />
                </div>
              )}

              {(activeTab === 'photos' || activeTab === 'clippings') && (
                <div className="MediaDesk-form-group">
                  <label>IMAGE UPLOAD / COVER URL</label>
                  <div className="MediaDesk-file-upload-box">
                    <input type="file" accept="image/*" onChange={handleFileUpload} id="modal-file-input" hidden />
                    <label htmlFor="modal-file-input" className="MediaDesk-upload-label">
                      <FiUpload /> Choose Image File
                    </label>
                    <span className="file-or">OR</span>
                    <input 
                      type="text" 
                      name="image" 
                      value={formData.image} 
                      onChange={handleInputChange} 
                      placeholder="Paste Image Web URL"
                    />
                  </div>
                </div>
              )}

              <div className="MediaDesk-form-group">
                <label>DATE</label>
                <input 
                  type="text" 
                  name="date" 
                  value={formData.date} 
                  onChange={handleInputChange} 
                  placeholder="M/D/YYYY"
                />
              </div>

              <div className="MediaDesk-modal-actions">
                <button type="button" className="MediaDesk-btn-secondary" onClick={() => setIsModalOpen(false)}>
                  Cancel
                </button>
                <button type="submit" className="MediaDesk-btn-primary">
                  {editingItem ? 'Save Changes' : 'Submit Item'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

    </div>
  );
};

export default MediaDesk;