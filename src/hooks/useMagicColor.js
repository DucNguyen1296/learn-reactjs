import { useEffect, useRef } from "react";
import { useState } from "react";

function randomColor(currentColor) {
  let COLOR_LIST = ["green", "red", "blue", "purple", "yellow"];
  const currentIndex = COLOR_LIST.indexOf(currentColor);
  let newIndex = currentIndex;

  while (currentIndex === newIndex) {
    newIndex = Math.trunc(Math.random() * COLOR_LIST.length);
  }
  // const randomIndex = Math.trunc(Math.random() * COLOR_LIST.length);
  return COLOR_LIST[newIndex];
}

function useMagicColor() {
  const [color, setColor] = useState("transparent");
  const colorRef = useRef("transparent");

  // Change Color every 1 sec

  useEffect(() => {
    const colorInterval = setInterval(() => {
      const newColor = randomColor();
      setColor(newColor);

      colorRef.current = newColor;
    }, 1000);

    return () => {
      clearInterval(colorInterval);
    };
  }, []);
  // console.log(color);
  return color;
}

export default useMagicColor;
