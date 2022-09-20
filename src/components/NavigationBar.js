import React from "react";
import { NavLink } from "react-router-dom";
import "../assets/styles/navigation.css"

function NavigationBar() {
  return (
    <section className="navbar-container">
      <NavLink
        style={({ isActive }) =>
          isActive ? { color: "white" } : { color: "black" }
        }
        to="/"
        className="navbar"
      >
        Home
      </NavLink>
      <NavLink
        style={({ isActive }) =>
          isActive ? { color: "white" } : { color: "black" }
        }
        to="/about"
        className="navbar"
      >
        About
      </NavLink>
    </section>
  );
}

export default NavigationBar;
