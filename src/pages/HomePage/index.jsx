import React, { useState } from "react";
import PropTypes from "prop-types";
import Hero from "../../components/Hero";

HomePage.propTypes = {};

function HomePage(props) {
  const [count, setCount] = useState(0);
  return (
    <>
      <h1>React Hooks - Count </h1>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>Increase</button>
      <Hero name="Easy" />
    </>
  );
}

export default HomePage;
