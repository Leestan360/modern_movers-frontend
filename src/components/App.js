// import Login from "./Login";
import Home from "./Home";
import NavBar from "./NavBar";
// import User from "./User";
import moving from "../assets/images/moving 1.png"

function App () {
  return (
    <div style={{ backgroundImage: `url(${moving})` }}>
      <NavBar />
      <Home />
      {/* <Login /> */}
      {/* <User /> */}
    </div>
  )
}

export default App;