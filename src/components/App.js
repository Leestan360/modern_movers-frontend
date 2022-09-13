import Login from "./Login";
import Home from "./Home";
import NavBar from "./NavBar";
import User from "./User";
import Book from "./Book";
import Bookings from "./Bookings";
import { Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";
import moving from '../assets/images/moving_1.png'

function App() {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    fetch("http://localhost:9292/bookings")
      .then((res) => res.json())
      .then((data) => setBookings(data));
  }, []);

  function onAddBooking(newBooking) {
    setBookings([...bookings, newBooking]);
  }

  return (
    <div  style={{ backgroundImage: `url(${moving})` }}  className="h-screen">
      <NavBar />
      <Routes>
        <Route
          exact
          path="/book"
          element={<Book onAddBooking={onAddBooking} />}
        />
        <Route
          exact
          path="/bookings"
          element={
            <Bookings
            />
          }
        />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/signup" element={<User />} />
        <Route exact path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
