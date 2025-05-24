import React from "react";
import FreeLancingImage from "./FreeLancing.svg";
import "./FreeLancing.css";

function FreeLancing() {
  return (
    <>
      <div className="FreeLancing-container">
        {/* Title */}
        <h1 className="FreeLancing-title">FREELANCING</h1>

        {/* Content: Image on left, Text on right */}
        <div className="FreeLancing-content">
          {/* Image with Background */}
          <div className="FreeLancing-image-container">
            <img
              src={FreeLancingImage}
              alt="Freelancing Illustration"
              className="FreeLancing-image"
            />
          </div>

          {/* Text on the right */}
          <p className="FreeLancing-description">
            Unisphere helps students kickstart their freelance journey by finding
            real gigs and building portfolios.
          </p>
        </div>

        {/* Footer below the content */}
        <h3 className="FreeLancing-footer-text">
          Work. Earn. Grow — All While Staying <br /> in Your Zone
        </h3>
      </div>

      <div className="mobile-FreeLancing-container">
        {/* Title */}
        <h1 className="mobile-FreeLancing-title">FREELANCING</h1>

        {/* Content: Image, Footer, then Description */}
        <div className="mobile-FreeLancing-content">
          {/* Image with Background */}
          <div className="mobile-FreeLancing-image-container">
            <img
              src={FreeLancingImage}
              alt="Freelancing Illustration"
              className="mobile-FreeLancing-image"
            />
          </div>

          {/* Footer below the image */}
          <h3 className="mobile-FreeLancing-footer-text">
            Work. Earn. Grow — All While Staying <br /> in Your Zone
          </h3>

          {/* Description below footer */}
          <p className="mobile-FreeLancing-description">
            Unisphere helps students kickstart their freelance journey by finding
            real gigs and building portfolios.
          </p>
        </div>
      </div>
    </>
  );
}

export default FreeLancing;