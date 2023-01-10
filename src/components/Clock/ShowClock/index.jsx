import React from "react";
import { useState } from "react";

import Clock from "..";

ShowClock.propTypes = {};

function ShowClock(props) {
  const [showClock, setShowClock] = useState(true);
  return (
    <div>
      {showClock && <Clock />}
      <button onClick={() => setShowClock(false)}>Hide clock</button>
    </div>
  );
}

export default ShowClock;
