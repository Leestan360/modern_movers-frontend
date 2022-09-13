import React, { useEffect, useState } from "react";
import SingleBooking from "./SingleBooking";

function Bookings() {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    fetch("http://localhost:9292/bookings")
      .then((res) => res.json())
      .then((data) => setBookings(data));
  }, []);

  function onDeleteBooking(id) {
    const updatedBookings = bookings.filter((booking) => booking.id !== id);
    setBookings(updatedBookings);
  }

  function onUpdateBooking(updatedBookingObj) {
    const updatedBookings = bookings.map((book) => {
      if (book.id === updatedBookingObj.id) {
        return updatedBookingObj;
      } else {
        return book;
      }
    });
    setBookings(updatedBookings);
  }

  return (
    <div className="pt-20">
      <div className=" mx-auto text-2xl p-3 grid gap-4 grid-cols-3 grid-rows-3">
        {bookings.map((book, index) => (
          <SingleBooking
            key={index}
            book={book}
            onDeleteBooking={onDeleteBooking}
            onUpdateBooking={onUpdateBooking}
          />
        ))}
      </div>
    </div>
  );
}

export default Bookings;
