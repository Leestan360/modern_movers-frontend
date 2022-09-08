import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";


function Login() {

  const navigate = useNavigate();

  const [userData, setUserData] = useState([]);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    fetch("http://localhost:9292/users")
    .then((res) => res.json())
    .then(data => {
      setUserData(data)
    })
  }, [])

  function handleEmailChange(e) {
    setEmail(e.target.value)
  }

  function handlePasswordChange(e) {
    setPassword(e.target.value)
  }

  function handleSubmit(e) {
    e.preventDefault();

    userData.filter(user => {
      if (user.email === email && user.password === password) {
        alert(`Welcome ${user.first_name} ${user.last_name}`)
        navigate("/")
        
      } 
      return user;
    })
  }

  // login form
  return (
    <div className="login">
      <form type="submit" className="login-form" onSubmit={handleSubmit}>
        <h2 id="h2">Log in to account</h2>
        <input 
          type="email"
          
          placeholder="Email" 
          required 
          value={email}
          onChange={handleEmailChange}
        />
        <input
          type="password"
         
          placeholder="Password"
          required
          value={password}
          onChange={handlePasswordChange}
        />
        <button type="submit">Log in</button>
      </form>
      <p>
        Don't have an account?
        {/* <Link
          to="/signup" 
        > */}
          Sign Up
        {/* </Link> */}
      </p>
    </div>
  );
}

export default Login;