import React, { createContext, useState, useContext } from "react";
import Hello from "./components/Hello";
import Greetings from "./components/Greetings";
import UserProfileCard from "./components/UserProfileCard";
import Countries from "./components/Countries";
import ListOfCars from "./components/ListOfCars";
import ListOfUsers from "./components/ListOfUsers";
import NumberCounter from "./components/NumberCounter";
import FormOnChangeAndSubmit from "./components/FormOnChangeAndSubmit";
import UseEffect from "./components/UseEffect";
// import AuthProvider from "./components/AuthProvider";
// import UserProfile from "./components/UserProfile";
import Calculator from "./components/Calculator";

function Car({ data }) {
  return (
    <section className="car-container">
      <div className="car-brand">{`${data.color} ${data.year} ${data.brand}`}</div>
    </section>
  );
}

//For useContext
const AuthContext = createContext({
  user: {
    username: "Emmanuel",
    name: "Emmanuel Odedele",
    email: "emmaodedele@gmail.com",
  },
  verified: false,
});

//Define Context provider
function AuthProvider(props) {
  const [user, setUser] = useState({
    username: "Emmanuel",
    name: "Emmanuel Odedele",
    email: "emmaodedele@gmail.com",
    bio: "Emmanuel will become the president of Nigeria",
  });
  return (
    <AuthContext.Provider
      value={{
        user: user,
        verified: true,
        setUser: setUser,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
}

//User bio component
function UserBio() {
  const { user, setUser } = useContext(AuthContext);
  //Update userbio on click
  const handleBioUpdate = (event) => {
    //Update user bio
    event.preventDefault();
    setUser((prev) => {
      return {
        ...prev,
        bio: "Emmanuel O. Odedele will become the president of Nigeria",
      };
    });
  };
  return (
    <div>
      <h1>User Bio</h1>
      <div>{user.bio}</div>
      <button onClick={handleBioUpdate}>Update Bio</button>
    </div>
  );
}

//UserProfile component
function UserProfile() {
  const { user, verified } = useContext(AuthContext);

  return (
    <div>
      <h1>User Profile</h1>
      <div>Username : {user.username}</div>
      <div>Name : {user.name}</div>
      <div>Email : {user.email}</div>
      <div>Verfied : {verified ? "Yes" : "No"}</div>
      <UserBio />
    </div>
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
      <AuthProvider>
        <UserProfile />
      </AuthProvider>
      <Calculator />
    </section>
  );
}

export default App;
