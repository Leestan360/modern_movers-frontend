import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

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

  return (

  )
}