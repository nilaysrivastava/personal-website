import React from "react";
import Experience from "../components/Experience";
import Hero2 from "../components/Hero2";
import Responsibility from "../components/Responsibility";
import Skills from "../components/Skills";

const About = () => {
  return (
    <main
      style={{
        backgroundColor: "#1a1a1a",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Hero2 />
      <Experience />
      <Responsibility />
      <Skills />
    </main>
  );
};

export default About;
