import React, { useState, useEffect } from 'react';
import { 
  FaGithub, 
  FaLinkedin, 
  FaInstagram, 
  FaTwitter,
  FaCog,
  FaDownload,
  FaJs,
  FaHtml5,
  FaDatabase,
  FaReact
} from 'react-icons/fa';
import './Home.css';
import profileImg from '../../assets/images/yatoh.dev.jpg';

// Typewriter component for subtitle
const Typewriter = () => {
  const text = 'Web Developer';
  const [displayed, setDisplayed] = useState('');
  const [deleting, setDeleting] = useState(false);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    let timeout;
    if (!deleting && index < text.length) {
      timeout = setTimeout(() => {
        setDisplayed(text.slice(0, index + 1));
        setIndex(index + 1);
      }, 120);
    } else if (deleting && index > 0) {
      timeout = setTimeout(() => {
        setDisplayed(text.slice(0, index - 1));
        setIndex(index - 1);
      }, 60);
    } else if (!deleting && index === text.length) {
      timeout = setTimeout(() => setDeleting(true), 1200);
    } else if (deleting && index === 0) {
      timeout = setTimeout(() => setDeleting(false), 500);
    }
    return () => clearTimeout(timeout);
  }, [index, deleting, text]);

  return (
    <p className="subtitle animate-slideInLeft delay-200">
      {displayed}
      <span className="typewriter-cursor">|</span>
    </p>
  );
};

function Home() {
  return (
    <div className="portfolio-container">
      <div className="portfolio-wrapper">
        <div className="header-section">
          {/* Left Side - Profile Info */}
          <div className="profile-info">
            <h1 className="main-title animate-slideInLeft">
              Hi, I'm Angelito <br />
              Halmain 👋
            </h1>
            <Typewriter />
            
            <div className="description animate-slideInLeft delay-300">
              <p>A beginner web developer learning HTML, CSS, and JavaScript.</p>
              <p>Passionate about building user-friendly</p>
              <p>websites and exploring both frontend and backend development.</p>
            </div>

            {/* Social Links */}
            <div className="social-links animate-slideInLeft delay-400">
              <div className="social-icon">
                <FaGithub />
              </div>
              <div className="social-icon">
                <FaLinkedin />
              </div>
              <div className="social-icon">
                <FaInstagram />
              </div>
              <div className="social-icon">
                <FaTwitter />
              </div>
            </div>

            {/* Action Buttons */}
            <div className="action-buttons animate-slideInLeft delay-500">
              <button className="btn-primary">
                Explore My Projects
              </button>
              <button className="btn-secondary">
                <FaDownload />
                <span>Download My CV</span>
              </button>
            </div>

            {/* Quick Stats */}
            <div className="quick-stats animate-slideInLeft delay-600">
              <p className="stats-label">Quick Stats:</p>
              <div className="stats-tags">
                <div className="stat-tag animate-fadeInUp delay-700">Learning Web Dev</div>
                <div className="stat-tag animate-fadeInUp delay-800">IT Student</div>
                <div className="stat-tag animate-fadeInUp delay-900">5+ Mini Projects</div>
                <div className="stat-tag animate-fadeInUp delay-1000">HTML, CSS, JS Basics</div>
              </div>
            </div>
          </div>

          {/* Right Side - Profile Image with Floating Elements */}
          <div className="profile-image-section animate-slideInRight">

            {/* Profile Image */}
            <div className="profile-image animate-scaleIn delay-300">
              <img 
                src={profileImg} 
                alt="Angelito Halmain" 
              />
            </div>

            {/* Floating Tech Icons - 4 lang */}
            <div className="floating-icon floating-javascript animate-float delay-400">
              <FaJs />
            </div>

            <div className="floating-icon floating-html animate-float delay-500">
              <FaHtml5 />
            </div>

            <div className="floating-icon floating-postgresql animate-float delay-600">
              <FaDatabase />
            </div>

            <div className="floating-icon floating-react animate-float delay-700">
              <FaReact />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;