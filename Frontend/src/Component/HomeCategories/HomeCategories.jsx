import React from 'react';
import { 
  PieChart, 
  Briefcase, 
  Palette, 
  UserPlus, 
  HeartPulse, 
  Microscope, 
  ArrowRight 
} from 'lucide-react';
import './HomeCategories.css';

const categoriesData = [
  {
    id: 1,
    title: "Finance &\nAccounting",
    courses: "75 Courses",
    icon: PieChart,
    description: "Master financial modeling, accounting principles, and investment strategies."
  },
  {
    id: 2,
    title: "Business &\nManagement",
    courses: "96 Courses",
    icon: Briefcase,
    description: "Learn leadership, strategic planning, operations, and modern business management."
  },
  {
    id: 3,
    title: "Creative Arts &\nDesign",
    courses: "120 Courses",
    icon: Palette,
    description: "Explore graphic design, UI/UX, illustration, and digital art techniques."
  },
  {
    id: 4,
    title: "Personal\nDevelopment",
    courses: "751 Courses",
    icon: UserPlus,
    description: "Boost productivity, soft skills, communication, and emotional intelligence."
  },
  {
    id: 5,
    title: "Health &\nWellness",
    courses: "23 Courses",
    icon: HeartPulse,
    description: "Discover nutrition, mental fitness, mindfulness, and holistic well-being."
  },
  {
    id: 6,
    title: "Science &\nEngineering",
    courses: "16 Courses",
    icon: Microscope,
    description: "Dive into cutting-edge technology, scientific research, and applied engineering."
  }
];

const HomeCategories = () => {
  return (
    <section className="HomeCategories-section">
      <div className="HomeCategories-container">
        <h2 className="HomeCategories-title">Courses & Categories</h2>
        
        <div className="HomeCategories-grid">
          {categoriesData.map((item) => {
            const IconComponent = item.icon;
            return (
              <div className="HomeCategories-card-wrapper" key={item.id}>
                <div className="HomeCategories-card-inner">
                  {/* Front Side (Green) */}
                  <div className="HomeCategories-card-face HomeCategories-card-front">
                    <div className="HomeCategories-icon-circle">
                      <IconComponent size={28} strokeWidth={1.8} />
                    </div>
                    <div className="HomeCategories-card-front-content">
                      <h3 className="HomeCategories-card-title">{item.title}</h3>
                      <p className="HomeCategories-card-count">{item.courses}</p>
                    </div>
                    {/* Bottom Right Decorative Pill */}
                    <div className="HomeCategories-corner-accent"></div>
                  </div>

                  {/* Back Side (White / Hover Effect) */}
                  <div className="HomeCategories-card-face HomeCategories-card-back">
                    <p className="HomeCategories-card-desc">{item.description}</p>
                    <button className="HomeCategories-explore-btn">
                      <span>Explore</span>
                      <ArrowRight size={15} className="HomeCategories-arrow-icon" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HomeCategories;