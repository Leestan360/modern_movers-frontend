import React, { useEffect, useState } from "react";

function Bookings() {

  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    fetch("http://localhost:9292/bookings")
    .then(res => res.json())
    .then(data => setBookings(data))
  }, []);

  const displaybookings = bookings.map((book, index) => {
    return <SingleBook key={index} book={book} />
  })
 
  return (
    <div>
      {displaybookings}
    </div>
  )
};

export default Bookings;