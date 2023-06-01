import React, { useEffect, useState } from "react";
import {Link} from "react-router-dom";
import BackgroundImage from "../assets/foodIcons.png";
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
    style={{ backgroundImage: `url(${BackgroundImage})` }}
    >
    {showLabel === true ? (
        <>
        <div className='w-4/6 mx-auto sm:w-1/3 lg:w-1/4 xl:w-1/3 mt-28 3xl:mt-80'>
          <h1 className="my-1 text-4xl font-bold text-center text-white capitalize lg:text-5xl xl:text-7xl 3xl:text-9xl">
              {name}
          </h1>
          <div className="p-3 bg-white border-black border-1">
              <h2 className="text-2xl font-bold border-black xl:text-4xl 3xl:text-6xl border-b-1">Nutrition Facts</h2>
              <p className="font-bold border-black xl:text-2xl 3xl:text-4xl xl:py-1 3xl:py-3 border-b-1">
              Serving Size <span>{servingSize} g</span>
              </p>
              <p className="text-lg font-bold border-black xl:text-2xl 3xl:text-4xl xl:py-1 3xl:py-3 border-b-1">
              Calories <span>{calories}</span>
              </p>
              <p className="border-black xl:text-2xl 3xl:text-4xl xl:py-1 3xl:py-3 border-b-1">
                <span className="font-bold">Total Fat </span>{fatTotal} g
              </p>
              <p className="border-black xl:text-2xl 3xl:text-4xl xl:py-1 3xl:py-3 border-b-1">
              Saturated Fat <span>{fatSat} g</span>
              </p>
              <p className="border-black xl:text-2xl 3xl:text-4xl xl:py-1 3xl:py-3 border-b-1">
                <span className="font-bold">Cholesterol </span>{cholesterol} mg
              </p>
              <p className="border-black xl:text-2xl 3xl:text-4xl xl:py-1 3xl:py-3 border-b-1">
                <span className="font-bold">Sodium </span>{sodium} mg
              </p>
              <p className="border-black xl:text-2xl 3xl:text-4xl xl:py-1 3xl:py-3 border-b-1">
                <span className="font-bold">Total Carbohydrate </span>{carbs} g
              </p>
              <p className="border-black xl:text-2xl 3xl:text-4xl xl:py-1 3xl:py-3 border-b-1">
              Dietary Fiber <span>{fiber} g</span>
              </p>
              <p className="border-black xl:text-2xl 3xl:text-4xl xl:py-1 3xl:py-3 border-b-1">
              Total Sugars <span>{sugar} g</span>
              </p>
              <p className="border-black xl:text-2xl 3xl:text-4xl xl:py-1 3xl:py-3 border-b-1">
                <span className="font-bold">Protein </span>{protein} g
              </p>
              <p className="border-black xl:text-2xl 3xl:text-4xl xl:py-1 3xl:py-3 border-b-1">
              Potassium <span>{potassium} mg</span>
              </p>
          </div>
        </div>
        <div className="grid mb-36 3xl:mb-52">
            <span className='z-20 place-self-center'>
                <Link to='/'>
                    <button id='searchAgain' className='w-24 h-6 mt-2 ml-1 border-0 rounded cursor-pointer xl:w-40 xl:h-10 xl:text-xl 3xl:w-72 3xl:h-20 3xl:text-4xl xl:rounded-lg 3xl:rounded-2xl' >Search again</button>
                </Link>
            </span>
        </div>
        </>
    ) : (
        <div className="grid">
        <div className="w-10/12 py-5 mb-32 text-center place-self-center bg-corn-silk md:w-8/12 rounded-xl">
        <h2 className="mx-auto mb-3 text-xl rounded xl:text-3xl 3xl:text-6xl 3xl:p-4 text-hot-pink">
            Enter a food or beverage that you would like to know nutritional
            facts about!
        </h2>
        <input id="inputField" className="xl:w-60 xl:h-12 xl:text-2xl 3xl:w-96 3xl:h-20 3xl:text-4xl" type="text" placeholder="Enter here..." />
        <button
            className="h-6 ml-1 border-0 rounded cursor-pointer w-14 xl:h-12 xl:w-32 3xl:h-20 3xl:w-44 xl:text-xl 3xl:text-3xl xl:ml-3 3xl:ml-5 3xl:rounded-xl bg-hot-pink hover:bg-pale-green"
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
