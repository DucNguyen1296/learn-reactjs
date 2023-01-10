import React from "react";
import "./style.scss";

import useClock from "../../hooks/useClock";

Clock2.propTypes = {};

function Clock2() {
  const { timeString } = useClock();
  return (
    <div className="clock2">
      <p className="clock2-time">{timeString}</p>
    </div>
  );
}

export default Clock2;
