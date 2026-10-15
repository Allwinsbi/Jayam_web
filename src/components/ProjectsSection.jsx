import React, { useState } from 'react';
import './ProjectsSection.css';

const filterCategories = [
  { id: 'all', label: 'All' },
  { id: 'architecture', label: 'Architecture' },
  { id: 'building', label: 'Building' },
  { id: 'construction', label: 'Construction' },
  { id: 'interior', label: 'Interior' },
  { id: 'renovation', label: 'Renovation' }
];

const projectsData = [
  {
    id: 1,
    title: 'Riverview Green Building',
    category: 'architecture',
    categoryLabel: 'Architecture',
    img: 'https://xtratheme.com/elementor/construction-2/wp-content/uploads/sites/41/2020/01/personal_gift-1-600x600.jpg'
  },
  {
    id: 2,
    title: 'The Langham Hotel',
    category: 'building',
    categoryLabel: 'Building',
    img: 'https://xtratheme.com/elementor/construction-2/wp-content/uploads/sites/41/2020/01/tick_tock-1-1-600x600.jpg'
  },
  {
    id: 3,
    title: 'Villa Rustica Renovation',
    category: 'renovation',
    categoryLabel: 'Renovation',
    img: 'https://xtratheme.com/elementor/construction-2/wp-content/uploads/sites/41/2020/01/portfolio7-1-600x600.jpg'
  },
  {
    id: 4,
    title: 'Land Rustica Renovation',
    category: 'construction',
    categoryLabel: 'Construction',
    img: 'https://xtratheme.com/elementor/construction-2/wp-content/uploads/sites/41/2020/01/portfolio10-1-600x600.jpg'
  },
  {
    id: 5,
    title: 'Kitchen And Living Room',
    category: 'interior',
    categoryLabel: 'Interior',
    img: 'https://xtratheme.com/elementor/construction-2/wp-content/uploads/sites/41/2020/01/portfolio3-1-600x600.jpg'
  },
  {
    id: 6,
    title: 'House Under The Palms',
    category: 'architecture',
    categoryLabel: 'Architecture',
    img: 'https://xtratheme.com/elementor/construction-2/wp-content/uploads/sites/41/2020/01/portfolio6-1-600x600.jpg'
  },
  {
    id: 7,
    title: 'Green House',
    category: 'building',
    categoryLabel: 'Building',
    img: 'https://xtratheme.com/elementor/construction-2/wp-content/uploads/sites/41/2020/01/portfolio9-1-600x600.jpg'
  },
  {
    id: 8,
    title: 'Inside renovation',
    category: 'renovation',
    categoryLabel: 'Renovation',
    img: 'https://xtratheme.com/elementor/construction-2/wp-content/uploads/sites/41/2020/01/portfolio2-1-600x600.jpg'
  }
];

export default function ProjectsSection() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [modalImage, setModalImage] = useState(null);

  const filteredProjects = activeFilter === 'all'
    ? projectsData
    : projectsData.filter((item) => item.category === activeFilter);

  return (
    <section id="projects" className="projects-section">
      <div className="container">
        {/* Header with watermark */}
        <div className="projects-header-wrapper">
          <span className="watermark-number center">04</span>
          <span className="section-tagline">WE ARE PROFESSIONAL</span>
          <h2 className="section-title">Our latest projects</h2>
        </div>

        {/* Filter Tabs */}
        <div className="projects-filter-bar">
          {filterCategories.map((tab) => (
            <button
              key={tab.id}
              className={`filter-btn ${activeFilter === tab.id ? 'active' : ''}`}
              onClick={() => setActiveFilter(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Projects Grid (8 items) */}
        <div className="projects-grid">
          {filteredProjects.map((project) => (
            <div key={project.id} className="project-grid-item">
              <div className="project-card">
                <div className="project-image-container">
                  <img src={project.img} alt={project.title} className="project-img" />
                  <div className="project-overlay">
                    <button
                      className="project-zoom-btn"
                      onClick={() => setModalImage(project)}
                      aria-label="View larger image"
                    >
                      <i className="fa-solid fa-plus"></i>
                    </button>
                  </div>
                </div>

                <div className="project-details">
                  <small className="project-category-tag">{project.categoryLabel}</small>
                  <h3 className="project-name">{project.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {modalImage && (
        <div className="lightbox-overlay" onClick={() => setModalImage(null)}>
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <button className="lightbox-close" onClick={() => setModalImage(null)} aria-label="Close modal">
              <i className="fa-solid fa-xmark"></i>
            </button>
            <img src={modalImage.img} alt={modalImage.title} className="lightbox-img" />
            <div className="lightbox-caption">
              <h3>{modalImage.title}</h3>
              <p>{modalImage.categoryLabel}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
