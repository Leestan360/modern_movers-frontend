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
    <div className="mt-24 ml-10 text-2xl h-96 p-3 flex">
      {displayBookings}
    </div>
  )
};

export default Bookings;