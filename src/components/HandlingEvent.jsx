// TYPES OF EVENT HANDLING
//1. onClick - action is performed on clicking
//2. onChange
//3. onSubmit

//1. onClick
import React, { useState } from "react";

export default function HandlingEvent() {
  const [message, setMessage] = useState();

  const handleClick = () => {
    alert("Button is clicked");
    console.log("Button is clicked");
    setMessage("Button is clicked");
  };

  return (
    <div>
      <button onClick={handleClick}>Click me</button>
      <p>{message}</p>
    </div>
  );
}

//_________________________________________________
