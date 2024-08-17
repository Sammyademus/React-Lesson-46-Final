import React, { useState } from "react";

export default function ConditionalRendering() {
  const [number, setNumber] = useState(); //1.
  const [message, setMessage] = useState();

  const handleChange = (event) => {
    //2.
    const value = event.target.value;
    setNumber(value);

    if (value === "") {
      setMessage("");
    } else {
      const num = Number(value);
      if (num > 10) {
        setMessage(<p>Number is a greater than 10</p>);
      } else if (num < 0) {
        setMessage(<p>Number is negative</p>);
      } else {
        setMessage(<p>Number is between 0 and 10</p>);
      }
    }
  };

  return (
    <div>
      <input //3.
        type="number"
        value={number}
        onChange={handleChange}
        placeholder="Type a number"
      />

      <p>Status of the number entered is {message}</p>
    </div>
  );
}

// Using javascript conditional statements: if, else if, else

// Ternary operator - condition? true:false

// Logical && operator - &&
