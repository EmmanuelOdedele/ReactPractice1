import React from "react";
import "../assets/styles/form.css"

function FormOnChange() {
    const handleChange = (event) => {
      event.preventDefault();
      console.log("Values :", event.target.value);
    };
    return (
      <section className="form-container">
        <form>
          <input
            onChange={handleChange}
            type="text"
            placeholder="Enter your name"
          />
          <input
            onChange={handleChange}
            type="email"
            placeholder="Enter your email"
          />
          <input
            onChange={handleChange}
            type="tel"
            placeholder="Enter your phonenumber"
          />
          <button type="submit">Submit</button>
        </form>
      </section>
    );
  }

export default FormOnChange