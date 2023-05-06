import React, { useState } from "react";
import Logo from "../assets/plateLogo.png";
import { Link } from "react-router-dom";
import ReorderIcon from "@mui/icons-material/Reorder";
import "../styles/Navbar.css";

const Navbar = () => {
  const [openLinks, setOpenLinks] = useState(false);

  const toggleNavbar = () => {
    setOpenLinks(!openLinks);
  };

  return (
    <div className="flex flex-row h-20 navbar bg-corn-silk">
      {openLinks ? (
        <div className="flex items-center justify-between px-6 grow">
          <Link to="/">
            <span className="text-xl text-hot-pink hover:text-pale-green">
              Home
            </span>
          </Link>
          <Link to="/about">
            <span className="text-xl text-hot-pink hover:text-pale-green">
              About
            </span>
          </Link>
          <Link to="/contact">
            <span className="text-xl text-hot-pink hover:text-pale-green">
              Contact
            </span>
          </Link>
          <button
            className="bg-transparent border-0 cursor-pointer burger text-hot-pink"
            onClick={toggleNavbar}
          >
            <ReorderIcon />
          </button>
        </div>
      ) : (
        <div className="flex items-center justify-between px-6 grow">
          <Link to="/">
            <img id="logo" className="w-14" src={Logo} alt="logo" />
          </Link>
          <button
            className="bg-transparent border-0 cursor-pointer burger text-hot-pink"
            onClick={toggleNavbar}
          >
            <ReorderIcon />
          </button>
        </div>
      )}
    </div>
  );
};

export default Navbar;
