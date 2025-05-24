import React, { useRef, useState, useEffect } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import "./EduValt.css";
import Edu from "./Edu.svg";

function EduValt() {
  const shouldReduceMotion = useReducedMotion();
  const [isDesktop, setIsDesktop] = useState(true);
  const contentRef = useRef(null);
  const isInView = useInView(contentRef, { amount: 0.3, once: true }); // One-time animation

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
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  const imageVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  const textVariants = {
    hidden: { x: 20, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  const tagVariants = {
    hidden: { scale: 0.9, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { duration: 0.4, ease: "easeOut" },
    },
  };

  const footerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" },
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
        aria-label="Edu Vault Section"
      >
        <motion.div className="EduValt-title" variants={titleVariants}>
          Edu Vault
        </motion.div>
        <div className="EduValt-content" ref={contentRef}>
          <motion.div
            className="EduValt-text-and-tag-container"
            variants={textVariants}
          >
            Unisphere gives students easy access to e-books, notes, and other
            resources at a minimal cost — all in one place.
            <div className="EduValt-tag-container">
              {tags.map((tag, index) => (
                <motion.div
                  key={tag.text}
                  className="EduValt-each-tag"
                  variants={tagVariants}
                  custom={index}
                >
                  <span className="EduValt-tag-text">{tag.text}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
          <div className="EduValt-image-container">
            <motion.img
              className="EduValt-image"
              src={Edu}
              alt="Edu Vault feature"
              variants={imageVariants}
              aria-label="Edu Vault feature illustration"
            />
          </div>
        </div>
        <motion.div className="EduValt-footer-text" variants={footerVariants}>
          Your Path to Smarter Learning
        </motion.div>
      </motion.div>

      <motion.div
        className="mobile-EduValt-container"
        variants={containerVariants}
        initial="hidden"
        animate={isInView && !shouldReduceMotion ? "visible" : "hidden"}
        aria-label="Edu Vault Mobile Section"
      >
        <motion.div className="mobile-EduValt-title" variants={titleVariants}>
          Edu Vault
        </motion.div>
        <div className="mobile-EduValt-content" ref={contentRef}>
          <div className="mobile-EduValt-image-container">
            <motion.img
              className="mobile-EduValt-image"
              src={Edu}
              alt="Edu Vault feature"
              variants={imageVariants}
              aria-label="Edu Vault feature illustration"
            />
          </div>
          <motion.div
            className="mobile-EduValt-text-and-tag-container"
            variants={textVariants}
          >
            <div className="mobile-EduValt-tag-container">
              {tags.map((tag, index) => (
                <motion.div
                  key={tag.text}
                  className="mobile-EduValt-each-tag"
                  variants={tagVariants}
                  custom={index}
                >
                  <span className="mobile-EduValt-tag-text">{tag.text}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
          <motion.div
            className="mobile-EduValt-footer-text"
            variants={footerVariants}
          >
            Your Path to Smarter Learning
          </motion.div>
          <motion.p
            className="mobile-EduValt-text-description"
            variants={textVariants}
          >
            Unisphere gives students easy access to e-books, notes, and other
            resources at a minimal cost — all in one place.
          </motion.p>
        </div>
      </motion.div>
    </>
  );
}

export default EduValt;