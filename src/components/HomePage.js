import React from "react";
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
