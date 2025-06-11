import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../utils/variants";
import WebDev from "../components/WebDev";
import TextSpan from "../utils/textSpan";

const Projects = () => {
  const name = "My projects.".split("");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main
      className="pb-24"
      style={{
        backgroundColor: "#1a1a1a",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <section>
        <div className="flex flex-col items-center justify-center gap-6 pb-10 md:mx-8 text-neutral-800">
          <motion.div
            className="lg:mt-[100px] mt-[70px] mb-[10px] lg:mb-[30px]  text-3xl font-bold md:text-4xl lg:text-5xl text-purple-500"
            variants={fadeIn("up", 0.1)}
            initial={"hidden"}
            whileInView={"show"}
            viewport={{ once: true, amount: 0.7 }}
          >
            {name.map((letter, index) => {
              return (
                <TextSpan key={index}>
                  {letter === " " ? "\u00A0" : letter}
                </TextSpan>
              );
            })}
          </motion.div>
          <WebDev />
        </div>
      </section>
    </main>
  );
};

export default Projects;
