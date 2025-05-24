import React, { useRef, useState, useEffect } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import "./EduValt.css";
import tagImage from "./tagimage.svg";
import Images from './image.svg'
import { image } from "framer-motion/client";
import Edu from './Edu.svg'

function EduValt() {
  const shouldReduceMotion = useReducedMotion();
  const [isDesktop, setIsDesktop] = useState(true);
  const contentRef = useRef(null);
  const isInView = useInView(contentRef, { amount: 0.3, once: false });

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 769px)");
    setIsDesktop(mediaQuery.matches);
    const handleResize = () => setIsDesktop(mediaQuery.matches);
    mediaQuery.addEventListener("change", handleResize);
    return () => mediaQuery.removeEventListener("change", handleResize);
  }, []);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const titleVariants = {
    hidden: { y: -20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  const imageVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  const textVariants = {
    hidden: { x: 20, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  const tagVariants = {
    hidden: { scale: 0.9, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.4,
        ease: "easeOut",
      },
    },
  };

  const footerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  const tags = [
    { text: "E-books" },
    { text: "Notes", alt: "Notes tag" },
    { text: "References", alt: "References tag" },
    { text: "Novels", alt: "Novels tag" },
  ];

  return (

    <>  
      <motion.div
      className="EduValt-container"
      variants={containerVariants}
      initial="hidden"
      animate={isInView && !shouldReduceMotion ? "visible" : "hidden"}
      aria-label="Edu Valt Section"
    >
      <motion.div className="EduValt-title" variants={titleVariants}>
        Edu Vault
      </motion.div>
      <div className="EduValt-content" ref={contentRef}>
      
        <motion.div
          className="EduValt-text-and-tag-container"
          variants={textVariants}
        >
         Uniisphere gives students easy access to  E-Books, Notes and other resources at very minimal cost  - all in one place.
          <div className="EduValt-tag-container">
            {tags.map((tag, index) => (
              <motion.div
                key={tag.text}
                className="EduValt-each-tag"
                variants={tagVariants}
                custom={index}
              >
                
                <span className="Eduvalt-tag-text">{tag.text}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
          <div className="EduValt-image-container">
          <motion.img
            className="EduValt-image"
            src={Edu} // Replace with actual image.svg
            alt="Edu Valt feature"
            variants={imageVariants}
            aria-label="Edu Valt feature illustration"
          />
        </div>
      </div>
      
      <motion.div className="EduValt-footer-text" variants={footerVariants}>
        Your Path to Smarter Learning
      </motion.div>
    </motion.div>
      <motion.div
      className="Mobile-EduValt-container"
      variants={containerVariants}
      initial="hidden"
      animate={isInView && !shouldReduceMotion ? "visible" : "hidden"}
      aria-label="Edu Valt Section"
    >
      <motion.div className="Mobile-EduValt-title" variants={titleVariants}>
        Edu Vault
      </motion.div>
      <div className="Mobile-EduValt-content" ref={contentRef}>
      
        <motion.div
          className="Mobile-EduValt-text-and-tag-container"
          variants={textVariants}
        >
      <motion.div className="Mobile-EduValt-footer-text" variants={footerVariants}>
        Your Path to Smarter Learning
      </motion.div>
        
          <div className="Mobile-EduValt-tag-container">
            {tags.map((tag, index) => (
              <motion.div
                key={tag.text}
                className="Mobile-EduValt-each-tag"
                variants={tagVariants}
                custom={index}
              >
                
                <span className="Mobile-Eduvalt-tag-text">{tag.text}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
          <div className="Mobile-EduValt-image-container">
          <motion.img
            className="Mobile-EduValt-image"
            src={Edu} // Replace with actual image.svg
            alt="Edu Valt feature"
            variants={imageVariants}
            aria-label="Edu Valt feature illustration"
          />
        </div>
      </div>
       Uniisphere gives students easy access to  E-Books, Notes and other resources at very minimal cost  - all in one place.
    </motion.div>
    </>
  
  );
}

export default EduValt;
