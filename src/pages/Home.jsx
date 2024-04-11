import React from "react";
import Hero from '../components/Hero'
import bg from '../images/bg.jpeg'


const Home = () => {
  return (
    <main style={{
      backgroundColor: "#1a1a1a",
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat"
    }}>
      <Hero />
    </main>
  );
};

export default Home;
