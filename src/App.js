import "./App.css";
import React, { useEffect, useState, useRef } from "react";
import Filters from "./Filters";
import Item from "./Item";
import { availableIngredients, drinks } from "./available.js";

function App() {
  const [ingredients, setIngredients] = useState([]);
  const [type, setType] = useState("all");
  // const renderCount = useRef(drinks.length);

  const handleFilters = (ingredients) => {
    setIngredients(ingredients);
    renderDrinks();
  };

  const handleDrinkType = (type) => {
    setType(type);
  };

  const renderDrinks = () => {
    const v = drinks.map((val, idx) => {
      let available = true;
      let show = true;

      // hide if another type is selected
      if (val.type !== type && type !== "all") show = false;

      // hide depending on selected filters
      ingredients.forEach((el) => {
        if (val.ingredients.indexOf(el) === -1 && ingredients.length > 0) {
          show = false;
        }
      });

      // gray out unavailable drinks
      val.ingredients.forEach((el) => {
        if (availableIngredients.indexOf(el) === -1) {
          available = false;
        }
      });

      return (
        <div location={available ? 0 : 1} key={idx}>
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
    });

    const sortedArr = v.reduce((acc, element) => {
      if (!element.props.location) {
        return [element, ...acc];
      }
      return [...acc, element];
    }, []);

    return <div>{sortedArr}</div>;
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
      {/* <div>{renderDrinksNot()}</div> */}
      <br />

      {/*  */}
    </div>
  );
}

export default App;
