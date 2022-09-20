import React from "react";

function Car({ data }) {
  return (
    <section className="car-container">
      <div className="car-brand">{`${data.color} ${data.year} ${data.brand}`}</div>
    </section>
  );
}



export default Car;
