import React, { useState } from "react";
import { 
  FiHome, 
  FiFolder, 
  FiStar, 
  FiSearch, 
  FiGrid, 
  FiEye, 
  FiEdit3, 
  FiTrash2, 
  FiX 
} from "react-icons/fi";
import "./ReviewsModeration.css";

const initialReviews = [
  {
    id: 1,
    authorName: "Sarah Jenkins",
    role: "Student",
    rating: 5,
    comment: "The course content was thoroughly well-explained and extremely useful for real-world application.",
  },
  {
    id: 2,
    authorName: "David Miller",
    role: "Instructor",
    rating: 4,
    comment: "Great platform experience overall. Student engagement tools are very responsive.",
  },
  {
    id: 3,
    authorName: "Elena Rostova",
    role: "Student",
    rating: 5,
    comment: "Exceptional teaching quality! Highly recommend to all beginners in web development.",
  }
];

const ReviewsModeration = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [reviews, setReviews] = useState(initialReviews);
  
  // Modal States
  const [selectedReview, setSelectedReview] = useState(null);
  const [isViewModalOpen, setIsViewModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [editFormData, setEditFormData] = useState({ authorName: "", role: "", rating: 5, comment: "" });

  // Search Filter
  const filteredReviews = reviews.filter((review) =>
    review.authorName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    review.comment.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Handlers
  const handleView = (review) => {
    setSelectedReview(review);
    setIsViewModalOpen(true);
  };

  const handleEditClick = (review) => {
    setSelectedReview(review);
    setEditFormData({ ...review });
    setIsEditModalOpen(true);
  };

  const handleEditChange = (e) => {
    const { name, value } = e.target;
    setEditFormData({ ...editFormData, [name]: value });
  };

  const handleUpdateReview = (e) => {
    e.preventDefault();
    setReviews(reviews.map((item) => (item.id === editFormData.id ? editFormData : item)));
    setIsEditModalOpen(false);
  };

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this review?")) {
      setReviews(reviews.filter((review) => review.id !== id));
    }
  };

  return (
    <div className="reviews-moderation-container">
      {/* Breadcrumb Navigation */}
      <nav className="reviews-moderation-breadcrumb">
        <span className="breadcrumb-item">
          <FiHome className="breadcrumb-icon" /> Home
        </span>
        <span className="breadcrumb-separator">&gt;</span>
        <span className="breadcrumb-item">
          <FiFolder className="breadcrumb-icon" /> Super Admin
        </span>
        <span className="breadcrumb-separator">&gt;</span>
        <span className="breadcrumb-item active">
          <FiStar className="breadcrumb-icon" /> Reviews Moderation
        </span>
      </nav>

      {/* Header */}
      <div className="reviews-moderation-header">
        <h1>Testimonials Moderation</h1>
        <p>
          Review rating submissions and comments from students or instructors before they are approved for display on the public website.
        </p>
      </div>

      {/* Search Input */}
      <div className="reviews-moderation-search">
        <FiSearch className="search-icon" />
        <input
          type="text"
          placeholder="Search by author name or comment"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {/* Content Table / Card Layout */}
      <div className="reviews-moderation-card">
        <div className="reviews-moderation-table-wrapper">
          <table className="reviews-moderation-table">
            <thead>
              <tr>
                <th>AUTHOR NAME</th>
                <th>ROLE / DESIGNATION</th>
                <th>RATING</th>
                <th>COMMENT / REVIEW</th>
                <th className="text-right">ACTIONS</th>
              </tr>
            </thead>
            <tbody>
              {filteredReviews.length > 0 ? (
                filteredReviews.map((review) => (
                  <tr key={review.id}>
                    <td className="font-semibold">{review.authorName}</td>
                    <td>{review.role}</td>
                    <td>
                      <div className="star-rating">
                        {[...Array(5)].map((_, index) => (
                          <FiStar
                            key={index}
                            className={index < review.rating ? "star-filled" : "star-empty"}
                          />
                        ))}
                      </div>
                    </td>
                    <td className="comment-text">{review.comment}</td>
                    <td className="text-right">
                      <div className="action-buttons">
                        <button 
                          className="btn-action view" 
                          title="View Details"
                          onClick={() => handleView(review)}
                        >
                          <FiEye />
                        </button>
                        <button 
                          className="btn-action edit" 
                          title="Edit Review"
                          onClick={() => handleEditClick(review)}
                        >
                          <FiEdit3 />
                        </button>
                        <button 
                          className="btn-action delete" 
                          title="Delete Review"
                          onClick={() => handleDelete(review.id)}
                        >
                          <FiTrash2 />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="5" className="no-results-cell">
                    <div className="no-results">
                      <FiGrid className="no-results-icon" />
                      <span>No results found.</span>
                    </div>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* View Modal */}
      {isViewModalOpen && selectedReview && (
        <div className="modal-overlay" onClick={() => setIsViewModalOpen(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h2>Review Details</h2>
              <button className="btn-close" onClick={() => setIsViewModalOpen(false)}><FiX /></button>
            </div>
            <div className="modal-body">
              <p><strong>Author:</strong> {selectedReview.authorName}</p>
              <p><strong>Role:</strong> {selectedReview.role}</p>
              <p><strong>Rating:</strong> {selectedReview.rating} / 5 Stars</p>
              <p><strong>Comment:</strong></p>
              <div className="comment-box">{selectedReview.comment}</div>
            </div>
          </div>
        </div>
      )}

      {/* Edit Modal */}
      {isEditModalOpen && (
        <div className="modal-overlay" onClick={() => setIsEditModalOpen(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h2>Edit Review</h2>
              <button className="btn-close" onClick={() => setIsEditModalOpen(false)}><FiX /></button>
            </div>
            <form onSubmit={handleUpdateReview} className="modal-body">
              <div className="form-group">
                <label>Author Name</label>
                <input 
                  type="text" 
                  name="authorName" 
                  value={editFormData.authorName} 
                  onChange={handleEditChange} 
                  required 
                />
              </div>
              <div className="form-group">
                <label>Role / Designation</label>
                <input 
                  type="text" 
                  name="role" 
                  value={editFormData.role} 
                  onChange={handleEditChange} 
                  required 
                />
              </div>
              <div className="form-group">
                <label>Rating (1-5)</label>
                <select 
                  name="rating" 
                  value={editFormData.rating} 
                  onChange={handleEditChange}
                >
                  <option value={1}>1 Star</option>
                  <option value={2}>2 Stars</option>
                  <option value={3}>3 Stars</option>
                  <option value={4}>4 Stars</option>
                  <option value={5}>5 Stars</option>
                </select>
              </div>
              <div className="form-group">
                <label>Comment / Review</label>
                <textarea 
                  name="comment" 
                  rows="4" 
                  value={editFormData.comment} 
                  onChange={handleEditChange} 
                  required 
                />
              </div>
              <div className="modal-footer">
                <button type="button" className="btn-secondary" onClick={() => setIsEditModalOpen(false)}>Cancel</button>
                <button type="submit" className="btn-primary">Save Changes</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default ReviewsModeration;