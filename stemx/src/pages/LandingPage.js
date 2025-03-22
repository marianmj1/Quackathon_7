import React from 'react';
import '../App.css';
import { Link } from 'react-router-dom';


const LandingPage = () => {

  console.log("🎯 LandingPage is rendering");

  return (
    <div className="gradient-background">
      <div className="navbar">
      <div className="stemx-logo">🅂</div>
        <div className="nav-links">
          <Link to="/about">About</Link>
          <Link to="/community">Community</Link>
          <Link to="/resources">Resources</Link>
          <Link to="/events">Events</Link>
          <Link to="/contact">Contact</Link>
        </div>
      </div>

      <div className="main-content">
        <h1 className="main-logo-text">STEMx.</h1>
        <p className="tagline">EXPLORE • EXCHANGE • EXPAND</p>
        <div className="button-container">
          <Link to="/login"><button>Login</button></Link>
          <Link to="/signup"><button>Sign up</button></Link>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;

