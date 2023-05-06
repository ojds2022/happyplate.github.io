import React from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <div className="fixed bottom-0 left-0 flex flex-col w-full h-20 text-center footer bg-corn-silk">
      <div className="pt-2  socialMedia text-pink">
        <InstagramIcon />
        <TwitterIcon />
        <FacebookIcon />
        <LinkedInIcon />
      </div>
      <p className="text-pink"> &copy; 2022 happyplate.com </p>
    </div>
  );
};

export default Footer;
