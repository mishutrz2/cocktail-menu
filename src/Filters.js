import React, { useEffect } from "react";
import { useState } from "react";
import { availableIngredients } from "./available.js";

const ingredientss = [
  { _id: 1, name: "vodka" },
  { _id: 2, name: "tequila" },
  { _id: 3, name: "whiskey" },
  { _id: 4, name: "white rum" },
  { _id: 4, name: "rum" },
  { _id: 5, name: "gin" },
  // { _id: 6, name: "triple sec" },
  // { _id: 7, name: "lemon vodka" },
  // { _id: 8, name: "blue curacao" },
  { _id: 9, name: "lime juice" },
  //{ _id: 10, name: "cranberry juice" },
  { _id: 11, name: "orange juice" },
  { _id: 12, name: "lemon juice" },
  // { _id: 13, name: "apple juice" },
  // { _id: 14, name: "tomato juice" },
  { _id: 13, name: "coffee" },
  { _id: 15, name: "cola" },
  { _id: 16, name: "tonic" },
];

function Filters(props) {
  const [drinkType, setDrinkType] = useState("all");
  const [filtersView, setFiltersView] = useState(false);
  const [checked, setChecked] = useState([]);

  const toggleFilters = () => {
    setFiltersView(!filtersView);
  };

  const renderCheckboxList = () => {
    return (
      filtersView && (
        <div className="checkbox-container">
          {ingredientss.map((value, index) => {
            let cName = "filterItem";
            if (availableIngredients.indexOf(value.name) === -1)
              cName = "unavl";
            return (
              <div key={index} className={cName}>
                <input
                  className="filterItemInput"
                  id={value.name}
                  type="checkbox"
                  name={value.name}
                  onChange={() => {
                    handleToggle(value.name);
                  }}
                  checked={checked.indexOf(value.name) === -1 ? false : true}
                />
                <label style={{ paddingLeft: "10px" }} htmlFor={value.name}>
                  {value.name}
                </label>
                <br />
              </div>
            );
          })}
        </div>
      )
    );
  };

  // on checkbox filters change
  const handleToggle = (value) => {
    const currIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currIndex, 1);
    }
    setChecked(newChecked);

    // update in parent component
    console.log(checked);
    props.handleFilters(newChecked);
  };

  // on radio button change
  const handleClick = (value) => {
    setDrinkType(value);
    props.handleDrinkType(value);
  };

  return (
    <div>
      {/* Radio buttons */}
      <div className="radio-btn-container">
        <div
          className="radio-btn"
          onClick={() => {
            handleClick("all");
          }}
        >
          <input
            type="radio"
            value={drinkType}
            name="drinkType"
            checked={drinkType == "all"}
            onChange={() => console.log("HELO")}
          />
          <label className="label">all</label>
        </div>

        <div
          className="radio-btn"
          onClick={() => {
            handleClick("long drinks");
          }}
        >
          <input
            type="radio"
            value={drinkType}
            name="drinkType"
            checked={drinkType == "long drinks"}
            onChange={() => console.log("HELO")}
          />
          <label className="label">long drinks</label>
        </div>

        <div
          className="radio-btn"
          onClick={() => {
            handleClick("cocktails");
          }}
        >
          <input
            type="radio"
            value={drinkType}
            name="drinkType"
            checked={drinkType == "cocktails"}
            onChange={() => console.log("HELO")}
          />
          <label className="label">cocktails</label>
        </div>

        <div
          className="radio-btn"
          onClick={() => {
            handleClick("shots");
          }}
        >
          <input
            type="radio"
            value={drinkType}
            name="drinkType"
            checked={drinkType == "shots"}
            onChange={() => console.log("HELO")}
          />
          <label className="label">shots</label>
        </div>

        <div
          className="radio-btn"
          onClick={() => {
            handleClick("other");
          }}
        >
          <input
            type="radio"
            value={drinkType}
            name="drinkType"
            checked={drinkType == "other"}
            onChange={() => console.log("HELO")}
          />
          <label className="label">other</label>
        </div>
      </div>
      <br />

      {/* Checkbox Filters*/}
      <button className="filtersBtn" onClick={toggleFilters}>
        Filters
      </button>
      <div>{renderCheckboxList()}</div>
    </div>
  );
}

export default Filters;
