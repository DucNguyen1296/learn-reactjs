import React, { useState } from "react";
import PropTypes from "prop-types";

Example.propTypes = {};

let run = 0;
function calcCount() {
  run += 5;
  console.log("calc count", run);
  return run;
}

function Example(props) {
  const [showMore, setShowMore] = useState(false);
  const [count, setCount] = useState(calcCount);
  const [name, setName] = useState("");

  function handleIncreaseClick() {
    setCount(count + 1);
  }

  return (
    <div>
      <p>{count}</p>
      <button onClick={handleIncreaseClick}>Increase</button>
      {showMore && <p>{name}</p>}
    </div>
  );
}

export default Example;
