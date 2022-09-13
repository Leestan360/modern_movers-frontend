import React from "react";

function SingleBooking({ book, onDeleteBooking }) {

  const id = book.id;

  function handleDelete() {
    fetch(`http://localhost:9292/bookings/${id}`, {
      method: "DELETE",
      headers: {
        "Content-type": "application/json",
      },
    })
    onDeleteBooking(id)
  }

  function handleEdit() {
    fetch(`http://localhost:9292/bookings/${id}`, {
      method: "PATCH",
      body: JSON.stringify({ body: book.body }),
      headers: {
        "Content-type": "application/json",
      },
    })
    .then(res => res.json())
    .then(data => console.log(data))
  }

  return (
    <div className="border-2 rounded-lg border-emerald-300 w-96 h-28 pt-4 pl-4 ml-6">
      <p>{book.body}</p>
      <div className="mt-4 flex justify-between mr-4">
        <button className="bg-orange-500 px-3 rounded-lg" onClick={handleEdit}>Edit</button>
        <button className="bg-orange-500 px-1 rounded-lg" onClick={handleDelete}>Delete</button>
      </div>
    </div>
  );
}

export default SingleBooking;
