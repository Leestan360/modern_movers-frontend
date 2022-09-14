import React, { useState } from "react";

function EditBooking(book, onUpdateBooking) {
  const [bookBody, setBookBody] = useState(book.body);

  function handleChange(e) {
    setBookBody(e.target.value);
  }

  function handleUpdateBooking(e) {
    e.preventDefault();

    fetch(`https://modern-movers-backend.herokuapp.com/bookings/${book.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        body: bookBody,
      }),
    })
      .then((r) => r.json())
      .then((updatedBooking) => onUpdateBooking(updatedBooking));
  }

  return (
    <form onSubmit={handleUpdateBooking}>
      <input
        className="border-2 border-emerald-300 mx-auto"
        type="text"
        name="body"
        value={bookBody}
        onChange={handleChange}
      />
      <input className="cursor-pointer" type="submit" value="Save" />
    </form>
  );
}

export default EditBooking;
