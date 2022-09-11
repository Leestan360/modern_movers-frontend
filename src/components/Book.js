import React, { useEffect, useState } from "react";

function Book() {

  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    fetch("http://localhost:9292/bookings")
    .then(res => res.json())
    .then(data => setBookings(data))
  }, []);
 
  return (
    <div>

    </div>
  )
};

export default Book;