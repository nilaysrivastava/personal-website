import React from "react";
import Hero from "../components/Hero";

const Home = () => {
  return (
    <main
      className="min-h-screen"
      style={{
        backgroundColor: "#1a1a1a",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Hero />
    </main>
  );
};

export default Home;
