import React from "react";
// import PropTypes from "prop-types";
import { useState } from "react";
import "./style.scss";

ColorBox2.propTypes = {};

function getRandomColor() {
  const COLOR_LIST = ["deeppink", "green", "blue", "red", "black"];
  const randomIndex = Math.trunc(Math.random() * COLOR_LIST.length);
  return COLOR_LIST[randomIndex];
}

function ColorBox2(props) {
  const [color, setColor] = useState(() => {
    const initColor = localStorage.getItem("box_color") || "deeppink";
    console.log(initColor);
    return initColor;
  });

  function handleBoxClick() {
    //get random color -> set Color
    const newColor = getRandomColor();
    setColor(newColor);

    localStorage.setItem("box_color", newColor);
  }
  return (
    <div
      className="color-box"
      style={{ backgroundColor: color }}
      onClick={handleBoxClick}
    >
      COLOR BOX
    </div>
  );
}

export default ColorBox2;
