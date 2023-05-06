import React, { useEffect, useState } from "react";
import {Link} from "react-router-dom";
import BannerImage from "../assets/foodIcons.png";
import '../styles/Home.css';

const NutritonLabel = () => {
  const [showLabel, setShowLabel] = useState(false);

  const [name, setName] = useState("");
  const [servingSize, setServingSize] = useState("");
  const [calories, setCalories] = useState("");
  const [fatTotal, setFatTotal] = useState("");
  const [fatSat, setFatSat] = useState("");
  const [cholesterol, setCholesterol] = useState("");
  const [sodium, setSodium] = useState("");
  const [carbs, setCarbs] = useState("");
  const [fiber, setFiber] = useState("");
  const [sugar, setSugar] = useState("");
  const [protein, setProtein] = useState("");
  const [potassium, setPotassium] = useState("");

  const fetchNutrition = async () => {
    const userInput = document.querySelector("#inputField");
    const url = `https://nutrition-by-api-ninjas.p.rapidapi.com/v1/nutrition?query=${userInput.value}`;
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "48cbe57e99msh59bbaa3d2989b86p1dd679jsn22273669dbf3",
        "X-RapidAPI-Host": "nutrition-by-api-ninjas.p.rapidapi.com",
      },
    };

    try {
      const response = await fetch(url, options);
      const result = await response.json();
      postNutrition(result[0]);
    } catch (error) {
      console.error(error);
    }
  };

  const postNutrition = (data) => {
    //takes nutrition data and renders it to the page
    setName(data.name);
    setServingSize(data.serving_size_g);
    setCalories(data.calories);
    setFatTotal(data.fat_total_g);
    setFatSat(data.fat_saturated_g);
    setCholesterol(data.cholesterol_mg);
    setSodium(data.sodium_mg);
    setCarbs(data.carbohydrates_total_g);
    setFiber(data.fiber_g);
    setSugar(data.sugar_g);
    setProtein(data.protein_g);
    setPotassium(data.potassium_mg);
    setShowLabel(!showLabel);
  };

  useEffect(() => {
    
  },[]);

  return (
    <div
      className="grid w-full bg-center bg-50% min-h-screen  bg-sky-blue home"
      style={{ backgroundImage: `url(${BannerImage})` }}
    >
      {showLabel === true ? (
        <>
        <div className='w-3/5 mx-auto'>
          <h1 className="my-1 text-4xl font-bold text-center text-white capitalize">
            {name}
          </h1>
          <ul className="p-1.5 list-none bg-white border-2 border-black">
            <h2 className="underline">Nutrition Facts</h2>
            <li>
              Serving Size <span>{servingSize} g</span>
            </li>
            <li className="border-b-2 border-black">
              Calories <span>{calories}</span>
            </li>
            <li className="border-b-4 border-black">
              Total Fat <span>{fatTotal} g</span>
            </li>
            <li className="border-b-2 border-black">
              Saturated Fat <span>{fatSat} g</span>
            </li>
            <li className="border-b-2 border-black">
              Cholesterol <span>{cholesterol} mg</span>
            </li>
            <li className="border-b-2 border-black">
              Sodium <span>{sodium} mg</span>
            </li>
            <li className="border-b-2 border-black">
              Total Carbohydrate <span>{carbs} g</span>
            </li>
            <li className="border-b-2 border-black">
              Dietary Fiber <span>{fiber} g</span>
            </li>
            <li className="border-b-2 border-black">
              Total Sugars <span>{sugar} g</span>
            </li>
            <li className="border-b-2 border-black">
              Protein <span>{protein} g</span>
            </li>
            <li className="border-b-2 border-black">
              Potassium <span>{potassium} mg</span>
            </li>
          </ul>
          </div>
          <div className="grid mb-36">
            <span className='z-20 place-self-center'>
            <Link to='/'>
              <button id='searchAgain' className='w-24 h-6 ml-1 border-0 rounded cursor-pointer' >Search again</button>
            </Link>
      </span>
          </div>
        </>
      ) : (
        <div className="grid">
          <div className="mb-48 text-center place-self-center">
          <h2 className="w-10/12 mx-auto my-1 text-xl rounded bg-corn-silk text-hot-pink">
            Enter a food or beverage that you would like to know nutritional
            facts about!
          </h2>
          <input id="inputField" type="text" placeholder="Enter here..." />
          <button
            className="h-6 ml-1 border-0 rounded cursor-pointer bg-hot-pink hover:bg-pale-green w-14"
            type="submit"
            onClick={fetchNutrition}
          >
            Search
          </button>
        </div>
        </div>
      )}
    </div>
  );
};

export { NutritonLabel };
