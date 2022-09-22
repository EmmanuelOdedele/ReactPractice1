import React from "react";
// import { useSearchParams } from "react-router-dom";
import { useLocation } from "react-router-dom";
import NavigationBar from "./NavigationBar";
import Hello from "./Hello";
import Greetings from "./Greetings";
import UserProfileCard from "./UserProfileCard";
import Countries from "./Countries";
import ListOfCars from "./ListOfCars";
import ListOfUsers from "./ListOfUsers";
import NumberCounter from "./NumberCounter";
import FormOnChangeAndSubmit from "./FormOnChangeAndSubmit";
import CarInfo from "./CarInfo";
import UseEffect from "./UseEffect";
import AuthProvider from "./AuthProvider";
import UserProfile from "./UserProfile";

function HomePage() {
  // // useSearchParams
  // const [searchParams, setSearchParams] = useSearchParams();
  // // Get the searcg params and set the search params...
  // useEffect(() => {
  //   // Set the search params...
  //   setSearchParams({
  //     id: "123456",
  //   });
  //   // Get the search params
  //   console.log(searchParams.get("id"));
  // });

  const location = useLocation();
  console.log(location);

  return (
    <section className="main-page">
      <NavigationBar />
      <Hello />
      <Greetings />
      <UserProfileCard />
      <Countries />
      <ListOfCars />
      <ListOfUsers />
      <NumberCounter />
      <FormOnChangeAndSubmit />
      <CarInfo />
      <UseEffect />
      <AuthProvider>
        <UserProfile />
      </AuthProvider>
    </section>
  );
}

export default HomePage;
