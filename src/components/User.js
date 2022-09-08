import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function User() {
  const navigate = useNavigate();

  // for value inputs in the form
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    password_confirmation: "",
  });

  // capture changes that happen to the inputs
  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  // handle form submition
  function handleSubmit(e) {
    e.preventDefault();

    // signup form data
    const signupFormData = {
      first_name: formData.first_name,
      last_name: formData.last_name,
      email: formData.email,
      password: formData.password,
      password_confirmation: formData.password_confirmation,
    };

    // Verify form data

    if (signupFormData.password !== signupFormData.password_confirmation) {
      alert("Passwords do not match!");
    } else if (signupFormData.password.length < 8) {
      alert("Password must be a minimum of 8 characters");
    } else {
      // fetch users and send a post request for a new user
      fetch("http://localhost:9292/users", {
        method: "POST",
        body: JSON.stringify({ signupFormData }),
        headers: {
          "Content-type": "application/json",
        },
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          navigate("/login");
          alert(
            `Welcome ${signupFormData.first_name} ${signupFormData.last_name}`
          );
        })
        .catch((err) => console.log(err));
    }
  }

  return (
    <div>
      {/* Login form */}
      <form
        className="border-solid mt-20 mx-auto p-4 h-80 w-80 border-2 rounded-lg border-gray-300 bg-gray-300 text-center"
        onSubmit={handleSubmit}
      >
        <h2 className="text-2xl mx-auto text-center">Create Account</h2>
        <input
          className="border-solid mt-2 mx-auto p-1 h-9 border-2 rounded-md border-gray-300 text-lg outline-none"
          name="first_name"
          onChange={handleChange}
          type="text"
          value={formData.first_name}
          placeholder="First Name"
          required
        />
        <input
          className="border-solid mt-2 mx-auto p-1 h-9 border-2 rounded-md border-gray-300 text-lg outline-none"
          name="last_name"
          onChange={handleChange}
          type="text"
          value={formData.last_name}
          placeholder="Last Name"
          required
        />
        <input
          className="border-solid mt-2 mx-auto p-1 h-9 border-2 rounded-md border-gray-300 text-lg outline-none"
          name="email"
          onChange={handleChange}
          type="email"
          value={formData.email}
          placeholder="Email"
          required
        />

        <input
          className="border-solid mt-2 mx-auto p-1 h-9 border-2 rounded-md border-gray-300 text-lg outline-none"
          name="password"
          onChange={handleChange}
          type="password"
          value={formData.password}
          placeholder="Password"
          required
        />
        <input
          className="border-solid mt-2 mx-auto p-1 h-9 border-2 rounded-md border-gray-300 text-lg outline-none"
          name="password_confirmation"
          onChange={handleChange}
          type="password"
          value={formData.password_confirmation}
          placeholder="Confirm Password"
          required
        />
        <button
          className="border-solid rounded-md items-center text-xl p-1 px-14 h-9 w-78 my-2 mx-auto bg-cyan-500"
          type="submit"
        >
          Sign Up
        </button>
      </form>
      <p className="border-solid mt-3 text-xl mx-auto p-2 h-12 w-80 border-2 rounded-lg border-gray-300 bg-gray-300 text-center">
        Have an account?
        {/* <Link
          to="/login" */}
        {/* > */}
        <button className="border-solid rounded-md items-center text-xl px-3 mx-2 mx-auto bg-cyan-500">
          Login
        </button>
        {/* </Link> */}
      </p>
    </div>
  );
}

export default User;
