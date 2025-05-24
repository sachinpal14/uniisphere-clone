import React, { useRef } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import "./HumanLibrary.css";
import Image from "./image.svg";

function HumanLibrary() {
  const shouldReduceMotion = useReducedMotion();
  const contentRefDesktop = useRef(null);
  const contentRefMobile = useRef(null);
  const isInViewDesktop = useInView(contentRefDesktop, { amount: 0.3, once: true });
  const isInViewMobile = useInView(contentRefMobile, { amount: 0.3, once: true });

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
    <>
      <motion.div
        className="human-library-container"
        variants={containerVariants}
        initial="hidden"
        animate={isInViewDesktop && !shouldReduceMotion ? "visible" : "hidden"}
        aria-label="Human Library Section"
      >
        <motion.div className="human-library-title" variants={titleVariants}>
          HUMAN LIBRARY
        </motion.div>
        <div className="human-library-content" ref={contentRefDesktop}>
          <motion.div className="human-library-image-container" variants={imageVariants}>
           
          </motion.div>
          <motion.div className="human-library-text" variants={textVariants}>
            Uniisphere provides access to caring psychiatrists so students can speak freely and feel truly heard.
          </motion.div>
        </div>
        <motion.div className="human-library-footer" variants={footerVariants}>
          A Community That Cares About What <br /> You Feel and Who You Are
        </motion.div>
      </motion.div>

      <motion.div
        className="mobile-human-library-container"
        variants={containerVariants}
        initial="hidden"
        animate={isInViewMobile && !shouldReduceMotion ? "visible" : "hidden"}
        aria-label="Human Library Section"
      >
        <motion.div className="mobile-human-library-title" variants={titleVariants}>
          HUMAN LIBRARY
        </motion.div>
        <div className="mobile-human-library-content" ref={contentRefMobile}>
          <motion.div className="mobile-human-library-image-container" variants={imageVariants}>
            <motion.img
              className="mobile-human-library-image"
              src={Image}
              alt="Human Library feature illustration"
              variants={imageVariants}
              aria-label="Human Library feature illustration"
            />
          </motion.div>
          <motion.div className="mobile-human-library-footer" variants={footerVariants}>
            A Community That Cares About What <br /> You Feel and Who You Are
          </motion.div>
        </div>
        <motion.div className="mobile-human-library-text" variants={textVariants}>
          Uniisphere provides access to caring psychiatrists so students can speak freely and feel truly heard.
        </motion.div>
      </motion.div>
    </>
  );
}

export default HumanLibrary;