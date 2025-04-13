import React, { useState } from "react";

function TemperatureConverter() {
  const [celsius, setCelsius] = useState("");
  const [fahrenheit, setFahrenheit] = useState("");

  return (
    <div>
      <input type="number" placeholder="Celsius" onChange={(e) => setCelsius(e.target.value)} />
      <p>Fahrenheit: {celsius && (celsius * 9/5 + 32).toFixed(2)}</p>
      <input type="number" placeholder="Fahrenheit" onChange={(e) => setFahrenheit(e.target.value)} />
      <p>Celsius: {fahrenheit && ((fahrenheit - 32) * 5/9).toFixed(2)}</p>
    </div>
  );
}

export default TemperatureConverter;
