import React, { useState } from "react";

function SumOfSquares() {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);

  const sum = num1 * num1 + num2 * num2;

  return (
    <div>
      <input type="number" placeholder="Enter first number" onChange={(e) => setNum1(Number(e.target.value))} />
      <input type="number" placeholder="Enter second number" onChange={(e) => setNum2(Number(e.target.value))} />
      <p>Sum of squares: {sum}</p>
    </div>
  );
}

export default SumOfSquares;
