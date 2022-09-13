import React, { useEffect, useState } from "react";
import SingleBooking from "./SingleBooking";

function Bookings() {

  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    fetch("http://localhost:9292/bookings")
    .then(res => res.json())
    .then(data => setBookings(data))
  }, []);


  function handleAddBooking(newBooking) {
    setBookings([...bookings, newBooking]);
  }

  function onDeleteBooking(id) {
    const updatedBookings = bookings.filter((booking) => booking.id !== id);
    setBookings(updatedBookings);
  }

  function onUpdateMessage(updatedMessageObj) {
    const updatedBookings = bookings.map((message) => {
      if (message.id === updatedMessageObj.id) {
        return updatedMessageObj;
      } else {
        return message;
      }
    });
    setBookings(updatedMessages);
  }

 
  return (
    <div className="mt-24 mx-auto text-2xl h-96 p-3 grid gap-4 grid-cols-3 grid-rows-3">
      {bookings.map((book, index) => (
        <SingleBooking key={index} book={book} onDeleteBooking={onDeleteBooking}/>
      ))}
    </div>
  )
};

export default Bookings;