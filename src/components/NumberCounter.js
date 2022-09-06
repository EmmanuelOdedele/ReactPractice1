import React, { useState } from "react";
import "../assets/styles/counter.css";

function NumberCounter() {
  // State
  const [counter, setCounter] = useState(0);

  // Decrement
  const handleDecrement = (event) => {
    event.preventDefault();
    setCounter((prev) => prev - 1);
  };

  // Increment
  const handleIncrement = (event) => {
    event.preventDefault();
    setCounter((prev) => prev + 1);
  };

  // Default
  const resetToDefault = (event) => {
    event.preventDefault();
    setCounter((prev) => (prev = 0));
  };

  // Render
  return (
    <section className="counter-container">
      <div className="counter-label">{counter}</div>
      <button className="action-btn" onClick={handleIncrement}>
        Increment
      </button>
      <button className="action-btn" onClick={handleDecrement}>
        Decrement
      </button>
      <button className="reset-btn" onClick={resetToDefault}>
        Reset
      </button>
    </section>
  );
}

export default NumberCounter;
