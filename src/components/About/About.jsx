import React from "react";
import heroImg from "../../images/rtr1604V.png";
import "./about.css";
const About = () => {
  return (
    <div>
      <div className="about_header">
        <h1>
          <span>Apache</span> RTR 160 <small>4v</small>{" "}
        </h1>
        <span>Racing DNA Unleashed!</span>
      </div>
      <div className="hero">
        <div className="About_hreo_content">
          <h1>Become The Unstoppable</h1>
          <span>The beast is here!</span>
          <p>
            The TVS Apache RTR 160 4V has consistently pushed the limits of
            performance and technology, always outdoing itself in the race
            against time. With the first-in-segment Ride Modes and SmartXonnect,
            the 2021 TVS Apache RTR 160 4V pushes the envelope like never
            before. Race in any condition with nothing holding you back. It's
            time to become the Unstoppable.
          </p>
        </div>
        <div className="hero_img">
          <img src={heroImg} alt="" />
        </div>
      </div>
    </div>
  );
};

export default About;
