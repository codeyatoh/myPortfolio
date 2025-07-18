import React from 'react';
import { FaUser, FaEye, FaCalendarAlt, FaMapMarkerAlt, FaEnvelope, FaGraduationCap, FaPhone, FaUserTie, FaDownload } from 'react-icons/fa';
import styles from './about.module.css';
import profileImg from '../../assets/images/yatoh.dev-1.jpg';
import { motion } from 'framer-motion';
import toast from 'react-hot-toast';

function useIsMobile(breakpoint = 768) {
  const [isMobile, setIsMobile] = React.useState(window.innerWidth <= breakpoint);
  React.useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= breakpoint);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [breakpoint]);
  return isMobile;
}

function About() {
  const isMobile = useIsMobile();
  return (
    <motion.section
      id="about"
      initial={isMobile ? false : { opacity: 0, x: 80 }}
      animate={isMobile ? false : { opacity: 1, x: 0 }}
      whileInView={isMobile ? false : { opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={isMobile ? { duration: 0 } : { duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
      className={styles.container}
    >
      <div className={styles.wrapper}>
        {/* Header */}
        <div className={styles.header}>
          <h1 className={styles.title}>About Me</h1>
          <p className={styles.subtitle}>
            Discover my journey, passions, and the story behind my work
          </p>
        </div>

        {/* Main Content */}
        <div className={styles.mainContent}>
          {/* Profile Image */}
          <div className={styles.profileSection}>
            <div className={styles.profileImage}>
              <img src={profileImg} alt="Angelito Halmain" />
            </div>
          </div>

          {/* Content Grid */}
          <div className={styles.contentGrid}>
            {/* Who Am I */}
            <div className={styles.card}>
              <div className={styles.cardHeader}>
                <FaUser className={styles.cardIcon} />
                <h3 className={styles.cardTitle}>Who Am I</h3>
              </div>
              <p className={styles.cardText}>
                I'm a beginner web developer and IT student learning HTML, CSS, and JavaScript. I enjoy building simple, responsive websites.
              </p>
            </div>

            {/* My Approach */}
            <div className={styles.card}>
              <div className={styles.cardHeader}>
                <FaEye className={styles.cardIcon} />
                <h3 className={styles.cardTitle}>My Approach</h3>
              </div>
              <p className={styles.cardText}>
                I learn by building. I focus on clean design, basic functionality, and improving step by step.
              </p>
            </div>

            {/* Personal Info Header */}
            <div className={styles.personalInfoHeader}>
              <div className={styles.personalInfoTitle}>
                <FaUserTie className={styles.personalInfoIcon} />
                <h3 className={styles.personalInfoHeading}>Personal Info</h3>
              </div>
            </div>

            {/* Personal Info Grid */}
            <div className={styles.personalInfoGrid}>
              {/* Name */}
              <div className={styles.infoItem}>
                <div className={styles.infoIcon}>
                  <FaUser />
                </div>
                <div className={styles.infoContent}>
                  <p className={styles.infoLabel}>Name:</p>
                  <p className={styles.infoValue}>Angelito Halmain</p>
                </div>
              </div>

              {/* Place of Birth */}
              <div className={styles.infoItem}>
                <div className={styles.infoIcon}>
                  <FaMapMarkerAlt />
                </div>
                <div className={styles.infoContent}>
                  <p className={styles.infoLabel}>Place of Birth:</p>
                  <p className={styles.infoValue}>Zamboanga City, Philippines</p>
                </div>
              </div>

              {/* Phone */}
              <div className={styles.infoItem}>
                <div className={styles.infoIcon}>
                  <FaPhone />
                </div>
                <div className={styles.infoContent}>
                  <p className={styles.infoLabel}>Phone:</p>
                  <p className={styles.infoValue}>+63 906 965 7558</p>
                </div>
              </div>

              {/* GWA */}
              <div className={styles.infoItem}>
                <div className={styles.infoIcon}>
                  <FaUserTie />
                </div>
                <div className={styles.infoContent}>
                  <p className={styles.infoLabel}>GWA:</p>
                  <p className={styles.infoValue}>1.26/2.25</p>
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div className={styles.personalInfoGrid}>
              {/* Date of Birth */}
              <div className={styles.infoItem}>
                <div className={styles.infoIcon}>
                  <FaCalendarAlt />
                </div>
                <div className={styles.infoContent}>
                  <p className={styles.infoLabel}>Date of Birth:</p>
                  <p className={styles.infoValue}>October 18, 2000</p>
                </div>
              </div>

              {/* Email */}
              <div className={styles.infoItem}>
                <div className={styles.infoIcon}>
                  <FaEnvelope />
                </div>
                <div className={styles.infoContent}>
                  <p className={styles.infoLabel}>Email:</p>
                  <p className={styles.infoValue}>a.halmain.official@gmail.com</p>
                </div>
              </div>

              {/* Education */}
              <div className={styles.infoItem}>
                <div className={styles.infoIcon}>
                  <FaGraduationCap />
                </div>
                <div className={styles.infoContent}>
                  <p className={styles.infoLabel}>Education:</p>
                  <p className={styles.infoValue}>Zamboanga Peninsula Polytechnique State University</p>
                </div>
              </div>
            </div>

            {/* Download Resume Button - now outside the info grid, aligned left but centered on mobile */}
            <div className={styles.downloadButtonContainer} style={{ gridColumn: '1 / 2' }}>
              <a
                href="/Angelito-Halmain-Resume.pdf"
                download
                className={styles.downloadButton}
                onClick={e => {
                  toast.success('Resume downloaded successfully!', {
                    style: {
                      background: '#343434',
                      color: '#E6B31E',
                      fontFamily: 'Poppins, sans-serif',
                      fontWeight: 600,
                      fontSize: '1.1rem',
                      border: '2px solid #E6B31E',
                      borderRadius: '1rem',
                      boxShadow: '0 4px 16px rgba(230, 179, 30, 0.10)',
                    },
                    iconTheme: {
                      primary: '#22c55e',
                      secondary: '#343434',
                    },
                  });
                }}
              >
                <FaDownload />
                Download My Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}

export default About;