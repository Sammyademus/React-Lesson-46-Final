import React, { useState } from "react";

export default function FormClass() {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(
      `The firstname is ${formData.firstname} and the lastname is ${formData.lastname}`
    );
    console.log(formData, "formData");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>First Name</label>
        <input
          type="text"
          name="firstname"
          value={formData.firstname}
          onChange={handleInputChange}
        />

        <label>Last Name</label>
        <input
          type="text"
          name="lastname"
          value={formData.lastname}
          onChange={handleInputChange}
        />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
