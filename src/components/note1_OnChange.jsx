import React, { useState } from "react";

export default function HandlingEventOnsubmit() {
  const [name, setName] = useState();
  const [submittedName, setSubmittedName] = useState();

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmittedName(name);
  };

  //   //alternative - to line 7
  //   const submitName = (event) => {
  //     setName(event.target.value);
  //   };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Name</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          // onChange={(e) => setName(submitName)} - add to line 12
        />

        <button type="submit">Submit</button>

        <p>The name submitted is: {submittedName}</p>
      </form>
    </div>
  );
}
