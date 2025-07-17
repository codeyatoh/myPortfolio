import React, { useState } from 'react';
import { FaChevronLeft, FaChevronRight, FaQuoteLeft } from 'react-icons/fa';
import styles from './Testimonials.module.css';
import { motion } from 'framer-motion';
import JChristianSapornoImg from '../../assets/images/JChristian.Saporno.jpg';
import JHaroldRuedaImg from '../../assets/images/JHarold.Rueda.jpg';

function useIsMobile(breakpoint = 768) {
  const [isMobile, setIsMobile] = React.useState(window.innerWidth <= breakpoint);
  React.useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= breakpoint);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [breakpoint]);
  return isMobile;
}

function Testimonials() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const isMobile = useIsMobile();

  const testimonials = [
    {
      id: 1,
      quote: "Cramming in coding is 90% asking AI for help, 5% praying it runs, and 1% actually knowing what you're doing.",
      name: "John Christian Saporno",
      position: "UI/UX Designer",
      image: JChristianSapornoImg
    },
    {
      id: 2,
      quote: "Working with this developer was an amazing experience. The code quality and attention to detail were exceptional.",
      name: "Jhon Harold Rueda",
      position: "Full Stack Developer",
      image: JHaroldRuedaImg
    }
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToTestimonial = (index) => {
    setCurrentTestimonial(index);
  };

  return (
    <motion.section
      className={styles.testimonialsContainer}
      id="testimonials"
      initial={{ x: 100, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
    >
      <div className={styles.testimonialsWrapper}>
        <div className={styles.header}>
          <h2>Testimonials</h2>
          <p>What others say about working with me</p>
        </div>
        {isMobile && (
          <div className={styles.mobileArrows}>
            <button 
              className={styles.navButton} 
              onClick={prevTestimonial}
              aria-label="Previous testimonial"
            >
              <FaChevronLeft />
            </button>
            <button 
              className={styles.navButton} 
              onClick={nextTestimonial}
              aria-label="Next testimonial"
            >
              <FaChevronRight />
            </button>
          </div>
        )}
        <div className={styles.testimonialWrapper}>
          {isMobile ? (
            <div className={styles.testimonialCard}>
              <div className={styles.quoteIcon}>
                <FaQuoteLeft />
              </div>
              <div className={styles.profileImage}>
                <img 
                  src={testimonials[currentTestimonial].image} 
                  alt={testimonials[currentTestimonial].name}
                  onError={(e) => {
                    e.target.style.display = 'none';
                  }}
                />
              </div>
              <div className={styles.testimonialContent}>
                <p className={styles.quote}>
                  "{testimonials[currentTestimonial].quote}"
                </p>
                <div className={styles.authorInfo}>
                  <h4 className={styles.authorName}>
                    {testimonials[currentTestimonial].name}
                  </h4>
                  <span className={styles.authorPosition}>
                    {testimonials[currentTestimonial].position}
                  </span>
                </div>
              </div>
            </div>
          ) : (
            <>
              <button 
                className={styles.navButton} 
                onClick={prevTestimonial}
                aria-label="Previous testimonial"
              >
                <FaChevronLeft />
              </button>
              <div className={styles.testimonialCard}>
                <div className={styles.quoteIcon}>
                  <FaQuoteLeft />
                </div>
                <div className={styles.profileImage}>
                  <img 
                    src={testimonials[currentTestimonial].image} 
                    alt={testimonials[currentTestimonial].name}
                    onError={(e) => {
                      e.target.style.display = 'none';
                    }}
                  />
                </div>
                <div className={styles.testimonialContent}>
                  <p className={styles.quote}>
                    "{testimonials[currentTestimonial].quote}"
                  </p>
                  <div className={styles.authorInfo}>
                    <h4 className={styles.authorName}>
                      {testimonials[currentTestimonial].name}
                    </h4>
                    <span className={styles.authorPosition}>
                      {testimonials[currentTestimonial].position}
                    </span>
                  </div>
                </div>
              </div>
              <button 
                className={styles.navButton} 
                onClick={nextTestimonial}
                aria-label="Next testimonial"
              >
                <FaChevronRight />
              </button>
            </>
          )}
        </div>
        <div className={styles.dots}>
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`${styles.dot} ${index === currentTestimonial ? styles.activeDot : ''}`}
              onClick={() => goToTestimonial(index)}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </motion.section>
  );
}

export default Testimonials;