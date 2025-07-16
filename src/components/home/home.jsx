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
import styles from './home.module.css';
import profileImg from '../../assets/images/yatoh.dev.jpg';
import { motion } from 'framer-motion';

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
    <p className={[styles.subtitle, 'animateSlideInLeft', 'delay200'].join(' ')}>
      {displayed}
      <span className={styles.typewriterCursor}>|</span>
    </p>
  );
};

function Home() {
  return (
    <motion.section
      id="home"
      initial={{ opacity: 0, x: -80 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
      className={styles.portfolioContainer}
    >
      <div className={styles.portfolioWrapper}>
        <div className={styles.headerSection}>
          {/* Left Side - Profile Info */}
          <div className={styles.profileInfo}>
            <h1 className={styles.mainTitle}>
              Hi, I'm Angelito <br />
              Halmain 👋
            </h1>
            <Typewriter />
            
            <div className={styles.description}>
              <p>A beginner web developer learning HTML, CSS, and JavaScript.</p>
              <p>Passionate about building user-friendly</p>
              <p>websites and exploring both frontend and backend development.</p>
            </div>

            {/* Social Links */}
            <div className={styles.socialLinks}>
              <div className={styles.socialIcon}>
                <FaGithub />
              </div>
              <div className={styles.socialIcon}>
                <FaLinkedin />
              </div>
              <div className={styles.socialIcon}>
                <FaInstagram />
              </div>
              <div className={styles.socialIcon}>
                <FaTwitter />
              </div>
            </div>

            {/* Action Buttons */}
            <div className={styles.actionButtons}>
              <button className={styles.btnPrimary}>
                Explore My Projects
              </button>
              <button className={styles.btnSecondary}>
                <FaDownload />
                <span>Download My CV</span>
              </button>
            </div>

            {/* Quick Stats */}
            <div className={styles.quickStats}>
              <p className={styles.statsLabel}>Quick Stats:</p>
              <div className={styles.statsTags}>
                <div className={styles.statTag}>Learning Web Dev</div>
                <div className={styles.statTag}>IT Student</div>
                <div className={styles.statTag}>5+ Mini Projects</div>
                <div className={styles.statTag}>HTML, CSS, JS Basics</div>
              </div>
            </div>
          </div>

          {/* Right Side - Profile Image with Floating Elements */}
          <div className={styles.profileImageSection}>
            {/* Profile Image */}
            <div className={styles.profileImage}>
              <img 
                src={profileImg} 
                alt="Angelito Halmain" 
              />
            </div>

            {/* Floating Tech Icons - 4 lang */}
            <div className={[styles.floatingIcon, styles.floatingJavascript].join(' ')}>
              <FaJs />
            </div>
            <div className={[styles.floatingIcon, styles.floatingHtml].join(' ')}>
              <FaHtml5 />
            </div>
            <div className={[styles.floatingIcon, styles.floatingPostgresql].join(' ')}>
              <FaDatabase />
            </div>
            <div className={[styles.floatingIcon, styles.floatingReact].join(' ')}>
              <FaReact />
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}

export default Home;