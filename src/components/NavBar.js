import React from "react";
import { NavLink } from "react-router-dom";


function NavBar() {

  // client-side links to display on the url
  return (
    <div className="flex justify-between text-2xl p-4 bg-gray-500 ">
      <h2><NavLink  to="/">Modern Movers</NavLink></h2>
      <div>
        <NavLink
        className="mx-4 active:color-blue-600"
          to="/"
        >
          Home
        </NavLink>
        <NavLink
        className="mx-4 active:color-blue-600"
          to="/book"
        >
          Book
        </NavLink>
        <NavLink
        className="mx-4 active:color-blue-600"
          to="/bookings"
        >
          Bookings
        </NavLink>
        <NavLink
        className="mx-4 bg-green-500 py-1 px-2 rounded-lg active:bg-blue-600"
          to="/login"
        >
          Log in
        </NavLink>
        <NavLink
        className="ml-2 bg-green-500 py-1 px-2 rounded-lg active:bg-blue-600"
          to="/signup" 
        >
          Sign Up
        </NavLink>
      </div>
    </div>
  );
}

export default NavBar;