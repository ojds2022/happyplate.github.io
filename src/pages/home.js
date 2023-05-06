import React from "react";
import {Link} from "react-router-dom";
import BannerImage from "../assets/foodIcons.png";
import "../styles/Home.css";

const Home = () => {
  return (
    <div
      className="grid w-full bg-center bg-50% min-h-screen bg-sky-blue home"
      style={{ backgroundImage: `url(${BannerImage})` }}
    >
      <div className="w-10/12 p-6 mb-48 text-center rounded-xl bg-corn-silk place-self-center">
        <h1 className="mb-4 text-4xl text-hot-pink">HappyPlate</h1>
        <Link to="/nutrition">
          <button className="h-12 text-xl text-white border-0 rounded-md cursor-pointer bg-hot-pink hover:bg-pale-green w-44">
            Start
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
