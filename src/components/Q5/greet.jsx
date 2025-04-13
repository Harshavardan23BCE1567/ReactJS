import React, { useState } from "react";

function Greeting() {
  const [isMorning, setIsMorning] = useState(true);

  return (
    <div>
      <button onClick={() => setIsMorning(true)}>Morning</button>
      <button onClick={() => setIsMorning(false)}>Evening</button>
      <h3>{isMorning ? "Good Morning!" : "Good Evening!"}</h3>
    </div>
  );
}

export default Greeting;
