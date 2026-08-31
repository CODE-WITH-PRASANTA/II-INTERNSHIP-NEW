import React, { useState } from 'react';
import { 
  Star, 
  User, 
  FileText, 
  ArrowUpRight 
} from 'lucide-react';
import './HomeExploreTop.css';

import courseImg1 from '../../assets/DailyLive.webp';
import courseImg2 from '../../assets/LearnAnytim.webp';
import courseImg3 from '../../assets/photo3.webp';
import courseImg4 from '../../assets/photo4.webp';
import courseImg5 from '../../assets/photo5.webp';
import courseImg6 from '../../assets/photo3.webp';
import courseImg7 from '../../assets/Cybersecurity.webp';
import courseImg8 from '../../assets/photo6.webp';

const categories = [
  'ALL',
  'PROGRAMMING',
  'GRAPHIC DESIGN',
  'DATA SCIENCE',
  'MARKETING',
  'MANAGEMENT',
];

const coursesData = [
  {
    id: 1,
    category: 'DATA SCIENCE',
    title: 'Introduction to Data Science and Analytics',
    image: courseImg1 || 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop',
    rating: 4.8,
    ratingsCount: '2.6k',
    description: 'Learn core analytics, visualization, and practical data workflows for beginners.',
    price: '₹1,999',
    originalPrice: '₹2,499',
    students: '270 Student',
    lessons: '40 Lessons',
  },
  {
    id: 2,
    category: 'MARKETING',
    title: 'Digital Marketing Strategies and Tools',
    image: courseImg2 || 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=800&auto=format&fit=crop',
    rating: 4.8,
    ratingsCount: '2.6k',
    description: 'Master campaigns, audience targeting, tools, and strategy for digital growth.',
    price: '₹3,999',
    originalPrice: '₹4,999',
    students: '270 Student',
    lessons: '40 Lessons',
  },
  {
    id: 3,
    category: 'MARKETING',
    title: 'Social Media Marketing Growth and Branding',
    image: courseImg3 || 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?q=80&w=800&auto=format&fit=crop',
    rating: 4.8,
    ratingsCount: '2.6k',
    description: 'Build social campaigns, improve conversions, and grow a powerful...',
    price: '₹5,999',
    originalPrice: '₹7,999',
    students: '82 Student',
    lessons: '24 Lessons',
  },
  {
    id: 4,
    category: 'PROGRAMMING',
    title: 'Web Development From Beginner to Expert',
    image: courseImg4 || 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=800&auto=format&fit=crop',
    rating: 4.8,
    ratingsCount: '2.6k',
    description: 'Learn HTML, CSS, JavaScript, and real-world web development from scratch.',
    price: '₹1,499',
    originalPrice: '₹2,299',
    students: '50 Student',
    lessons: '20 Lessons',
  },
  {
    id: 5,
    category: 'GRAPHIC DESIGN',
    title: 'Mastering Graphic Design Fundamentals',
    image: courseImg5 || 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=800&auto=format&fit=crop',
    rating: 4.8,
    ratingsCount: '2.6k',
    description: 'Understand layouts, typography, branding, and modern visual...',
    price: '₹9,499',
    originalPrice: '₹11,999',
    students: '89 Student',
    lessons: '85 Lessons',
  },
  {
    id: 6,
    category: 'MANAGEMENT',
    title: 'Business Analytics for Decision Making',
    image: courseImg6 || 'https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=800&auto=format&fit=crop',
    rating: 4.8,
    ratingsCount: '2.6k',
    description: 'Use data analytics techniques to make better business decisions and improv...',
    price: 'Free',
    originalPrice: '₹7,999',
    students: '56 Student',
    lessons: '20 Lessons',
  },
  {
    id: 7,
    category: 'PROGRAMMING',
    title: 'Cybersecurity Essentials Protecting Digital Systems',
    image: courseImg7 || 'https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=800&auto=format&fit=crop',
    rating: 4.8,
    ratingsCount: '2.6k',
    description: 'Protect systems, understand threats, and build practical cybersecurity...',
    price: '₹4,799',
    originalPrice: '₹6,499',
    students: '42 Student',
    lessons: '28 Lessons',
  },
  {
    id: 8,
    category: 'MANAGEMENT',
    title: 'Creative Writing Crafting Compelling Stories',
    image: courseImg8 || 'https://images.unsplash.com/photo-1455390582262-044cdead277a?q=80&w=800&auto=format&fit=crop',
    rating: 4.8,
    ratingsCount: '2.6k',
    description: 'Improve storytelling, structure, creativity, and written expression with...',
    price: '₹599',
    originalPrice: '₹1,599',
    students: '2.5k Student',
    lessons: '11 Lessons',
  },
];

