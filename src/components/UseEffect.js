import React, { useState, useEffect } from "react";
import "../assets/styles/useeffect.css"

function UseEffect() {
  // useEffect practice
  const [count, setCount] = useState(0);

  // Define useEffect hook...
  useEffect(() => {
    console.log(count);
    if (count === 5) {
        let person = prompt ("Please enter your name")
        alert(`Hello ${person}, you have won #50,000,000.`)
    }
  }, [count]);

  // Define click handler
  const handleClick = (event) => {
    setCount((prev) => prev + 1);
  };

  return (
    <section className="useeffect-container">
      <h3>This is the useEffect container</h3>
      <p>Click the button below and count to <strong>5</strong> to get a surprise package. </p>
      <div className="effect-counter-label">{count}</div>
      <button onClick={handleClick} className="effect-btn">Click Me</button>
    </section>
  );
}

export default UseEffect;
