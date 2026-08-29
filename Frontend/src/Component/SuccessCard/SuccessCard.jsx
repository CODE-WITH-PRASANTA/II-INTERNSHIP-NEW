import React from 'react';
import { FaStar } from 'react-icons/fa';
import { HiArrowRight } from 'react-icons/hi';
import './SuccessCard.css';

const SuccessCard = () => {
  return (
    <div className="success-card-wrapper">
      <div className="success-card-container">
        {/* Badge */}
        <div className="success-card-badge">
          <FaStar className="success-card-badge-icon" />
          <span>READY TO BE THE NEXT?</span>
        </div>

        {/* Heading */}
        <h2 className="success-card-title">
          Write Your Own Success Story With Us
        </h2>

        {/* Description */}
        <p className="success-card-description">
          Join thousands of students who have transformed their careers through our industry-focused internship programs. Your dream job is just one step away.
        </p>

        {/* Action Buttons */}
        <div className="success-card-actions">
          <button className="success-card-btn-primary">
            Apply for Internship
            <HiArrowRight className="success-card-btn-icon" />
          </button>
          <button className="success-card-btn-secondary">
            View All Programs
          </button>
        </div>
      </div>
    </div>
  );
};

export default SuccessCard;