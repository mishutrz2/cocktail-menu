import React from "react";
import { useState } from "react";
import { availableIngredients } from "./available.js";

const ingredientss = [
  { _id: 1, name: "vodka" },
  { _id: 2, name: "tequila" },
  { _id: 3, name: "whiskey" },
  { _id: 4, name: "rum" },
  { _id: 5, name: "gin" },
  { _id: 6, name: "triple sec" },
  { _id: 7, name: "lemon vodka" },
  { _id: 8, name: "blue curacao" },
  { _id: 9, name: "lime juice" },
  { _id: 10, name: "cranberry juice" },
  { _id: 11, name: "orange juice" },
  { _id: 12, name: "lemon juice" },
  { _id: 13, name: "apple juice" },
  { _id: 14, name: "orange liqueur" },
  { _id: 15, name: "melon liqueur" },
  { _id: 16, name: "banana liqueur" },
  { _id: 17, name: "ice" },
  { _id: 18, name: "salt" },
  { _id: 19, name: "simple syrup" },
  { _id: 20, name: "sweet and sour" },
  { _id: 21, name: "water" },
];

const spirits = [
  "vodka",
  "tequila",
  "whiskey",
  "rum",
  "gin",
  "triple sec",
  "lemon vodka",
  "blue curacao",
];
const juices = [
  "lime juice",
  "cranberry juice",
  "orange juice",
  "lemon juice",
  "apple juice",
];
const liqueur = ["orange liqueur", "melon liqueur", "banana liqueur"];
const misc = ["ice", "salt", "simple syrup", "sweet and sour", "water"];
// all ingredients in filters list
const ingredients = spirits.concat(juices).concat(liqueur).concat(misc);

function Menu() {
  const [drinkType, setDrinkType] = useState("all");
  const [filtersView, setFiltersView] = useState(false);
  const [filters, setFilters] = useState([]);

  const toggleFilters = () => {
    setFiltersView(!filtersView);
  };

  const renderCheckboxList = () => {
    return (
      filtersView && (
        <div className="checkbox-container">
          {ingredients.map((value, index) => {
            return (
              <div key={index} className="filterItem">
                <input
                  className="filterItemInput"
                  id={value.name}
                  type="checkbox"
                  name={value.name}
                  onChange={() => {
                    handleToggle(value._id);
                  }}
                />
                <label style={{ paddingLeft: "10px" }} htmlFor={value.name}>
                  {value}
                </label>
                <br />
              </div>
            );
          })}
        </div>
      )
    );
  };

  const handleToggle = (value) => {
    console.log("handdle toggle");
  };

  return (
    <div>
      {/* Radio buttons */}
      <div className="radio-btn-container">
        <div
          className="radio-btn"
          onClick={() => {
            setDrinkType("all");
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
            setDrinkType("long drinks");
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
            setDrinkType("cocktails");
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
            setDrinkType("shots");
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
            setDrinkType("other");
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

      {/* Menu Items
      <div className="menu-container">hello</div> */}
    </div>
  );
}

export default Menu;
