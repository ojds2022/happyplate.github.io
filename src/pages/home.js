import React from "react";
import {Link} from "react-router-dom";
import BackgroundImage from "../assets/foodIcons.png";
import "../styles/Home.css";

const Home = () => {
  return (
    <div
        className="grid w-full h-screen bg-center bg-50% bg-sky-blue home"
        style={{ backgroundImage: `url(${BackgroundImage})` }}
      >
        <div className="w-10/12 p-6 mb-20 text-center md:w-1/2 md:h-1/3 md:mb-0 lg:w-2/5 xl:w-1/3 3xl:rounded-3xl rounded-xl bg-corn-silk place-self-center">
          <h1 className="mb-4 text-4xl md:mb-8 md:text-5xl xl:mb-12 xl:text-6xl 3xl:text-9xl 3xl:mb-32 text-hot-pink">HappyPlate</h1>
          <Link to="/nutrition">
            <button className="h-12 text-xl text-white border-0 rounded-md cursor-pointer w-44 md:h-14 md:w-48 md:text-2xl xl:h-20 xl:w-60 xl:text-4xl 3xl:h-40 3xl:w-96 3xl:rounded-3xl 3xl:text-7xl bg-hot-pink hover:bg-pale-green">
              Start
            </button>
          </Link>
        </div>
      </div>
  );
};

export default Home;