const HomeExploreTop = () => {
  const [activeCategory, setActiveCategory] = useState('ALL');

  const filteredCourses =
    activeCategory === 'ALL'
      ? coursesData
      : coursesData.filter((course) => course.category === activeCategory);

  return (
    <section className="HomeExploreTop-section">
      <div className="HomeExploreTop-container">
        {/* Top Header */}
        <div className="HomeExploreTop-header">
          <h2 className="HomeExploreTop-header-title">Explore Top Courses</h2>
          <button className="HomeExploreTop-view-all-btn" type="button">
            <span>View All</span>
            <span className="HomeExploreTop-view-all-icon">
              <ArrowUpRight size={18} strokeWidth={2.5} />
            </span>
          </button>
        </div>

        {/* Category Navigation */}
        <div className="HomeExploreTop-category-nav">
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              className={`HomeExploreTop-category-pill ${
                activeCategory === category ? 'HomeExploreTop-category-pill-active' : ''
              }`}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Course Cards Grid */}
        <div className="HomeExploreTop-course-grid">
          {filteredCourses.map((course) => (
            <div key={course.id} className="HomeExploreTop-card">
              {/* Default Card Layout */}
              <div className="HomeExploreTop-card-default-view">
                <div className="HomeExploreTop-card-thumb-wrapper">
                  <img
                    src={course.image}
                    alt={course.title}
                    className="HomeExploreTop-card-thumb"
                    loading="lazy"
                  />
                </div>

                <div className="HomeExploreTop-card-content">
                  <h3 className="HomeExploreTop-course-title">{course.title}</h3>

                  <div className="HomeExploreTop-course-rating">
                    <div className="HomeExploreTop-stars-row">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          size={14}
                          className="HomeExploreTop-star-icon"
                          fill="#f59e0b"
                          stroke="#f59e0b"
                        />
                      ))}
                    </div>
                    <span className="HomeExploreTop-rating-text">
                      ({course.rating}/ {course.ratingsCount} Ratings)
                    </span>
                  </div>

                  <p className="HomeExploreTop-course-description">{course.description}</p>

                  <div className="HomeExploreTop-course-pricing">
                    <span className="HomeExploreTop-price-current">{course.price}</span>
                    {course.originalPrice && (
                      <span className="HomeExploreTop-price-original">
                        {course.originalPrice}
                      </span>
                    )}
                  </div>

                  <div className="HomeExploreTop-card-footer">
                    <div className="HomeExploreTop-meta-item">
                      <User size={15} className="HomeExploreTop-meta-icon" />
                      <span>{course.students}</span>
                    </div>
                    <div className="HomeExploreTop-meta-item">
                      <FileText size={15} className="HomeExploreTop-meta-icon" />
                      <span>{course.lessons}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Hover Slide-up Green Overlay (Bottom to Top) */}
              <div className="HomeExploreTop-card-hover-overlay">
                <div className="HomeExploreTop-overlay-top-content">
                  <h3 className="HomeExploreTop-overlay-title">{course.title}</h3>

                  <div className="HomeExploreTop-overlay-rating">
                    <div className="HomeExploreTop-stars-row">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          size={14}
                          className="HomeExploreTop-overlay-star-icon"
                          fill="#facc15"
                          stroke="#facc15"
                        />
                      ))}
                    </div>
                    <span className="HomeExploreTop-overlay-rating-text">
                      ({course.rating}/ {course.ratingsCount} Ratings)
                    </span>
                  </div>

                  <p className="HomeExploreTop-overlay-description">
                    {course.description}
                  </p>
                </div>

                <div className="HomeExploreTop-overlay-bottom-content">
                  <div className="HomeExploreTop-overlay-pricing">
                    <span className="HomeExploreTop-overlay-price-current">
                      {course.price}
                    </span>
                    {course.originalPrice && (
                      <span className="HomeExploreTop-overlay-price-original">
                        {course.originalPrice}
                      </span>
                    )}
                  </div>
                  <button className="HomeExploreTop-explore-course-cta" type="button">
                    Explore Course
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeExploreTop;