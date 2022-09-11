import React from "react";

function SingleBooking({ book }) {
  return (
    <div className="border-2 rounded-lg border-emerald-300 w-96 h-28 pt-4 pl-4 ml-6">
      <p>{book.body}</p>
      <div className="mt-4 flex justify-between mr-4">
        <button className="bg-orange-500 px-3 rounded-lg">Edit</button>
        <button className="bg-orange-500 px-1 rounded-lg">Delete</button>
      </div>
    </div>
  );
}

export default SingleBooking;
