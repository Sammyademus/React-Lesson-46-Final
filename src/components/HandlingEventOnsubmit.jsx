import React, { useState } from "react";

export default function HandlingEventOnsubmit() {
  const [name, setName] = useState();
  const [lastName, setLastName] = useState();
  const [gender, setGender] = useState();

  const [submittedName, setSubmittedName] = useState();
  const [submittedLastName, setSubmittedLastName] = useState();
  const [submittedGender, setSubmittedGender] = useState();

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmittedName(name);
    setSubmittedLastName(lastName);
    setSubmittedGender(gender);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Name</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <label>Last Name</label>
        <input
          type="text"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />

        <label>Gender</label>
        <input
          type="text"
          value={gender}
          onChange={(e) => setGender(e.target.value)}
        />

        <button type="submit">Submit</button>

        <p>The name submitted is: {submittedName}</p>
        <p>The name submitted is: {submittedLastName}</p>
        <p>The name submitted is: {submittedGender}</p>
      </form>
    </div>
  );
}
