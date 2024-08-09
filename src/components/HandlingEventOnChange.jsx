// TYPES OF EVENT HANDLING
//1. onClick - action is performed on clicking
//2. onChange
//3. onSubmit

//1. onChange - use in form element/input type

//create useState
import React, { useState } from "react";

export default function HandlingEventOnChange() {
  const [inputValue, setInputValue] = useState();

  //create function + parameter
  const handleInputChange = (event) => {
    setInputValue(event.target.value); //use to get the input from user, using e.target.value
  };

  return (
    <div>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Enter your name"
      />

      <p>You typed: {inputValue}</p>
    </div>
  );
}
