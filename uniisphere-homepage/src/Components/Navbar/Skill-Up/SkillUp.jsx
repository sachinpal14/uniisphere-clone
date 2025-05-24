import React from "react";
import SkillUpBackground from "./SkillUpBackground.svg";
import SkillUpImage from "./SkillUp.svg";
import "./SkillUp.css";

function SkillUp() {
  return (
    <>
      <div className="SkillUp-container">
        {/* Title */}
        <h1 className="SkillUp-title">SKILL UP</h1>

        {/* Content: Text on left, Image on right */}
        <div className="SkillUp-content">
          {/* Text on the left */}
          <p className="SkillUp-description">
            With unisphere, students can access hands on learning to build the
            skills needed for real world jobs.
          </p>

          {/* Image with Background */}
          <div className="SkillUp-image-container">
            <img
              src={SkillUpImage}
              alt="SkillUp Illustration"
              className="SkillUp-image"
            />
          </div>
        </div>

        {/* Footer below the image */}
        <h3 className="SkillUp-footer-text">
          Learn, Improve, and Evolve — <br /> One Step at a Time
        </h3>
      </div>

      <div className="mobile-SkillUp-container">
        {/* Title */}
        <h1 className="mobile-SkillUp-title">SKILL UP</h1>

        {/* Content: Text on left, Image on right */}
        <div className="mobile-SkillUp-content">
          {/* Image with Background */}
          <div className="mobile-SkillUp-image-container">
            <img
              src={SkillUpImage}
              alt="SkillUp Illustration"
              className="mobile-SkillUp-image"
            />
          </div>
          {/* Footer below the image */}
          <h3 className="mobile-SkillUp-footer-text">
            Learn, Improve, and Evolve — <br /> One Step at a Time
          </h3>
        </div>
        {/* Text on the left */}
        <p className="mobile-SkillUp-description">
          With unisphere, students can access hands on learning to build the
          skills needed for real world jobs.
        </p>
      </div>
    </>
  );
}

export default SkillUp;
