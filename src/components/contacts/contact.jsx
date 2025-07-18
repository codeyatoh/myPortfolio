import React from 'react';
import { 
  FaEnvelope, 
  FaPhone, 
  FaGithub, 
  FaFacebookF, 
  FaInstagram, 
  FaTwitter, 
  FaLinkedinIn, 
  FaYoutube,
  FaDribbble 
} from 'react-icons/fa';
import styles from './contacts.module.css';
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

function Contact() {
  const isMobile = useIsMobile();
  return (
    <motion.div
      id="contacts"
      className={styles.contactContainer}
      initial={isMobile ? false : { opacity: 0, y: -80 }}
      whileInView={isMobile ? false : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={isMobile ? { duration: 0 } : { duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
    >
      <div className={styles.content}>
        <div className={styles.header}>
          <p className={styles.subtitle}>Your cup of tea?</p>
          <h2 className={styles.title}>Let's start</h2>
        </div>

        <div className={styles.contactInfo}>
          <div className={styles.contactItem}>
            <FaEnvelope className={styles.icon} />
            <a href="mailto:a.halmain.official@gmail.com" className={styles.emailLink} target="_blank" rel="noopener noreferrer">
              hello@yatoh.dev
            </a>
          </div>

          <a
            href="mailto:a.halmain.official@gmail.com?subject=Request%20for%20Quote"
            className={styles.quoteButton}
            target="_blank"
            rel="noopener noreferrer"
          >
            Get a quote
          </a>

          <div className={styles.contactItem}>
            <FaPhone className={styles.icon} />
            <div className={styles.phoneInfo}>
              <span>+63 906 965 7658</span>
              <small>Zamboanga Peninsula / Philippines / Asia (PHT)</small>
            </div>
          </div>
        </div>

        <div className={styles.divider}></div>

        <div className={styles.socialLinks}>
          <a href="https://github.com/codeyatoh" className={styles.socialLink} aria-label="Github" target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </a>
          <a href="https://dribbble.com/hlmnyatoh" className={styles.socialLink} aria-label="Dribbble" target="_blank" rel="noopener noreferrer">
            <FaDribbble />
          </a>
          <a href="https://www.facebook.com/0xYatoh/" className={styles.socialLink} aria-label="Facebook" target="_blank" rel="noopener noreferrer">
            <FaFacebookF />
          </a>
          <a href="https://www.instagram.com/hlmnyatoh_/" className={styles.socialLink} aria-label="Instagram" target="_blank" rel="noopener noreferrer">
            <FaInstagram />
          </a>
          <a href="https://x.com/bossyatoh" className={styles.socialLink} aria-label="Twitter" target="_blank" rel="noopener noreferrer">
            <FaTwitter />
          </a>
          <a href="https://www.linkedin.com/in/bossyatoh/" className={styles.socialLink} aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
            <FaLinkedinIn />
          </a>
          <a href="https://www.youtube.com/@codeyatoh" className={styles.socialLink} aria-label="YouTube" target="_blank" rel="noopener noreferrer">
            <FaYoutube />
          </a>
        </div>
      </div>
    </motion.div>
  );
}

export default Contact;