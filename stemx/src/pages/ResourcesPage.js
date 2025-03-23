import { useEffect, useState } from "react";
import '../App.css';
//integrating API data
import axios from "axios";


const ResourcesPage = () => {
  const [resources, setResources] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [popupData, setPopupData] = useState(null);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  useEffect(() => {
    axios.get("http://10.138.240.15:5000/api/resources")
      .then(response => setResources(response.data))
      .catch(error => console.error("Error fetching resources:", error));
  }, []);

  const openPopup = (organizer) => {
    setPopupData(organizer);
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setPopupData(null);
    setIsPopupOpen(false);
  };

  //new filtered resources wip
  const filteredResources = resources.filter((resource) => {
    const matchesCategory = selectedCategory ? resource.major_category === selectedCategory : true;
    const matchesSearchTerm = resource.resource_name.toLowerCase().includes(searchTerm.toLowerCase());
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
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          <select className="category-filter" value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)}>
            <option value="">Filter by Category</option>
            <option value="Mechanical">Mechanical</option>
            <option value="Electronics">Electronics</option>
            <option value="Software">Software</option>
            <option value="Parts">Parts</option>
          </select>
        </div>
      </div>

      {/* Grid */}
      <div className="resource-grid">
        {filteredResources.map((resource, index) => (
          <div className="resource-card" key={index}>
            <h3>{resource.resource_name}</h3>
            <p className="resource-tags">{resource.tags?.join(" · ")}</p>
            <p>Category: {resource.major_category} - {resource.minor_category || "N/A"}</p>
            
            <p 
              className="resource-organizer clickable" 
              onClick={() => {
                let email = "";
                let role = "";

                if (resource.contact.startsWith("Dr.")) {
                  const nameParts = resource.contact.split(" ");
                  const lastName = nameParts[nameParts.length - 1];
                  email = `${lastName.toLowerCase()}@oakland.edu`;
                  role = "Professor";
                } else {
                  email = `connect@${resource.contact.replace(/\s+/g, '').toLowerCase()}.com`;
                  role = "Organization";
                }

                openPopup({ name: resource.contact, email, role });
              }}
            >
              Organized by: <strong>{resource.contact}</strong>
            </p>

            <span className="category-label">{resource.major_category}</span>
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
            <button 
              className="send-button" 
              onClick={() => {
                navigator.clipboard.writeText(popupData.email)
                  .then(() => alert(`Copied ${popupData.email}`))
                  .catch(err => console.error("Failed to copy email:", err));
              }}
            >
              Send Message
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ResourcesPage;