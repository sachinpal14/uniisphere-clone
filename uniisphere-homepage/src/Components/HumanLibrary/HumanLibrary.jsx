import React, { useRef, useState, useEffect } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import "./HumanLibrary.css";
import Image from "./image.svg";


function HumanLibrary() {
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

  return (
    <motion.div
      className="human-library-container"
      variants={containerVariants}
      initial="hidden"
      animate={isInView && !shouldReduceMotion ? "visible" : "hidden"}
      aria-label="Human Library Section"
    >
      <motion.div className="human-library-title" variants={titleVariants}>
        HUMAN LIBRARY
      </motion.div>
      <div className="human-library-content" ref={contentRef}>
        <div className="human-library-image-container">
          
        </div>
        <motion.div className="human-library-text" variants={textVariants}>
          Uniisphere provides access to caring psychiatrists so students can speak freely and feel truly heard.

        </motion.div>
      </div>
      <motion.div className="human-library-footer" variants={footerVariants}>
        A Community That Cares About What <br /> You Feel and Who You Are
      </motion.div>
    </motion.div>
  );
}

export default HumanLibrary;