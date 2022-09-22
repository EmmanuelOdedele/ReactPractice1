import React from "react";
import { useNavigate } from "react-router-dom";
import NavigationBar from "./NavigationBar";

function AboutPage() {
  // useNavigate
  const navigate = useNavigate();
  // Handle navigation
  const handleNavigate = (event) => {
    event.preventDefault();
    navigate("/");
  };

  return (
    <section className="main-page">
      <NavigationBar />
      <h1>AboutPage</h1>
      <button onClick={handleNavigate}>Go back to home</button>
    </section>
  );
}

export default AboutPage;
