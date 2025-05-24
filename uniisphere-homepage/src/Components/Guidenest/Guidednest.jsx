import React from 'react';
import Guide from './Guide.svg';
import GuideBackground from './GuideBackground.svg';
import './Guidednest.css';

function Guidednest() {
  return (
    <div className="Guidednest-container">
      {/* Title */}
      <h1 className="Guidednest-title">GUIDEDNEST</h1>

      {/* Content: Image on left, Text on right */}
      <div className="Guidednest-content">
        {/* Image with Background */}
        <div className="Guidednest-image-container">
          <img src={Guide} alt="Guidednest Illustration" className="Guidednest-image" />
        </div>

        {/* Text on the right */}
        <p className="Guidednest-description">
          Students can easily find mentors on Unisphere to help them navigate their careers and job searches.
        </p>
      </div>

      {/* Footer below the image */}
      <h3 className="Guidednest-footer-text">A Journey of Learning, Led by Those <br /> Who’ve Been There</h3>
    </div>
  );
}

export default Guidednest;