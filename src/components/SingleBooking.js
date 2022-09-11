import React from "react";

function SingleBooking({ book }) {
  return (
    <div className="border-2 rounded-lg w-96 h-40 pt-4 pl-4 flex ml-6">
      <p>{book.body}</p>
      <div>
        <button>Delete</button>
        <button>Edit</button>
      </div>
    </div>
  )
}

export default SingleBooking;