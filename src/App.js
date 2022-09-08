import React from "react";
import Hello from "./components/Hello";
import Greetings from "./components/Greetings";
import UserProfileCard from "./components/UserProfileCard";
import Countries from "./components/Countries";
import ListOfCars from "./components/ListOfCars";
import ListOfUsers from "./components/ListOfUsers";
import NumberCounter from "./components/NumberCounter";
import FormOnChangeAndSubmit from "./components/FormOnChangeAndSubmit";
import UseEffect from "./components/UseEffect";

function Car({ data }) {
  return (
    <section className="car-container">
      <div className="car-brand">{`${data.color} ${data.year} ${data.brand}`}</div>
    </section>
  );
}

function App() {
  //array
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
    <section className="main-page">
      <Hello />
      <Greetings />
      <UserProfileCard />
      <Countries />
      <ListOfCars />
      <ListOfUsers />
      <NumberCounter />
      <FormOnChangeAndSubmit />
      <div className="cars">{listOfCars}</div>
      <UseEffect />
    </section>
  );
}

// example for arrow function. Thesame as the one just above
// const App = () => {
//   return (
//     <div>
//       <h1 className="header">Hello World!</h1>
//       <p className="paragraph">I am Emmanuel Odedele.</p>
//     </div>
//   );
// };

export default App;
