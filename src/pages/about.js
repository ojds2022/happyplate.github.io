import React from "react";
import BannerImage from "../assets/foodIcons.png";
import "../styles/About.css";

const About = () => {
  return (
    <div className="flex flex-col h-screen">
      <div
        className="bg-center bg-50% h-2/5 bg-sky-blue"
        style={{ backgroundImage: `url(${BannerImage})` }}
      ></div>
      <div className="flex flex-col items-center text-center aboutBottom h-3/5 bg-pink text-navy-blue">
        <h1 className="py-2 text-2xl">ABOUT US</h1>
        <p className="w-4/5">
          Id minim duis magna aliqua occaecat do dolore sint in. 
          Nulla ullamco pariatur tempor aliqua est irure aute aliqua eiusmod. 
          Voluptate magna exercitation irure minim adipisicing veniam. 
          Ex velit anim non quis ad ex dolor ad veniam officia consectetur ea.
        </p>
      </div>
    </div>
  );
};

export default About;
