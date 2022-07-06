import "./App.css";
import React, { useEffect, useState } from "react";
import Filters from "./Filters";
import Item from "./Item";
import { drinks } from "./available.js";

function App() {
  // const [Filters, setFilters] = useState({ ingredients: [], type: "all" });
  const [ingredients, setIngredients] = useState([]);
  const [type, setType] = useState("all");

  const handleFilters = (ingredients) => {
    setIngredients(ingredients);
  };

  const handleDrinkType = (type) => {
    setType(type);
  };

  const renderDrinks = () => {
    return (
      <div>
        {drinks.map((val, idx) => {
          return (
            <div key={idx}>
              <Item
                name={val.name}
                imgPath={val.image}
                ingredients={val.ingredients}
                origin={val.origin}
              ></Item>
            </div>
          );
        })}
      </div>
    );
  };

  return (
    <div>
      <br />
      <Filters
        handleDrinkType={(type) => handleDrinkType(type)}
        handleFilters={(filters) => handleFilters(filters)}
      ></Filters>
      <br />

      {/*  */}
      {"with: " + ingredients.join(", ")}
      <hr />
      <div>{renderDrinks()}</div>
      <br />

      {/*  */}
    </div>
  );
}

export default App;
