import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function User() {
  const navigate = useNavigate();

  // for value inputs in the form
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    passwordConfirmation: "",
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
      firstName: formData.firstName,
      lastName: formData.lastName,
      email: formData.email,
      password: formData.password,
      passwordConfirmation: formData.passwordConfirmation,
    };

    // Verify form data

    if (formData.password !== formData.passwordConfirmation) {
      alert("Passwords do not match!");
    } else if (signupFormData.password.length < 6) {
      alert("Password must be a minimum of 6 characters");
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
            `Welcome ${signupFormData.firstName} ${signupFormData.lastName}`
          );
        })
        .catch((err) => console.log(err));
    }
  }

  return (
    <div className="signup">
      <form onSubmit={handleSubmit} className="signup-form">
        <h2 id="h2">Create Account</h2>
        <input
          onChange={handleChange}
          name="firstName"
          type="text"
          value={formData.firstName}
          placeholder="FirstName"
          required
        />
        <input
          onChange={handleChange}
          name="lastName"
          type="text"
          value={formData.lastName}
          placeholder="LastName"
          required
        />
        <input
          onChange={handleChange}
          name="email"
          type="email"
          value={formData.email}
          placeholder="Email"
          required
        />

        <input
          onChange={handleChange}
          name="password"
          type="password"
          value={formData.password}
          placeholder="Password"
          required
        />
        <input
          onChange={handleChange}
          name="passwordConfirmation"
          type="password"
          value={formData.confirmPassword}
          placeholder="Confirm Password"
          required
        />
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
}

export default User;