import profilePic from '../assets/profile.jpg';
import React, { useEffect } from 'react';
import '../App.css'

const DashboardPage = () => {
    useEffect(() => {
      const loggedIn = localStorage.getItem('isLoggedIn');
      if (loggedIn !== 'true') {
        window.location.href = '/login';
      }
    }, []);
  
    const logout = () => {
      localStorage.removeItem('isLoggedIn');
      window.location.href = '/';
    };
  
    return (
      <div className="dashboard-container">
        {/* Left Side: Main Dashboard Area */}
        <div className="dashboard-main">
          <h1 className="dashboard-welcome">
            Welcome to STEMx!! What would you like to explore today?✨
          </h1>
  
           {/* Full-width Events Widget */}
          
          <div className="dashboard-widget full-width"> 
          <div className="widget-header">
  <span className="widget-icon">📅</span>
  <h3>Events Calendar</h3>
  </div>

  <div className="calendar-embed">
    <iframe
      src="https://calendar.google.com/calendar/embed?src=marianmoji15%40gmail.com&ctz=America%2FDetroit"
      style={{ border: 0 }}
      width="100%"
      height="250"
      frameBorder="0"
      scrolling="no"
      title="STEMx Calendar"
    ></iframe>
  </div>
</div>

        
{/* Row with Two Smaller Widgets */}
<div className="dashboard-grid-row">
  <div className="dashboard-widget" onClick={() => window.location.href = '/resources'}>
    <div className="widget-header">
      <span className="widget-icon">⭐</span>
      <h3>Resources</h3>
    </div>
  </div>

  <div className="dashboard-widget" onClick={() => window.location.href = '/forum'}>
    <div className="widget-header">
      <span className="widget-icon">👥</span>
      <h3>Community Forum</h3>
    </div>
  </div>
</div> 
</div> 
        {/* Right Side: Profile Panel */}
        <div className="dashboard-profile">
          <div className="profile-image-wrapper">
            <img src={profilePic} alt="Profile" className="profile-image" />
          </div>
  
          <h2>Profile info:</h2>
          <p><strong>Name:</strong> Marian Morales</p>
          <p><strong>School:</strong> Oakland University</p>
          <p><strong>Year:</strong> Junior</p>
          <p><strong>Major:</strong> Computer Science</p>
  
          <h3>Skills:</h3>
          <div className="skill-bubbles">
            <span className="skill-tag">Javascript</span>
            <span className="skill-tag">React</span>
            <span className="skill-tag">CAD</span>
            <span className="skill-tag">UI/UX Design</span>
          </div>

          <button className="logout-button" onClick={logout}>Log Out</button>
      
        </div>
      </div>
    );
  };
  
  export default DashboardPage;
