import React, { useState } from 'react';
import '../App.css';

const ResourcesPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [popupData, setPopupData] = useState(null);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const openPopup = (organizer) => {
    setPopupData(organizer);
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setPopupData(null);
    setIsPopupOpen(false);
  };

  const resources = [
    {
      title: 'Intro to Python',
      tags: ['free', 'computer access', 'software'],
      description: 'A beginner-friendly intro to Python with online tools and projects.',
      category: 'Software',
      organizer: {
        name: 'Dr. Guangzhi Qu',
        email: 'gqu@oakland.edu',
        role: 'Interim Chair, CSE Department',
      },
    },
    {
      title: 'Git & GitHub Crash Course',
      tags: ['version control', 'free', 'CLI'],
      description: 'Learn how to use Git and GitHub to collaborate on coding projects.',
      category: 'Software',
      organizer: {
        name: 'Dr. Julian Rrushi',
        email: 'rrushi@oakland.edu',
        role: 'Associate Professor, Software Security',
      },
    },
    {
      title: '3D Printing Metal Kits',
      tags: ['kits', 'manufacturing', 'metal'],
      description: 'Access to 3D printing kits and metal materials for fabrication projects.',
      category: 'Mechanical',
      organizer: {
        name: 'Dr. Laila Guessous',
        email: 'guessous@oakland.edu',
        role: 'Professor, Mechanical Engineering',
      },
    },
    {
      title: 'CAD Tutorial Library',
      tags: ['CAD', 'mechanical design', 'simulation'],
      description: 'Master CAD tools like SolidWorks and Fusion 360 with guided projects.',
      category: 'Mechanical',
      organizer: {
        name: 'AutoDesk',
        email: 'support@autodesk.com',
        role: 'CAD Software Provider',
      },
    },
    {
      title: 'Arduino Starter Kit',
      tags: ['kits', 'circuits', 'embedded'],
      description: 'Explore microcontrollers, sensors, and basic electronics hands-on.',
      category: 'Electrical',
      organizer: {
        name: 'Dr. Hoda S. Abdel-Aty-Zohdy',
        email: 'zohdy@oakland.edu',
        role: 'Professor, Electrical Engineering',
      },
    },
    {
      title: 'Soldering 101',
      tags: ['hands-on', 'electrical', 'lab access'],
      description: 'Learn essential soldering skills for electrical projects.',
      category: 'Electrical',
      organizer: {
        name: 'Solder.net',
        email: 'info@solder.net',
        role: 'Online Lab Tutorials',
      },
    },
    {
      title: 'STEMx Parts Library',
      tags: ['plastic', 'metal', 'fasteners'],
      description: 'Request and browse commonly used parts for builds and repairs.',
      category: 'Parts',
      organizer: {
        name: 'Systems Lab Admin',
        email: 'labadmin@stemx.org',
        role: 'Resource Coordinator',
      },
    },
    {
      title: 'Laser Cutter Access',
      tags: ['laser cutting', 'fabrication', 'access'],
      description: 'Reserve time with the laser cutter and learn proper safety practices.',
      category: 'Parts',
      organizer: {
        name: 'Fab Lab Coordinator',
        email: 'fablab@stemx.org',
        role: 'Lab Technician',
      },
    },
  ];

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  const filteredResources = resources.filter((resource) => {
    const matchesCategory = selectedCategory ? resource.category === selectedCategory : true;
    const matchesSearchTerm = resource.title.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearchTerm;
  });

  return (
    <div className="resources-container">
      {/* Header */}
      <div className="resources-header">
        <h1>Explore: Resources 📘</h1>
        <div className="resources-controls">
          <div className="search-wrapper">
            <span className="search-icon">🔍</span>
            <input
              type="text"
              placeholder="Search resources..."
              className="search-input"
              value={searchTerm}
              onChange={handleSearchChange}
            />
          </div>

          <select
            className="category-filter"
            value={selectedCategory}
            onChange={handleCategoryChange}
          >
            <option value="">Filter by Category</option>
            <option value="Mechanical">Mechanical</option>
            <option value="Electrical">Electrical</option>
            <option value="Software">Software</option>
            <option value="Parts">Parts</option>
          </select>
        </div>
      </div>

      {/* Grid */}
      <div className="resource-grid">
        {filteredResources.map((resource, index) => (
          <div className="resource-card" key={index}>
            <h3>{resource.title}</h3>
            <p className="resource-tags">{resource.tags.join(' · ')}</p>
            <p>{resource.description}</p>

            <p
              className="resource-organizer clickable"
              onClick={() => openPopup(resource.organizer)}
            >
              Organized by: <strong>{resource.organizer.name}</strong>
            </p>

            <span className="category-label">{resource.category}</span>
          </div>
        ))}
      </div>

      {/* Popup */}
      {isPopupOpen && popupData && (
        <div className="popup-overlay" onClick={closePopup}>
          <div className="popup-box" onClick={(e) => e.stopPropagation()}>
            <button className="popup-close" onClick={closePopup}>✖</button>
            <h2>{popupData.name}</h2>
            <p><strong>Email:</strong> {popupData.email}</p>
            <p><strong>Role:</strong> {popupData.role}</p>
            <button className="send-button">Send Message</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ResourcesPage;


