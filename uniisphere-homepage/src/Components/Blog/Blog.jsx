import React, { useRef } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import "./Blog.css";
import BlogImage from './image.svg';
// import InternShipBackground from './InternShipBackground.svg'; // Import the second image

const Blog = () => {
  const shouldReduceMotion = useReducedMotion();
  
  const contentRef = useRef(null);
  const isInView = useInView(contentRef, { amount: 0.3, once: false });

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
      className="uni-blog-container"
      variants={containerVariants}
      initial="hidden"
      animate={isInView && !shouldReduceMotion ? "visible" : "hidden"}
      aria-label="Blog Section"
    >
      <motion.div className="uni-blog-title" variants={titleVariants}>
        V-Blogs
      </motion.div>
      <div className="uni-blog-content" ref={contentRef}>
        <motion.div className="uni-blog-text" variants={textVariants}>
          A Space for students to freely share their stories and personal experiences through long form videos and written content.
        </motion.div>
        <motion.div className="uni-blog-image-container" variants={imageVariants}>
          <motion.img
            className="uni-blog-image"
            src={BlogImage} // Foreground image
            alt="Blog feature illustration"
            variants={imageVariants}
            aria-label="Blog feature illustration"
          />
        </motion.div>
      </div>
      <motion.div className="uni-blog-footer" variants={footerVariants}>
        Building a Better Tomorrow by Supporting Communities Today
      </motion.div>
    </motion.div>
  );
};

export default Blog;