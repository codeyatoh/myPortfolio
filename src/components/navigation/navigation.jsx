import React, { useState, useEffect } from 'react';

import { 
  AiOutlineHome, 
  AiOutlineUser, 
  AiOutlineProject, 
  AiOutlineExperiment,
  AiOutlineTool,
  AiOutlineMessage,
  AiOutlinePhone
} from 'react-icons/ai';
import styles from './navigation.module.css';

const Navigation = () => {
  const [activeSection, setActiveSection] = useState('home');

  const navItems = [
    { id: 'home', label: 'HOME', icon: AiOutlineHome },
    { id: 'about', label: 'ABOUT ME', icon: AiOutlineUser },
    { id: 'projects', label: 'PROJECTS', icon: AiOutlineProject },
    { id: 'experience', label: 'EXPERIENCE', icon: AiOutlineExperiment },
    { id: 'skills', label: 'SKILLS', icon: AiOutlineTool },
    { id: 'testimonials', label: 'TESTIMONIALS', icon: AiOutlineMessage },
    { id: 'contacts', label: 'CONTACTS', icon: AiOutlinePhone }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navItems[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const activeItem = navItems.find(item => item.id === activeSection);

  return (
    <div className={styles.bottomNavigationWrapper}>
      {/* Floating label above nav bar, always centered */}
      {activeItem && (
        <div className={styles.floatingNavLabel}>
          {activeItem.label}
        </div>
      )}
      <nav className={styles.bottomNavigation}>
        <div className={styles.navContainer}>
          {navItems.map((item) => {
            const IconComponent = item.icon;
            return (
              <button
                key={item.id}
                className={[
                  styles.navItem,
                  activeSection === item.id ? styles.active : '',
                ].filter(Boolean).join(' ')}
                onClick={() => handleNavClick(item.id)}
              >
                <IconComponent className={styles.navIcon} />
                {/* Hide label under icon */}
                {/* <span className={styles.navLabel}>{item.label}</span> */}
              </button>
            );
          })}
        </div>
      </nav>
    </div>
  );
};

export default Navigation;