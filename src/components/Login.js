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
        
      } else {
        alert("Incorrect email or password!")
      }
      return user;
    })
  }

  // login form
  return (
    <div>
      <form 
        className="border-solid mt-24 mx-auto p-4 h-50 w-80 border-2 rounded-lg border-gray-300 bg-gray-300 text-center"
        type="submit" onSubmit={handleSubmit}>
        <h2 className="text-2xl mx-auto text-center">Log in to account</h2>
        <input 
          type="email"
          className="border-solid mt-2 mx-auto p-1 h-9 border-2 rounded-md border-gray-300 text-lg outline-none"
          placeholder="Email" 
          required 
          value={email}
          onChange={handleEmailChange}
        />
        <input
          type="password"
          className="border-solid mt-2 mx-auto p-1 h-9 border-2 rounded-md border-gray-300 text-lg outline-none"
          placeholder="Password"
          required
          value={password}
          onChange={handlePasswordChange}
        />
        <button 
        className="border-solid rounded-md items-center text-xl p-1 px-14 h-9 w-78 my-2 mx-auto bg-cyan-500"
        type="submit">Log in</button>
      </form>
      <p 
      className="border-solid mt-3 text-1xl mx-auto p-2 h-12 w-80 border-2 rounded-lg border-gray-300 bg-gray-300 text-center"
      >
        
        Don't have an account?
        {/* <Link
          to="/signup" 
        > */}
          <button
          className="border-solid rounded-md items-center text-xl px-3 mx-2 mx-auto bg-cyan-500"
          >Sign Up</button>
        {/* </Link> */}
      </p>
    </div>
  );
}

export default Login;