import React, { useState } from "react";

function StyledMessage() {
  const [message, setMessage] = useState("");

  const messageStyle = {
    color: "white",
    backgroundColor: "blue",
    padding: "10px",
    borderRadius: "5px",
    textAlign: "center"
  };

  return (
    <div>
      <input 
        type="text" 
        placeholder="Enter a message" 
        onChange={(e) => setMessage(e.target.value)} 
      />
      <h3 style={messageStyle}>{message}</h3>
    </div>
  );
}

export default StyledMessage;
