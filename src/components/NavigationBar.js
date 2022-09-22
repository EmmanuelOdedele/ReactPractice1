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
        end
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
      <NavLink
        style={({ isActive }) =>
          isActive ? { color: "white" } : { color: "black" }
        }
        to="/pagination"
        className="navbar"
      >
        Pagination
      </NavLink>
    </section>
  );
}

export default NavigationBar;
