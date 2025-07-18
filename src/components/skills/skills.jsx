import React, { useState } from 'react';
import { 
  FaReact, 
  FaCss3Alt, 
  FaHtml5, 
  FaNodeJs, 
  FaPhp, 
  FaDatabase, 
  FaNpm, 
  FaYarn, 
  FaGit, 
  FaGithub, 
  FaCode, 
  FaFigma, 
  FaServer, 
  FaTools, 
  FaFeather 
} from 'react-icons/fa';
import { 
  SiVite, 
  SiChartdotjs, 
  SiPostgresql, 
  SiFirebase, 
  SiMysql, 
  SiPostman, 
  SiXampp, 
  SiCloudinary,
  SiJavascript 
} from 'react-icons/si';
import styles from './skills.module.css';
import { motion } from 'framer-motion';

function useIsMobile(breakpoint = 768) {
  const [isMobile, setIsMobile] = React.useState(window.innerWidth <= breakpoint);
  React.useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= breakpoint);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [breakpoint]);
  return isMobile;
}

function Skills() {
  const isMobile = useIsMobile();
  const skillCategories = [
    {
      name: 'Frontend',
      icon: <FaCode />,
      skills: [
        { name: 'React JS', icon: <FaReact />, level: 'Novice' },
        { name: 'JavaScript', icon: <SiJavascript />, level: 'Novice' },
        { name: 'CSS', icon: <FaCss3Alt />, level: 'Novice' },
        { name: 'Chart JS', icon: <SiChartdotjs />, level: 'Intermediate' },
        { name: 'Vite', icon: <SiVite />, level: 'Intermediate' },
        { name: 'HTML5', icon: <FaHtml5 />, level: 'Novice' }
      ]
    },
    {
      name: 'Backend',
      icon: <FaServer />,
      skills: [
        { name: 'Node JS', icon: <FaNodeJs />, level: 'Intermediate' },
        { name: 'Feather JS', icon: <FaFeather />, level: 'Novice' },
        { name: 'PHP', icon: <FaPhp />, level: 'Intermediate' }
      ]
    },
    {
      name: 'Database',
      icon: <FaDatabase />,
      skills: [
        { name: 'PostgreSQL', icon: <SiPostgresql />, level: 'Intermediate' },
        { name: 'Firebase', icon: <SiFirebase />, level: 'Intermediate' },
        { name: 'MySQL', icon: <SiMysql />, level: 'Intermediate' }
      ]
    },
    {
      name: 'Other Tools',
      icon: <FaTools />,
      skills: [
        { name: 'NPM', icon: <FaNpm />, level: 'Intermediate' },
        { name: 'Yarn', icon: <FaYarn />, level: 'Intermediate' },
        { name: 'Git', icon: <FaGit />, level: 'Intermediate' },
        { name: 'Github', icon: <FaGithub />, level: 'Intermediate' },
        { name: 'VS Code', icon: <FaCode />, level: 'Advanced' },
        { name: 'Postman', icon: <SiPostman />, level: 'Intermediate' },
        { name: 'Xampp', icon: <SiXampp />, level: 'Intermediate' },
        { name: 'Figma', icon: <FaFigma />, level: 'Novice' },
        { name: 'Cloudinary', icon: <SiCloudinary />, level: 'Novice' }
      ]
    }
  ];

  const [activeCategoryIndex, setActiveCategoryIndex] = useState(0);

  return (
    <motion.section
      className={styles.skillsContainer}
      id="skills"
      initial={isMobile ? false : { opacity: 0, x: -80 }}
      animate={isMobile ? false : { opacity: 1, x: 0 }}
      whileInView={isMobile ? false : { opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={isMobile ? { duration: 0 } : { duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
    >
      <div className={styles.skillsWrapper}>
        <div className={styles.header}>
          <h2>Skills</h2>
          <p>Tools and technologies I've mastered or currently exploring.</p>
        </div>
        
        <div className={styles.tabContainer}>
          {skillCategories.map((category, index) => (
            <button 
              key={index}
              className={`${styles.tab} ${activeCategoryIndex === index ? styles.activeTab : ''}`}
              onClick={() => setActiveCategoryIndex(index)}
            >
              {category.icon}
              <span>{category.name}</span>
            </button>
          ))}
        </div>

        <div className={styles.skillsGrid}>
          {skillCategories[activeCategoryIndex].skills.map((skill, index) => (
            <div key={index} className={styles.skillCard}>
              <div className={styles.skillIcon}>
                {skill.icon}
              </div>
              <h3>{skill.name}</h3>
              <span className={styles.skillLevel}>{skill.level}</span>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}

export default Skills;