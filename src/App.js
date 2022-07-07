import "./App.css";
import React, { useEffect, useState } from "react";
import Filters from "./Filters";
import Item from "./Item";
import { listIngredients, drinks } from "./available.js";

function App() {
  // const [Filters, setFilters] = useState({ ingredients: [], type: "all" });
  const [ingredients, setIngredients] = useState([]);
  const [type, setType] = useState("all");
  const [availableIngredients, setAvailableIngredients] = useState([]);

  const getAvailableIngredients = () => {
    let a = [];
    listIngredients.forEach((el) => {
      if (el.at(0) !== "-") a.push(el);
    });
    setAvailableIngredients(a);
  };

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
          let available = true;
          let show = true;
          if (val.type !== type && type !== "all") show = false;
          val.ingredients.forEach((el) => {
            if (availableIngredients.indexOf(el) === -1) available = false;
          });

          return (
            <div key={idx}>
              <Item
                name={val.name}
                imgPath={val.image}
                ingredients={val.ingredients}
                origin={val.origin}
                available={available}
                show={show}
              ></Item>
            </div>
          );
        })}
      </div>
    );
  };

  useEffect(() => {
    getAvailableIngredients();
  }, []);

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
