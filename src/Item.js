import React, { Component } from "react";

function Item(props) {
  const picture = require(`./images/${props.imgPath}`);

  return (
    <div className={"item"}>
      <div className="title"> {props.name}</div>

      <div className="photo">
        <img src={picture} width={300} />
      </div>

      <div className="ingredients">{props.ingredients.join(", ")}</div>
    </div>
  );
}

export default Item;
