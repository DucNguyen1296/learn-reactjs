import React, { useState } from "react";

ColorBox.proTypes = {};

function ColorBox(props) {
  const [color, setColor] = useState("white");

  return (
    <div>
      {color}

      <button onClick={() => setColor("black")}>Change to Black</button>
      <button onClick={() => setColor("white")}>Change to White</button>
    </div>
  );
}

export default ColorBox;


