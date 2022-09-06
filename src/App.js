import React from "react";
import Hello from "./components/Hello";
import Greetings from "./components/Greetings";
import UserProfileCard from "./components/UserProfileCard";
import Countries from "./components/Countries";
import ListOfCars from "./components/ListOfCars";
import ListOfUsers from "./components/ListOfUsers";

function App() {
  return (
    <section className="main-page">
      <Hello />
      <Greetings />
      <UserProfileCard />
      <Countries />
      <ListOfCars />
      <ListOfUsers />
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
