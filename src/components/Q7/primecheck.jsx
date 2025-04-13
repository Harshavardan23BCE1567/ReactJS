import React, { useState } from "react";

function isPrime(num) {
  if (num < 2) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
}

function PrimeCheck() {
  const [number, setNumber] = useState("");

  return (
    <div>
      <input type="number" placeholder="Enter a number" onChange={(e) => setNumber(Number(e.target.value))} />
      <p>{number && `${number} is ${isPrime(number) ? "a Prime Number" : "not a Prime Number"}`}</p>
    </div>
  );
}

export default PrimeCheck;
