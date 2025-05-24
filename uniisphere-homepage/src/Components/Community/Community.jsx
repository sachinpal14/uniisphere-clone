import React, { useRef } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import "./Community.css";
import communityImage from './communityImage.svg';

const Community = () => {
  const shouldReduceMotion = useReducedMotion();
  const contentRefDesktop = useRef(null);
  const contentRefMobile = useRef(null);
  const isInViewDesktop = useInView(contentRefDesktop, { amount: 0.3, once: true });
  const isInViewMobile = useInView(contentRefMobile, { amount: 0.3, once: true });

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
        className="uni-community-container"
        variants={containerVariants}
        initial="hidden"
        animate={isInViewDesktop && !shouldReduceMotion ? "visible" : "hidden"}
        aria-label="Community Section"
      >
        <motion.div className="uni-community-title" variants={titleVariants}>
          community
        </motion.div>
        <div className="uni-community-content" ref={contentRefDesktop}>
          <motion.div className="uni-community-text" variants={textVariants}>
            Uniisphere connects students with like-minded peers, creating a supportive community for learning and growth.
          </motion.div>
          <motion.div className="uni-community-image-container" variants={imageVariants}>
            <motion.img
              className="uni-community-image"
              src={communityImage}
              alt="community feature illustration"
              variants={imageVariants}
              aria-label="community feature illustration"
            />
          </motion.div>
        </div>
        <motion.div className="uni-community-footer" variants={footerVariants}>
          Find your tribe. Share your vibe
        </motion.div>
      </motion.div>

      <motion.div
        className="mobile-uni-community-container"
        variants={containerVariants}
        initial="hidden"
        animate={isInViewMobile && !shouldReduceMotion ? "visible" : "hidden"}
        aria-label="Community Section"
      >
        <motion.div className="mobile-uni-community-title" variants={titleVariants}>
          community
        </motion.div>
        <div className="mobile-uni-community-content" ref={contentRefMobile}>
          <motion.div className="mobile-uni-community-image-container" variants={imageVariants}>
            <motion.img
              className="mobile-uni-community-image"
              src={communityImage}
              alt="community feature illustration"
              variants={imageVariants}
              aria-label="community feature illustration"
            />
          </motion.div>
          <motion.div className="mobile-uni-community-footer" variants={footerVariants}>
            Find your tribe. Share your vibe
          </motion.div>
        </div>
        <motion.div className="mobile-uni-community-text" variants={textVariants}>
          Uniisphere connects students with like-minded peers, creating a supportive community for learning and growth.
        </motion.div>
      </motion.div>
    </>
  );
};

export default Community;