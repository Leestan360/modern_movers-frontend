import React from "react";
import { NavLink } from "react-router-dom";


function NavBar() {

  // client-side links to display on the url
  return (
    <div className="flex justify-between text-2xl p-4 bg-gray-500">
      <h2><NavLink  to="/">Modern Movers</NavLink></h2>
      <div>
        <NavLink
          to="/"
        >
          Home
        </NavLink>
        <NavLink
          to="/book"
        >
          Book
        </NavLink>
        <NavLink
          to="/bookings"
        >
          Bookings
        </NavLink>
        <NavLink
          to="/login"
        >
          Log in
        </NavLink>
        <NavLink
          to="/signup" 
        >
          Sign Up
        </NavLink>
      </div>
    </div>
  );
}

export default NavBar;