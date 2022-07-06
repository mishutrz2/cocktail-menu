import React from "react";
import { useState } from "react";
import { availableIngredients } from "./available.js";

const ingredientss = [
  { id: 1, name: "vodka" },
  { id: 2, name: "tequila" },
  { id: 3, name: "whiskey" },
  { id: 4, name: "rum" },
  { id: 5, name: "gin" },
  { id: 6, name: "triple sec" },
  { id: 7, name: "lemon vodka" },
  { id: 8, name: "blue curacao" },
  { id: 9, name: "lime juice" },
  { id: 10, name: "cranberry juice" },
  { id: 11, name: "orange juice" },
  { id: 12, name: "lemon juice" },
  { id: 13, name: "apple juice" },
  { id: 14, name: "orange liqueur" },
  { id: 15, name: "melon liqueur" },
  { id: 16, name: "banana liqueur" },
  { id: 17, name: "ice" },
  { id: 18, name: "salt" },
  { id: 19, name: "simple syrup" },
  { id: 20, name: "sweet and sour" },
  { id: 21, name: "water" },
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
      {filtersView && (
        <div className="checkbox-container">
          {ingredients.map((id, name) => {
            return (
              <div key={name} className="filterItem">
                <input
                  className="filterItemInput"
                  id={name}
                  type="checkbox"
                  name={name}
                  onChange={() => {
                    setFilters(["vodka", "tequila"]);
                  }}
                />
                <label style={{ paddingLeft: "10px" }} htmlFor={name}>
                  {name}
                </label>
                <br />
              </div>
            );
          })}
        </div>
      )}

      {/* Menu Items
      <div className="menu-container">hello</div> */}
      <div> {filters.join(", ")} </div>
      <div> {ingredientss.at(1).name} </div>
    </div>
  );
}

export default Menu;
