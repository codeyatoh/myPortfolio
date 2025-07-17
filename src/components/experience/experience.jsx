import React from 'react';
import { FaCode, FaCheck, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import styles from './experience.module.css';
import { motion } from 'framer-motion';
import calarianBarangayHallImg from '../../assets/images/CalarianBarangayHall.jpg';
import zppsuImg from '../../assets/images/ZPPSU.jpg';
import axztechITSolutionImg from '../../assets/images/AxztechITSolution.png';

function useIsMobile(breakpoint = 768) {
  const [isMobile, setIsMobile] = React.useState(window.innerWidth <= breakpoint);
  React.useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= breakpoint);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [breakpoint]);
  return isMobile;
}

const experiences = [
  {
    id: 1,
    title: 'Immersion Intern',
    subtitle: 'Southern City Colleges',
    year: '2019 • On-site • Upper Calarian Barangay Hall',
    image: calarianBarangayHallImg,
    responsibilities: [
      'Assisted in organizing and maintaining barangay records',
      'Performed data encoding and basic office clerical tasks',
      'Helped manage visitor attendance and cleanliness of the office',
    ],
    techStack: ['Data Entry & Encoding', 'Office Organization', 'Public Assistance'],
  },
  {
    id: 2,
    title: 'Practicum Intern',
    subtitle: 'Zamboanga Peninsula Polytechnic State University',
    year: "2024 • On-site • Registrar's Office",
    image: zppsuImg,
    responsibilities: [
      'Evaluated student grades for accuracy and completeness',
      'Sealed official school documents for processing',
      'Organized and maintained academic records for efficient document handling',
    ],
    techStack: ['Records Evaluation', 'Document Processing', 'Office Administration'],
  },
  {
    id: 3,
    title: 'Web Development Intern',
    subtitle: 'AXZTech IT Solution',
    year: '2025 • Present • Remote',
    image: axztechITSolutionImg,
    responsibilities: [
      'Collaborated on weekly web application and system development tasks',
      'Took on rotating roles such as UI/UX designer, front-end developer, and back-end developer',
      'Contributed to both design and code implementation to meet client or project requirements',
    ],
    techStack: ['React.js', 'Node.js', 'Figma', 'Git & GitHub', 'REST API', 'CSS/SCSS'],
  },
];

function Experience() {
  const isMobile = useIsMobile();
  const [currentIndex, setCurrentIndex] = React.useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? experiences.length - 1 : prev - 1));
  };
  const handleNext = () => {
    setCurrentIndex((prev) => (prev === experiences.length - 1 ? 0 : prev + 1));
  };

  React.useEffect(() => {
    if (currentIndex >= experiences.length) setCurrentIndex(0);
  }, [experiences.length, currentIndex]);

  return (
    <motion.section
      className={styles.experienceSection}
      id="experience"
      initial={{ x: 100, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
    >
      <div className={styles.experienceWrapper}>
        <div className={styles.headerSection}>
          {isMobile ? (
            <>
              <div className={styles.headerContent}>
                <h1 className={styles.title}>Experience</h1>
                <p className={styles.subtitle}>
                  A glimpse of where I've been — from work experience to organizational life that shaped who I am.
                </p>
              </div>
              <div className={styles.mobileArrows}>
                <button className={styles.navButton} onClick={handlePrev} aria-label="Previous experience">
                  <FaChevronLeft />
                </button>
                <button className={styles.navButton} onClick={handleNext} aria-label="Next experience">
                  <FaChevronRight />
                </button>
              </div>
            </>
          ) : (
            <>
              <button className={styles.navButton} onClick={handlePrev} aria-label="Previous experience">
                <FaChevronLeft />
              </button>
              <div className={styles.headerContent}>
                <h1 className={styles.title}>Experience</h1>
                <p className={styles.subtitle}>
                  A glimpse of where I've been — from work experience to organizational life that shaped who I am.
                </p>
              </div>
              <button className={styles.navButton} onClick={handleNext} aria-label="Next experience">
                <FaChevronRight />
              </button>
            </>
          )}
        </div>
        <div className={styles.experienceGrid}>
          {isMobile ? (
            <div className={styles.experienceCard}>
              <div className={styles.experienceImage}>
                <img src={experiences[currentIndex].image} alt={experiences[currentIndex].title} />
              </div>
              <div className={styles.experienceContent}>
                <div className={styles.experienceHeader}>
                  <h3 className={styles.experienceTitle}>
                    <FaCode style={{ marginRight: '0.5rem', verticalAlign: 'middle' }} />
                    {experiences[currentIndex].title}
                  </h3>
                  <p className={styles.experienceSubtitle}>{experiences[currentIndex].subtitle}</p>
                  <p className={styles.experienceYear}>{experiences[currentIndex].year}</p>
                </div>
                <div className={styles.responsibilitiesSection}>
                  <h4 className={styles.responsibilitiesTitle}>Responsibilities:</h4>
                  <ul className={styles.responsibilitiesList}>
                    {experiences[currentIndex].responsibilities.map((item, idx) => (
                      <li key={idx} className={styles.responsibilityItem}>
                        <FaCheck className={styles.checkIcon} />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className={styles.techSection}>
                  <h4 className={styles.techTitle}>Tech Stack:</h4>
                  <div className={styles.techTags}>
                    {experiences[currentIndex].techStack.map((tech, idx) => (
                      <span key={idx} className={styles.techTag}>{tech}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ) : (
            experiences.map((exp) => (
              <div key={exp.id} className={styles.experienceCard}>
                <div className={styles.experienceImage}>
                  <img src={exp.image} alt={exp.title} />
                </div>
                <div className={styles.experienceContent}>
                  <div className={styles.experienceHeader}>
                    <h3 className={styles.experienceTitle}>
                      <FaCode style={{ marginRight: '0.5rem', verticalAlign: 'middle' }} />
                      {exp.title}
                    </h3>
                    <p className={styles.experienceSubtitle}>{exp.subtitle}</p>
                    <p className={styles.experienceYear}>{exp.year}</p>
                  </div>
                  <div className={styles.responsibilitiesSection}>
                    <h4 className={styles.responsibilitiesTitle}>Responsibilities:</h4>
                    <ul className={styles.responsibilitiesList}>
                      {exp.responsibilities.map((item, idx) => (
                        <li key={idx} className={styles.responsibilityItem}>
                          <FaCheck className={styles.checkIcon} />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className={styles.techSection}>
                    <h4 className={styles.techTitle}>Tech Stack:</h4>
                    <div className={styles.techTags}>
                      {exp.techStack.map((tech, idx) => (
                        <span key={idx} className={styles.techTag}>{tech}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </motion.section>
  );
}

export default Experience;
