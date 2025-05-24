import React from 'react';
import FreeLancingImage from './FreeLancing.svg';
import './FreeLancing.css';

function FreeLancing() {
  return (
    <div className="FreeLancing-container">
      {/* Title */}
      <h1 className="FreeLancing-title">FREELANCING</h1>

      {/* Content: Image on left, Text on right */}
      <div className="FreeLancing-content">
        {/* Image with Background */}
        <div className="FreeLancing-image-container">
          <img src={FreeLancingImage} alt="FreeLancing Illustration" className="FreeLancing-image" />
        </div>

        {/* Text on the right */}
        <p className="FreeLancing-description">
          Uniisphere helps students kickstart their freelance journey by finding real gigs and building portolios.
        </p>
      </div>

      {/* Footer below the image */}
      <h3 className="FreeLancing-footer-text">Work. Earn. Grow — All While Staying <br /> in Your Zone</h3>
    </div>
  );
}

export default FreeLancing;