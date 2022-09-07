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

  return (

  )
}