import React from "react";

function ListOfCars() {
  const items = ["Tesla", "Audi", "BMW", "Mercedes", "Volkswagon"];
  const listItems = items.map((item) => {
    return <li key={item}>{item}</li>;
  });

  return (
    <div>
      <div className="my-cars">These are my cars</div>
      <ol>{listItems}</ol>
    </div>
  );
}

export default ListOfCars;
