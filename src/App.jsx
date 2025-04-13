import React from "react";
import HelloWithoutJSX from "./components/Q1/first.jsx";
import HelloWithJSX from "./components/Q1/second.jsx";
import HelloWithVariable from "./components/Q1/third.jsx";
import StyledMessage from "./components/Q3/stylemsg.jsx";
import SumOfSquares from "./components/Q4/sos.jsx";
import Greeting from "./components/Q5/greet.jsx";
import CurrentDay from "./components/Q6/currday.jsx";
import PrimeCheck from "./components/Q7/primecheck.jsx";
import TemperatureConverter from "./components/Q8/tempconv.jsx";
import ReverseString from "./components/Q9/revstring.jsx";
import RandomNumber from "./components/Q10/randnum.jsx";
import LeapYearCheck from "./components/Q11/LYC.jsx";
import UserGreeting from "./components/Q12/ugreet.jsx";

function App() {
  return (
    <div>
      <h1>Exercise 13</h1>
      <h2>Q1 a): Hello Without JSX</h2>
      <HelloWithoutJSX />
      <h2>Q1 b): Hello With JSX</h2>
      <HelloWithJSX />
      <h2>Q1 c): Hello With Variable</h2>
      <HelloWithVariable />
      <h2>Q3: Styled Message</h2>
      <StyledMessage />
      <h2>Q4: Sum of Squares</h2>
      <p>Sum of squares of 3 and 4 is:</p>
      <SumOfSquares num1={3} num2={4} />
      <h2>Q5: Greeting</h2>
      <p>Greeting based on time of day:</p>
      <Greeting isMorning={false} />
      <h2>Q6: Current Day</h2>
      <p>Current day of the week:</p>
      <CurrentDay />
      <h2>Q7: Prime Check</h2>
      <p>Check if a number is prime:</p>
      <PrimeCheck number={7} />
      <h2>Q8: Temperature Converter</h2>
      <p>Convert Celsius to Fahrenheit:</p>
      <TemperatureConverter />
      <h2>Q9: Reverse String</h2>
      <ReverseString text="React" />
      <h2>Q10: Random Number</h2>
      <p>Generate a random number between 1 and 100:</p>
      <p>Random number:</p>
      <RandomNumber />
      <h2>Q11: Leap Year Check</h2>
      <p>Check if a year is a leap year:</p>
      <p>Year 2025:</p>
      <LeapYearCheck year={2025} />
      <h2>Q12: User Greeting</h2>
      <p>Greeting a user:</p>
      <UserGreeting firstName="Harsha" lastName="Vardan" />
    </div>
  );
}

export default App;
