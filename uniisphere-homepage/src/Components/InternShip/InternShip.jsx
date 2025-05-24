import React from "react";
import "./InternShip.css"; // Updated CSS file
import InternShipBackground from "./InternShipBackground.svg";

function InternShip() {
  return (
    <>
      <div className="InternShip-container">
        {/* Title */}
        <h1 className="InternShip-title">Internship</h1>

        {/* Content Section */}
        <div className="InternShip-content">
          {/* Description */}
          <p className="InternShip-description">
            Unisphere helps students find real internships to gain experience and
            grow their careers.
          </p>

          {/* Image Container with Background SVG */}
          <div className="InternShip-image-container"></div>
        </div>

        {/* Footer Text */}
        <h2 className="InternShip-footer-text">
          Build your resume, not just your GPA
        </h2>
      </div>

      <div className="mobile-InternShip-container">
        {/* Title */}
        <h1 className="mobile-InternShip-title">Internship</h1>

        {/* Content Section */}
        <div className="mobile-InternShip-content">
          {/* Image Container with Background SVG */}
          <div className="mobile-InternShip-image-container"></div>
        </div>

        {/* Footer Text */}
        <h2 className="mobile-InternShip-footer-text">
          Build your resume, not just your GPA
        </h2>

        {/* Description */}
        <p className="mobile-InternShip-description">
          Unisphere helps students find real internships to gain experience and
          grow their careers.
        </p>
      </div>
    </>
  );
}

export default InternShip;