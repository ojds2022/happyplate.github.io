import React from "react";
import BannerImage from "../assets/foodIcons.png";
import "../styles/About.css";

const About = () => {
  return (
    <div className="about">
      <div
        className="aboutTop"
        style={{ backgroundImage: `url(${BannerImage})` }}
      ></div>
      <div className="aboutBottom">
        <h1>ABOUT US</h1>
        <p>
          At West Code Inc., we strive to be an industry leader in all aspects
          that benefit those who are connected to us. We promise our customers
          stellar service, our suppliers a valuable partner, our investors the
          prospects of sustained profitable growth, and our employees the allure
          of huge impact.
        </p>
      </div>
    </div>
  );
};

export default About;
