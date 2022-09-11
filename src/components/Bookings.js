import React, { useEffect, useState } from "react";
import SingleBooking from "./SingleBooking";

function Bookings() {

  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    fetch("http://localhost:9292/bookings")
    .then(res => res.json())
    .then(data => setBookings(data))
  }, []);

  const displayBookings = bookings.map((book, index) => {
    return <SingleBooking key={book.id} book={book} />
  })
 
  return (
    <div className="mt-24 mx-auto text-2xl h-96 p-3 grid gap-4 grid-cols-3 grid-rows-3">
      {displayBookings}
    </div>
  )
};

export default Bookings;