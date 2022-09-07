import React from "react";
import Hello from "./components/Hello";
import Greetings from "./components/Greetings";
import UserProfileCard from "./components/UserProfileCard";
import Countries from "./components/Countries";
import ListOfCars from "./components/ListOfCars";
import ListOfUsers from "./components/ListOfUsers";
import NumberCounter from "./components/NumberCounter";
import FormOnChangeAndSubmit from "./components/FormOnChangeAndSubmit";

function Car({ data }) {
  const { brand, color, year } = data;
  return (
    <section className="car-container">
      <div className="car-brand">{`${year} ${color} ${brand}`}</div>
    </section>
  );
}

function App() {
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
      <Car
        data={{
          brand: "Tesla",
          color: "Grey",
          year: "2022",
        }}
      />
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
