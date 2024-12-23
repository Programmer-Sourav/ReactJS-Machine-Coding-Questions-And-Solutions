import React, { useState } from "react";
import useTimeoutRevise from "./useTimeoutRevise";


function TimerComponent() {
  const [count, setCount] = useState(0);
  const [active, setActive] = useState(true);

  useTimeoutRevise(() => {
    setCount((prev) => prev + 1);
  }, active ? 1000 : null); // Increment every second if active

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setActive((prev) => !prev)}>
        {active ? "Pause" : "Resume"}
      </button>
    </div>
  );
}

export default TimerComponent;
