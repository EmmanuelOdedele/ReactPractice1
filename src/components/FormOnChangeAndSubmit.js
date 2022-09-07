import React, { useState } from "react";
import "../assets/styles/form.css";

function FormOnChangeAndSubmit() {
  // onChange event
  const handleChange = (event) => {
    event.preventDefault();
    console.log("Values :", event.target.value);
  };

  const [state, setState] = useState("Submit");

  //handle mouse over
  const handleMouseOver = (event) => {
    setState("You are about to submit");
    setTimeout(() => {
      setState("Submit");
    }, 1000);
    console.log("You hoverd over me.");
  };

  // onSubmit event
  const handleSubmit = (event) => {
    event.preventDefault();
    const { name, email, tel } = event.target.elements;
    alert(`Hello ${name.value}, your details have been submitted. Thank you.`);
    alert(
      `Your details are: Name: ${name.value}, Email: ${email.value}, Telephone number: ${tel.value}. If there is an error in the details, kindly refill the form.`
    );
    console.log(
      "Name:",
      name.value,
      "Email:",
      email.value,
      "Telephone number:",
      tel.value
    );
  };
  return (
    <section className="form-container">
      <form onSubmit={handleSubmit}>
        <input
          onChange={handleChange}
          type="text"
          name="name"
          placeholder="Enter your name"
        />
        <input
          onChange={handleChange}
          type="email"
          name="email"
          placeholder="Enter your email"
        />
        <input
          onChange={handleChange}
          type="tel"
          name="tel"
          placeholder="Enter your phonenumber"
        />
        <button
          onMouseOver={handleMouseOver}
          className="form-button"
          type="submit"
        >
          {state}
        </button>
      </form>
    </section>
  );
}

export default FormOnChangeAndSubmit;
