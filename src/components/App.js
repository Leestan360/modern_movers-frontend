// import Login from "./Login";
// import Home from "./Home";
import NavBar from "./NavBar";
// import User from "./User";
import moving from "../assets/images/moving 1.png"
// import Book from "./Book";
import Bookings from "./Bookings";

function App () {
  return (
    <div style={{ backgroundImage: `url(${moving})` }}>
      <NavBar />
      <Bookings />
      {/* <Login /> */}
      {/* <User /> */}
    </div>
  )
}

export default App;