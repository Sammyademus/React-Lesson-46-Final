import React, { useState } from "react";

export default function Counter() {
  //const [value, setValue ] = useState(initialValue); - syntax

  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1); //updating the count in the component state

  const decrement = () => setCount(count - 1);

  const multiply = () => {
    setCount(count * 2);
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={multiply}>Multiply</button>
    </div>
  );
}

//States - memory or storage space that each child component can use to keep track of the info that might change over time
//it is a way for component to manage and remember their own data (notepad for keeping info)
//useState is a hook that allows us to add state to functional components
//import state inside function
//Value is the piece of info you re remembering
//setValue - It's how you update or change the info when needed
