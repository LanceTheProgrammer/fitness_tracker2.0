import React, { useState } from "react";
import SectionWrapper from "./SectionWrapper";
import { SCHEMES, WORKOUTS } from "../utils/swoldier";
import Button from "./Button";

// Component for the header section
function Header(props) {
  const { index, title, description } = props;
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-2 justify-center">
        <p className="text-3xl sm:text-4xl md:text-5xl font-semibold text-slate-400">
          {index}
        </p>
        <h4 className="text-xl sm:text-2xl md:text-3xl">{title}</h4>
      </div>
      <p className="text-sm sm:text-base mx-auto">{description}</p>
    </div>
  );
}

// Main component for the generator section
export default function Generator(props) {
  // Destructuring props
  const {muscles, setMuscles, poison, setPoison, goal, setGoal, updateWorkout} = props
  const [showModal, setShowModal] = useState(false);
  
  // Function to toggle the modal visibility
  function toggleModal() {
    setShowModal(!showModal);
  }

  // Function to update selected muscles
  function updateMuscles(muscleGroup) {
    if (muscles.includes(muscleGroup)) {
      setMuscles(muscles.filter((val) => val !== muscleGroup));
      return;
    }

    if (muscles.length > 2) {
      return;
    }

    if (poison !== "individual") {
      setMuscles([muscleGroup]);
      setShowModal(false);
      return;
    }

    setMuscles([...muscles, muscleGroup]);
    if (muscles.length === 2) {
      setShowModal(false);
    }
  }

  return (
    <SectionWrapper
      id={'generate'}
      header={"generate your workout"}
      title={["It's", "Gym", "o'clock!"]}
    >
      {/* Section 01: choose your adventure */}
      <Header
        index={"01"}
        title={"Choose Your Adventure"}
        description={"Select based on workouts per week (4 days, 3 days, 6 days or 2 days per week)"}
      ></Header>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {/* Render buttons for different workout types */}
        {Object.keys(WORKOUTS).map((type, typeIndex) => {
          return (
            <button
              onClick={() => {
                setMuscles([]);
                setPoison(type);
              }}
              className={
                "bg-slate-950 border duration-200 px-4 hover:border-blue-600 py-3 rounded-lg " +
                (type === poison ? "border-blue-600" : "border-blue-400")
              }
              key={typeIndex}
            >
              <p className="capitalize">{type.replaceAll("_", " ")}</p>
            </button>
          );
        })}
      </div>
      
      {/* Section 02: Lock on targets */}
      <Header
        index={"02"}
        title={"Muscle Focus"}
        description={"Select the muscles you wish to train."}
      ></Header>
      <div className="bg-slate-950 border border-solid border-blue-400 rounded-lg flex flex-col">
        {/* Button to toggle modal for selecting muscles */}
        <button
          onClick={toggleModal}
          className="relative p-3 flex items-center justify-center"
        >
          <p className="capitalize">
            {muscles.length == 0 ? "Select muscle groups" : muscles.join(" ")}
          </p>
          <i className="fa-solid absolute right-3 top-1/2 -translate-y-1/2 fa-caret-down"></i>
        </button>
        {/* Modal to select muscles */}
        {showModal && (
          <div className="flex flex-col px-3 pb-3">
            {(poison === "individual"
              ? WORKOUTS[poison]
              : Object.keys(WORKOUTS[poison])
            ).map((muscleGroup, muscleGroupIndex) => {
              return (
                <button
                  onClick={() => {
                    updateMuscles(muscleGroup);
                  }}
                  key={muscleGroupIndex}
                  className={
                    "hover:text-blue-400 duration-200 " +
                    (muscles.includes(muscleGroup) ? " text-blue-400" : " ")
                  }
                >
                  <p className="uppercase">
                    {muscleGroup.replaceAll("_", " ")}
                  </p>
                </button>
              );
            })}
          </div>
        )}
      </div>
      
      {/* Section 03: Execute */}
      <Header
        index={"03"}
        title={"Execute"}
        description={"Select your training style."}
      ></Header>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {/* Render buttons for different workout schemes */}
        {Object.keys(SCHEMES).map((scheme, schemeIndex) => {
          return (
            <button
              onClick={() => {
                setGoal(scheme);
              }}
              className={
                "bg-slate-950 border duration-200 px-4 hover:border-blue-600 py-3 rounded-lg " +
                (scheme === goal ? "border-blue-600" : "border-blue-400")
              }
              key={schemeIndex}
            >
              <p className="capitalize">{scheme.replaceAll("_", " ")}</p>
            </button>
          );
        })}
      </div>
      
      {/* Button to update workout */}
      <Button func={updateWorkout} text={"Generate Workout"}/>
    </SectionWrapper>
  );
}

