import React, { Component } from "react";

function Item(props) {
  const picture = require(`./images/${props.imgPath}`);
  const available = props.available ? "" : "unavailable";
  const display = props.show ? "item" : "hide";

  return (
    <div className={`${available} ${display}`}>
      <div className="title"> {props.name}</div>

      <div className="photo">
        <img src={picture} width={300} />
      </div>

      <div className="ingredients">{props.ingredients.join(", ")}</div>
    </div>
  );
}

export default Item;
