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
    }
  ];

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
          <button className={styles.navButton}>
            <FaChevronLeft />
          </button>
          
          <div className={styles.headerContent}>
            <h1 className={styles.title}>Projects</h1>
            <p className={styles.subtitle}>
              Explore some of the works I've built — from slick frontend UIs, powerful backend APIs, to 
              fullstack apps connected with real-time databases.
            </p>
          </div>
          
          <button className={styles.navButton}>
            <FaChevronRight />
          </button>
        </div>

        {/* Projects Grid */}
        <div className={styles.projectsGrid}>
          {projects.map((project) => (
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
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default Projects;