import React from 'react';
import './InternShip.css'; // Assuming the CSS is in this file
import InternShipBackground from './InternShipBackground.svg';

function InternShip() {
  return (
    <div className="InternShip-container">
      {/* Title */}
      <h1 className="InternShip-title">Internship</h1>

      {/* Content Section */}
      <div className="InternShip-content">
        {/* Description */}
        <p className="InternShip-description">
          Unisphere helps students find the real internships to get experience and grow their careers.
        </p>

        {/* Image Container with Background SVG */}
        <div className="InternShip-image-container">
          {/* No need for a separate inner image since it's part of the SVG */}
        </div>
      </div>

      {/* Footer Text */}
      <h2 className="InternShip-footer-text">Build your resume, not just your GPA</h2>
    </div>
  );
}

export default InternShip;