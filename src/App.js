import "./App.css";
import React, { useEffect, useState } from "react";
import Menu from "./Menu";

function App() {
  return (
    <div>
      <br />
      {/* 5 buttons menu */}
      <Menu></Menu>

      <hr />
      <div>
        <br />
        <h2>ITEMS</h2>
      </div>
    </div>
  );
}

export default App;
