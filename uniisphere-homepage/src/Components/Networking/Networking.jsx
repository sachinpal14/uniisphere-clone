import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import "./Networking.css";
import NetworkingBackground from "./NetwokingBackground.svg";
import NetworkingSVG from "./Networking.svg";

function Networking() {
  const contentRef = useRef(null);
  const isInView = useInView(contentRef, { amount: 0.3, once: true }); // One-time animation

  // Debug: Log isInView state
  console.log("Networking isInView:", isInView);

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

  const taglineVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <>
      <motion.div
        className="networking-container"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        aria-label="Networking Section"
        style={{ minHeight: "100vh" }} // Ensure visibility
      >
        <motion.h1
          className="Our-Features-homepage"
          variants={titleVariants}
        >
          Our Features
        </motion.h1>
        <motion.h1 className="networking-title" variants={titleVariants}>
          NETWORKING
        </motion.h1>
        <div className="networking-content" ref={contentRef}>
          <div className="networking-image-wrapper">
            <motion.img
              src={NetworkingSVG}
              alt="Networking Illustration"
              className="networking-illustration"
              variants={imageVariants}
              onError={() => console.error("Failed to load NetworkingSVG")}
            />
          </div>
          <motion.p
            className="networking-description"
            variants={textVariants}
          >
            Unisphere connects students across universities, making it easier to
            find peers who share your goals.
          </motion.p>
        </div>
        <motion.h3
          className="networking-tagline"
          variants={taglineVariants}
        >
          Because Real Connections Start With Familiar Vibes
        </motion.h3>
      </motion.div>

      <motion.div
        className="mobile-networking-container"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        aria-label="Mobile Networking Section"
      >
        <motion.h1
          className="mobile-Our-Features-homepage"
          variants={titleVariants}
        >
          Our Features
        </motion.h1>
        <motion.h1
          className="mobile-networking-title"
          variants={titleVariants}
        >
          NETWORKING
        </motion.h1>
        <div className="mobile-networking-content" ref={contentRef}>
          <div className="mobile-networking-image-wrapper">
            <motion.img
              src={NetworkingSVG}
              alt="Networking Illustration"
              className="mobile-networking-illustration"
              variants={imageVariants}
              onError={() => console.error("Failed to load NetworkingSVG (mobile)")}
            />
          </div>
          <motion.h3
            className="mobile-networking-tagline"
            variants={taglineVariants}
          >
            Because Real Connections Start With Familiar Vibes
          </motion.h3>
          <motion.p
            className="mobile-networking-description"
            variants={textVariants}
          >
            Unisphere connects students across universities, making it easier to
            find peers who share your goals.
          </motion.p>
        </div>
      </motion.div>
    </>
  );
}

export default Networking;