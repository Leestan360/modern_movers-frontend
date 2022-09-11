import React from "react";
import { NavLink } from "react-router-dom";


function NavBar() {

  // client-side links to display on the url
  return (
    <div className="flex justify-between text-2xl p-4 bg-emerald-300 fixed w-screen top-0">
      <h2><NavLink  to="/">Modern Movers</NavLink></h2>
      <div>
        <NavLink
        className="mx-4 active:text-blue-600 hover:text-orange-500"
          to="/"
        >
          Home
        </NavLink>
        <NavLink
        className="mx-4 active:text-blue-600 hover:text-orange-500"
          to="/book"
        >
          Book
        </NavLink>
        <NavLink
        className="mx-4 active:text-blue-600 hover:text-orange-500"
          to="/bookings"
        >
          Bookings
        </NavLink>
        <NavLink
        className="mx-4 bg-orange-400 py-1 px-2 rounded-lg hover:bg-orange-600 hover:text-white"
          to="/login"
        >
          Log in
        </NavLink>
        <NavLink
        className="ml-2 mr-4 bg-orange-400 hover:bg-orange-600 hover:text-white py-1 px-2 rounded-lg"
          to="/signup" 
        >
          Sign Up
        </NavLink>
      </div>
    </div>
  );
}

export default NavBar;