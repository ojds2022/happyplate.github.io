import React, { useEffect, useState } from "react";
import {Link} from "react-router-dom";
import BackgroundImage from "../assets/foodIcons.png";
import '../styles/Home.css';


const UserInfo = () => {
    const [showRecCalIntake, setShowRecCalIntake] = useState(false);
    const [tdee, setTDEE] = useState("");

    const sedentary = 1.2;
    const lightActivite = 1.375;
    const modActivite = 1.55;
    const veryActive = 1.725;

    const exWeightLoss = 0.7;
    const weightLoss = 0.85;
    const weightGain = 1.15;
    const exWeightGain = 1.3;

    const getUserInput = () => {
        setShowRecCalIntake(true);
        const age = document.querySelector("#userAge");
        const weight = document.querySelector("#userWeight");
        const heightFeet = document.querySelector("#userHeightFeet");
        const heightInches = document.querySelector("#userHeightInches");
        const activityLevel = document.querySelector("#activity-level");
        const weightChange = document.querySelector("#weight-change");
        const male = document.querySelector('#male');

        {/*male.addEventListener ('click', (e) => {
            console.log('male was clicked');
        });*/}
       
        const userAgeNum = parseInt(age.value);
        const userWeightKG = parseFloat(weight.value) * 0.45359;
        const userHeightCM = (parseFloat(heightFeet.value) + (parseFloat(heightInches.value) / 12)) * 30.48;
        const userActivityLevel = activityLevel.value;
        const userWeightChange = weightChange.value;
        const userBMR = (10 * userWeightKG) + (6.25 * userHeightCM) - (5 * userAgeNum) + 5;

        if (userActivityLevel === 'sedentary' && userWeightChange === 'extreme weight loss') {
            setTDEE(Math.round(sedentary * exWeightLoss * userBMR));
            return;
        } else if (userActivityLevel === 'sedentary' && userWeightChange === 'weight loss') {
            setTDEE(Math.round(sedentary * weightLoss * userBMR));
            return;
        } else if (userActivityLevel === 'sedentary' && userWeightChange === 'maintain weight') {
            setTDEE(Math.round(sedentary * userBMR));
            return;
        } else if (userActivityLevel === 'sedentary' && userWeightChange === 'weight gain') {
            setTDEE(Math.round(sedentary * weightGain * userBMR));
            return;
        } else if (userActivityLevel === 'sedentary' && userWeightChange === 'extreme weight gain') {
            setTDEE(Math.round(sedentary * exWeightGain * userBMR));
            return;
        }  else if (userActivityLevel === 'lightly active' && userWeightChange === 'extreme weight loss') {
            setTDEE(Math.round(lightActivite * exWeightLoss * userBMR));
            return;
        } else if (userActivityLevel === 'lightly active' && userWeightChange === 'weight loss') {
            setTDEE(Math.round(lightActivite * weightLoss * userBMR));
            return;
        } else if (userActivityLevel === 'lightly active' && userWeightChange === 'maintain weight') {
            setTDEE(Math.round(lightActivite * userBMR));
            return;
        } else if (userActivityLevel === 'lightly active' && userWeightChange === 'weight gain') {
            setTDEE(Math.round(lightActivite * weightGain * userBMR));
            return;
        } else if (userActivityLevel === 'lightly active' && userWeightChange === 'extreme weight gain') {
            setTDEE(Math.round(lightActivite * exWeightGain * userBMR));
            return;
        } else if (userActivityLevel === 'moderately active' && userWeightChange === 'extreme weight loss') {
            setTDEE(Math.round(modActivite * exWeightLoss * userBMR));
            return;
        } else if (userActivityLevel === 'moderately active' && userWeightChange === 'weight loss') {
            setTDEE(Math.round(modActivite * weightLoss * userBMR));
            return;
        } else if (userActivityLevel === 'moderately active' && userWeightChange === 'maintain weight') {
            setTDEE(Math.round(modActivite * userBMR));
            return;
        } else if (userActivityLevel === 'moderately active' && userWeightChange === 'weight gain') {
            setTDEE(Math.round(modActivite * weightGain * userBMR));
            return;
        } else if (userActivityLevel === 'moderately active' && userWeightChange === 'extreme weight gain') {
            setTDEE(Math.round(modActivite * exWeightGain * userBMR));
            return;
        } else if (userActivityLevel === 'very active' && userWeightChange === 'extreme weight loss') {
            setTDEE(Math.round(veryActive * exWeightLoss * userBMR));
            return;
        } else if (userActivityLevel === 'very active' && userWeightChange === 'weight loss') {
            setTDEE(Math.round(veryActive * weightLoss * userBMR));
            return;
        } else if (userActivityLevel === 'very active' && userWeightChange === 'maintain weight') {
            setTDEE(Math.round(veryActive * userBMR));
            return;
        } else if (userActivityLevel === 'very active' && userWeightChange === 'weight gain') {
            setTDEE(Math.round(veryActive * weightGain * userBMR));
            return;
        } else if (userActivityLevel === 'very active' && userWeightChange === 'extreme weight gain') {
            setTDEE(Math.round(veryActive * exWeightGain * userBMR));
            return;
        }
    }

    return (
        <div className="flex flex-col h-screen overflow-scroll bg-center bg-50% bg-sky-blue home" style={{ backgroundImage: `url(${BackgroundImage})` }} >
            {showRecCalIntake === true ? (
                <>
                <div className="grid h-full">
                    <div className="w-10/12 py-5 mb-32 text-center place-self-center bg-corn-silk md:w-8/12 rounded-xl">
                        <h2 className="text-hot-pink">Your daily caloric intake recommendation is {tdee}</h2>
                        <Link to="/dailyNutritionTracker">
                            <button
                                id="searchButton"
                                className="px-1 border-0 rounded cursor-pointer bg-hot-pink hover:bg-pale-green"
                                type="submit"
                            >
                                Continue
                            </button>
                        </Link>
                    </div>
                </div>
                </>
            ) : (
                <>
                <div className="grid h-full">
                    <div className="w-10/12 py-1 place-self-center bg-corn-silk rounded-xl">
                        <h2 className="mb-3 text-xl text-center text-hot-pink">
                            Please enter your:
                        </h2>
                        <div className="flex flex-col">
                            <div className="pb-5 pl-5">
                                <span className="pr-3 text-hot-pink">Age</span>
                                <input id="userAge" className="" type="text" placeholder="years" required />
                            </div>
                            {/*<div className="pb-5">
                                <div id="radio-buttons">
                                    <span className="pr-3 text-hot-pink">Sex</span>
                                    <label for="male" className="radio-inline">Male</label>
                                    <input type="radio" id="male" name="sex" value="male" className="" />
                                    <label for="female" className="radio-inline">Female</label>
                                    <input type="radio" id="female" name="sex" value="female" className="" />
                                </div>
            </div>*/}
                            <div className="pb-5 pl-5">
                                <span className="pr-3 text-hot-pink">Weight</span>
                                <input id="userWeight" className="" type="text" placeholder="pounds" required />
                            </div>
                            <div className="pb-5 pl-5">
                                <span className="pr-3 text-hot-pink">Height</span>
                                <span className="pr-1">
                                    <input id="userHeightFeet" className="w-20" type="text" placeholder="feet" required />
                                </span>
                                <span className="">
                                    <input id="userHeightInches" className="w-20" type="text" placeholder="inches" required />
                                </span>
                            </div>
                            <div className="pb-5 text-center">
                                <label for="pet-select" className="text-hot-pink">Activity Level</label>
                                <select name="activityLevel" id="activity-level">
                                    <option value="">--Please choose an option--</option>
                                    <option value="sedentary">Sedentary</option>
                                    <option value="lightly active">Lightly Active</option>
                                    <option value="moderately active">Moderately Active</option>
                                    <option value="very active">Very Active</option>
                                </select>
                            </div>
                            <div className="pb-5 text-center">
                                <label for="pet-select" className="text-hot-pink">Desired Weight Change</label>
                                <select name="weightChange" id="weight-change">
                                    <option value="">--Please choose an option--</option>
                                    <option value="extreme weight loss">Extreme Weight Loss - 2 lb/week</option>
                                    <option value="weight loss">Weight Loss - 1 lb/week</option>
                                    <option value="maintain weight">Maintain Weight</option>
                                    <option value="weight gain">Weight Gain - 1 lb/week</option>
                                    <option value="extreme weight gain">Extreme Weight Gain - 2 lb/week</option>
                                </select>
                            </div>
                        </div>
                        <div className="flex justify-center">
                            <button
                                id="searchButton"
                                className="px-1 border-0 rounded cursor-pointer bg-hot-pink hover:bg-pale-green"
                                type="submit"
                                onClick={getUserInput}
                            >
                                Continue
                            </button>
                        </div>
                    </div>
                </div>
                </>
            )}
        </div>
    );
};

export { UserInfo };