import React from 'react';
import { 
  FaChevronLeft, 
  FaChevronRight, 
  FaExternalLinkAlt, 
  FaCode,
  FaCheck
} from 'react-icons/fa';
import styles from './projects.module.css';
import { motion } from 'framer-motion';
import studentManagementImg from '../../assets/images/studentManagement.png';
import orderingManagementImg from '../../assets/images/OrderingManagement.png';
import executiveDashboardImg from '../../assets/images/ExecutiveDashboard.png';
import myPortfolioImg from '../../assets/images/MyPortfolio.jpg';

function useIsMobile(breakpoint = 768) {
  const [isMobile, setIsMobile] = React.useState(window.innerWidth <= breakpoint);
  React.useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= breakpoint);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [breakpoint]);
  return isMobile;
}

function Projects() {
  const projects = [
    {
      id: 1,
      title: "Student Management System",
      description: "Backend • 2025 • Completed",
      image: studentManagementImg,
      features: [
        "Admin-only access",
        "Manage student records",
        "Add, edit, delete student info",
        "View subjects and class details"
      ],
      techStack: ["React + Vite", "CSS", "Firebase"],
      demoLink: "#",
      codeLink: "#"
    },
    {
      id: 2,
      title: "Ordering Management System",
      description: "Frontend • 2025 • Completed",
      image: orderingManagementImg,
      features: [
        "Admin and crew roles",
        "Manage menu, orders, and payments",
        "Dashboard with sales analytics",
        "Receipt printing support"
      ],
      techStack: ["React + Vite", "CSS", "Firebase", "ChartJS"],
      demoLink: "#",
      codeLink: "#"
    },
    {
      id: 3,
      title: "Executive Dashboard",
      description: "Backend • 2025 • Completed",
      image: executiveDashboardImg,
      features: [
        "API for sales, orders, and crew data",
        "Handles secure data transactions",
        "Supports frontend dashboard analytics"
      ],
      techStack: ["FeathersJS", "PostgreSQL"],
      demoLink: "#",
      codeLink: "#"
    },
    {
      id: 4,
      title: "Personal Portfolio Website",
      description: "Fullstack • 2025 • Live",
      image: myPortfolioImg,
      features: [
        "Modern, responsive design",
        "Animated transitions using Framer Motion",
        "Project showcase and carousel",
        "Downloadable resume",
        "Contact form and social links",
        "Toast notifications for user feedback",
        "Mobile-friendly navigation"
      ],
      techStack: ["React + Vite", "CSS Modules", "Framer Motion", "react-hot-toast", "react-icons"],
      demoLink: "#home",
      codeLink: "https://github.com/codeyatoh/myPortfolio"
    }
  ];

  const isMobile = useIsMobile();
  const [currentIndex, setCurrentIndex] = React.useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
  };
  const handleNext = () => {
    setCurrentIndex((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
  };

  React.useEffect(() => {
    // Reset index if projects length changes
    if (currentIndex >= projects.length) setCurrentIndex(0);
  }, [projects.length, currentIndex]);

  return (
    <motion.div
      className={styles.projectsContainer}
      initial={{ x: -100, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
    >
      <div className={styles.projectsWrapper}>
        {/* Header */}
        <div className={styles.headerSection}>
          {isMobile ? (
            <>
              <div className={styles.headerContent}>
                <h1 className={styles.title}>Projects</h1>
                <p className={styles.subtitle}>
                  Explore some of the works I've built — from slick frontend UIs, powerful backend APIs, to 
                  fullstack apps connected with real-time databases.
                </p>
              </div>
              <div className={styles.mobileArrows}>
                <button className={styles.navButton} onClick={handlePrev} aria-label="Previous project">
                  <FaChevronLeft />
                </button>
                <button className={styles.navButton} onClick={handleNext} aria-label="Next project">
                  <FaChevronRight />
                </button>
              </div>
            </>
          ) : (
            <>
              <button className={styles.navButton} onClick={handlePrev} aria-label="Previous project">
                <FaChevronLeft />
              </button>
              <div className={styles.headerContent}>
                <h1 className={styles.title}>Projects</h1>
                <p className={styles.subtitle}>
                  Explore some of the works I've built — from slick frontend UIs, powerful backend APIs, to 
                  fullstack apps connected with real-time databases.
                </p>
              </div>
              <button className={styles.navButton} onClick={handleNext} aria-label="Next project">
                <FaChevronRight />
              </button>
            </>
          )}
        </div>

        {/* Projects Grid / Carousel */}
        <div className={styles.projectsGrid}>
          {isMobile ? (
            <div className={styles.projectCard}>
              {/* Project Image */}
              <div className={styles.projectImage}>
                <img src={projects[currentIndex].image} alt={projects[currentIndex].title} />
              </div>
              {/* Project Content */}
              <div className={styles.projectContent}>
                <div className={styles.projectHeader}>
                  <h3 className={styles.projectTitle}>
                    <FaCode style={{ marginRight: '0.5rem', verticalAlign: 'middle' }} />
                    {projects[currentIndex].title}
                  </h3>
                  <p className={styles.projectDescription}>{projects[currentIndex].description}</p>
                </div>
                {/* Features */}
                <div className={styles.featuresSection}>
                  <h4 className={styles.featuresTitle}>Features:</h4>
                  <ul className={styles.featuresList}>
                    {projects[currentIndex].features.map((feature, index) => (
                      <li key={index} className={styles.featureItem}>
                        <FaCheck className={styles.checkIcon} />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                {/* Tech Stack */}
                <div className={styles.techSection}>
                  <h4 className={styles.techTitle}>Tech Stack:</h4>
                  <div className={styles.techTags}>
                    {projects[currentIndex].techStack.map((tech, index) => (
                      <span key={index} className={styles.techTag}>
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                {/* Action Buttons */}
                <div className={styles.actionButtons}>
                  <button className={styles.demoButton}>
                    <span>Demo</span>
                    <FaExternalLinkAlt />
                  </button>
                  <button className={styles.codeButton}>
                    <span>Code</span>
                    <FaCode />
                  </button>
                </div>
              </div>
            </div>
          ) : (
            (() => {
              // Show only 3 projects at a time, starting from currentIndex
              const visibleProjects = [];
              for (let i = 0; i < 3; i++) {
                const idx = (currentIndex + i) % projects.length;
                visibleProjects.push(projects[idx]);
              }
              return visibleProjects.map((project) => (
                <div key={project.id} className={styles.projectCard}>
                  {/* Project Image */}
                  <div className={styles.projectImage}>
                    <img src={project.image} alt={project.title} />
                  </div>
                  {/* Project Content */}
                  <div className={styles.projectContent}>
                    <div className={styles.projectHeader}>
                      <h3 className={styles.projectTitle}>
                        <FaCode style={{ marginRight: '0.5rem', verticalAlign: 'middle' }} />
                        {project.title}
                      </h3>
                      <p className={styles.projectDescription}>{project.description}</p>
                    </div>
                    {/* Features */}
                    <div className={styles.featuresSection}>
                      <h4 className={styles.featuresTitle}>Features:</h4>
                      <ul className={styles.featuresList}>
                        {project.features.map((feature, index) => (
                          <li key={index} className={styles.featureItem}>
                            <FaCheck className={styles.checkIcon} />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    {/* Tech Stack */}
                    <div className={styles.techSection}>
                      <h4 className={styles.techTitle}>Tech Stack:</h4>
                      <div className={styles.techTags}>
                        {project.techStack.map((tech, index) => (
                          <span key={index} className={styles.techTag}>
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                    {/* Action Buttons */}
                    <div className={styles.actionButtons}>
                      <button className={styles.demoButton}>
                        <span>Demo</span>
                        <FaExternalLinkAlt />
                      </button>
                      <button className={styles.codeButton}>
                        <span>Code</span>
                        <FaCode />
                      </button>
                    </div>
                  </div>
                </div>
              ));
            })()
          )}
        </div>
      </div>
    </motion.div>
  );
}

export default Projects;