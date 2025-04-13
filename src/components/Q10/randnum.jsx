import React, { useState } from "react";

function RandomNumber() {
  const [number, setNumber] = useState(null);

  return (
    <div>
      <button onClick={() => setNumber(Math.floor(Math.random() * 100) + 1)}>Generate Number</button>
      <p>{number !== null && `Random Number: ${number}`}</p>
    </div>
  );
}

export default RandomNumber;
