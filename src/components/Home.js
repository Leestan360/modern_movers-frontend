import React from "react";
import moving from '../assets/images/moving 1.png';

function Home() {
  return (
    <div
    style={{ backgroundImage: `url(${moving})` }}
    >
      <p>Welcome to Modern Movers</p>
    </div>
  )
};

export default Home;