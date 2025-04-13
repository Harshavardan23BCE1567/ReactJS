import React, { useState } from "react";

function isLeapYear(year) {
  return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
}

function LeapYearCheck() {
  const [year, setYear] = useState("");

  return (
    <div>
      <input type="number" placeholder="Enter year" onChange={(e) => setYear(Number(e.target.value))} />
      <p>{year && `${year} is ${isLeapYear(year) ? "a Leap Year" : "not a Leap Year"}`}</p>
    </div>
  );
}

export default LeapYearCheck;
