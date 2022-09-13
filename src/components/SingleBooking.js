import React, { useState } from "react";
import EditBooking from "./EditBooking";

function SingleBooking({ book, onDeleteBooking, onUpdateBooking }) {
  const [isEditing, setIsEditing] = useState(false);

  const { id, body } = book;

  function handleDelete() {
    fetch(`http://localhost:9292/bookings/${id}`, {
      method: "DELETE",
      headers: {
        "Content-type": "application/json",
      },
    });
    onDeleteBooking(id);
  }

  function handleBooking(updatedBooking) {
    setIsEditing(false);
    onUpdateBooking(updatedBooking);
  }

  return (
    <div className="border-2 rounded-lg border-emerald-300 w-96 h-24 pt-2 pl-2 ml-6 overflow-hidden">
      {isEditing ? (
        <EditBooking id={id} body={body} onUpdateBooking={handleBooking} />
      ) : (
        <p className="text-white">{body}</p>
      )}
      {
        <div className="flex justify-between mr-2 mb-0">
          <button
            className="bg-orange-500 px-3 rounded-lg"
            onClick={() => setIsEditing((isEditing) => !isEditing)}
          >
            Edit
          </button>
          <button
            className="bg-orange-500 px-1 rounded-lg"
            onClick={handleDelete}
          >
            Delete
          </button>
        </div>
      }
      {/* </div> */}
    </div>
  );
}

export default SingleBooking;
