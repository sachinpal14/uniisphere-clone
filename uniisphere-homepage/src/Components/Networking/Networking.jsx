import React from "react";
import NetwokingBackground from "./NetwokingBackground.svg"; // Background image for the illustration
import NetworkingSVG from "./Networking.svg"; // Illustration of students
import "./Networking.css"; // Import the external CSS file

function Networking() {
  return (
    <>
      {" "}
      <div className="networking-container">
        {/* Title */}
        <h1 className="Our-Features-homepage">Our Features</h1>
        <h1 className="networking-title">NETWORKING</h1>

        {/* Main Content: Image on left, Description on right */}
        <div className="networking-content">
          {/* Image with Background */}
          <div className="networking-image-wrapper">
            <img
              src={NetworkingSVG}
              alt="Networking Illustration"
              className="networking-illustration"
            />
          </div>

          {/* Description on the right */}
          <p className="networking-description">
            Unisphere connects students across universities, making it easier to
            find peers who share your goals
          </p>
        </div>

        {/* Tagline below the image */}
        <h3 className="networking-tagline">
          Because Real Connections Start <br /> With Familiar Vibes
        </h3>
      </div>{" "}
      <div className="mobile-networking-container">
        {/* Title */}
        <h1 className="mobile-Our-Features-homepage">Our Features</h1>
        <h1 className="mobile-networking-title">NETWORKING</h1>

        {/* Main Content: Image on left, Description on right */}
        <div className="mobile-networking-content">
          {/* Image with Background */}
          <div className="mobile-networking-image-wrapper">
            <img
              src={NetworkingSVG}
              alt="Networking Illustration"
              className="mobile-networking-illustration"
            />
          </div>
          {/* Tagline below the image */}
          <h3 className="mobile-networking-tagline">
            Because Real Connections Start <br /> With Familiar Vibes
          </h3>

          {/* Description on the right */}
          <p className="mobile-networking-description">
            Unisphere connects students across universities, making it easier to
            find peers who share your goals
          </p>
        </div>
      </div>
    </>
  );
}

export default Networking;
