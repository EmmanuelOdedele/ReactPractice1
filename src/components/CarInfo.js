import React from "react";
import Car from "./Car";

function CarInfo() {
  const cars = [
    {
      brand: "Tesla",
      color: "grey",
      year: "2022",
    },
    {
      brand: "Audi",
      color: "blue",
      year: "2020",
    },
    {
      brand: "BMW",
      color: "black",
      year: "2021",
    },
  ];

  const listOfCars = cars.map((car) => {
    return <Car data={car} />;
  });

  return (
    <section className="car-info">
      <div className="cars">{listOfCars}</div>
    </section>
  );
}

export default CarInfo;
