import React, { useState } from "react";

function UserGreeting() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  return (
    <div>
      <input type="text" placeholder="First Name" onChange={(e) => setFirstName(e.target.value)} />
      <input type="text" placeholder="Last Name" onChange={(e) => setLastName(e.target.value)} />
      <h3>Hello, {firstName} {lastName}!</h3>
    </div>
  );
}

export default UserGreeting;
