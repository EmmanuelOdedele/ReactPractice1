import React from "react";

function OnClick() {
    const handleClick = (event) => {
      alert("Hello friend. Work with me.");
    };
    return <button onClick={handleClick}>Click Me</button>;
  }

export default OnClick