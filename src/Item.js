import React, { Component } from "react";
import { availableIngredients } from "./available.js";

function Item(props) {
  const picture = require(`./images/${props.imgPath}`);
  const available = props.available ? "" : "unavailable";
  const display = props.show ? "item" : "hide";

  const unavIngredients = props.ingredients.filter(
    (el) => availableIngredients.indexOf(el) === -1
  );

  let difference = props.ingredients.filter(
    (el) => !unavIngredients.includes(el)
  );

  const func = () => {
    return (
      <div className="move">
        {unavIngredients.map((el, idx) => {
          return <li key={idx}> {el} </li>;
        })}
      </div>
    );
  };

  const func2 = () => {
    return (
      <div className="move">
        {difference.map((el, idx) => {
          return <li key={idx}> {el} </li>;
        })}
      </div>
    );
  };

  const funcX = () => {
    return (
      <div className="move">
        {props.ingredients.map((el, idx) => {
          return <li key={idx}> {el} </li>;
        })}
      </div>
    );
  };

  return (
    <div className={`${available} ${display}`}>
      <div className="title"> {props.name}</div>

      <div className="photo">
        <img src={picture} width={300} />
      </div>

      {unavIngredients.length === 0 && (
        <div className="ingredients"> {funcX()}</div>
      )}

      {unavIngredients.length > 0 && (
        <div>
          <div className="ingredients"> {func2()}</div>
          <div className="m-ingredients"> {func()}</div>
        </div>
      )}
    </div>
  );
}

export default Item;
