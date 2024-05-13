import React from "react";
// import { motion } from "framer-motion";
import EmailForm from "../components/EmailForm";
import bg from '../images/bg.jpeg'

const Contacts = () => {
  return (
    <main style={{
      backgroundColor: "#1a1a1a",
      // backgroundImage: 'linear-gradient(to bottom-right, gray, black)',
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat"
    }}>
        <EmailForm/>
    </main>
  );
};

export default Contacts;