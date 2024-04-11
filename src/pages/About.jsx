import React from "react";
import Hero2 from '../components/Hero2'
import Skills from '../components/Skills'
import bg from '../images/bg.jpeg'

const About = () => {
  return (
    <main style={{
      backgroundColor: "#1a1a1a",

      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat"
    }}>
      <Hero2 />
      <Skills />
    </main>
  );
};

export default About;
