import React from "react";
import Guide from "./Guide.svg";
import GuideBackground from "./GuideBackground.svg";
import "./Guidednest.css";

function Guidednest() {
  return (
    <>
      <div className="Guidednest-container">
        {/* Title */}
        <h1 className="Guidednest-title">GUIDEDNEST</h1>

        {/* Content: Image on left, Text on right */}
        <div className="Guidednest-content">
          {/* Image with Background */}
          <div className="Guidednest-image-container">
            <img
              src={Guide}
              alt="Guidednest Illustration"
              className="Guidednest-image"
            />
          </div>

          {/* Text on the right */}
          <p className="Guidednest-description">
            Students can easily find mentors on Unisphere to help them navigate
            their careers and job searches.
          </p>
        </div>

        {/* Footer below the content */}
        <h3 className="Guidednest-footer-text">
          A Journey of Learning, Led by Those Who’ve Been There
        </h3>
      </div>

      <div className="mobile-Guidednest-container">
        {/* Title */}
        <h1 className="mobile-Guidednest-title">GUIDEDNEST</h1>

        {/* Content: Image, Footer, then Description */}
        <div className="mobile-Guidednest-content">
          {/* Image with Background */}
          <div className="mobile-Guidednest-image-container">
            <img
              src={Guide}
              alt="Guidednest Illustration"
              className="mobile-Guidednest-image"
            />
          </div>

          {/* Footer below the image */}
          <h3 className="mobile-Guidednest-footer-text">
            A Journey of Learning, Led by Those Who’ve Been There
          </h3>

          {/* Description below footer */}
          <p className="mobile-Guidednest-description">
            Students can easily find mentors on Unisphere to help them navigate
            their careers and job searches.
          </p>
        </div>
      </div>
    </>
  );
}

export default Guidednest;