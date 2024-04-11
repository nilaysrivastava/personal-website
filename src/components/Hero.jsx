import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../utils/variants";
import { Link } from "react-router-dom";
import TextSpan from "../utils/textSpan";
import { Typewriter } from "react-simple-typewriter";
import avatar from "../images/Nilay-Home.png";


const Hero = () => {
  
  const name = "Nilay Srivastava".split("");

  return (
    <section>
      <div className="flex flex-col items-center justify-center w-full min-h-screen text-neutral-800">
        {/*container*/}
        <div className="grid items-center gap-5 mx-8 justify-items-center lg:grid-cols-2 "
        style={{
          // backgroundColor: 'rgba(255, 255, 255, 0.15)', /* Semi-transparent white background */
          backdropFilter: 'blur(5px)', /* Apply a blur effect */
          borderRadius: '20px', /* Rounded corners */
          boxShadow: '0px 12px 32px 0px purple', /* Soft shadow */
          padding: '20px', /* Add padding as needed */
          height:"60vh",
          border: '1px solid #8B5CF6',
        }}>
          {/*avatar*/}
            <div className=" w-[200px] md:w-[300px] lg:order-1 lg:w-[400px] xxl:w-[500px]">
              <motion.img
                variants={fadeIn("up", 0.2)}
                initial={"hidden"}
                whileInView={"show"}
                viewport={{ once: false, amount: 0.7 }}
                src={avatar}
                alt="Image of Nilay Srivastava"
              />
            </div>
          {/*text box*/}
          <div className="flex flex-col items-center gap-1 text-center md:gap-2 lg:items-end lg:text-right">
            <motion.p
              className="md:text-[18px] lg:text-2xl text-white"
              variants={fadeIn("down", 0.1)}
              initial={"hidden"}
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
            >
              Hi 👋, my name is
            </motion.p>
            {/*name box*/}
            <motion.div
              className="text-3xl font-bold md:text-4xl lg:text-5xl xxl:text-6xl text-purple-500"
              variants={fadeIn("down", 0.2)}
              initial={"hidden"}
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
            >
              {name.map((letter, index) => {
                return (
                  <TextSpan key={index}>
                    {letter === " " ? "\u00A0" : letter}
                  </TextSpan>
                );
              })}
            </motion.div>
            {/*typing-animation box*/}
            <motion.div
              className="flex items-center gap-2"
              variants={fadeIn("down", 0.3)}
              initial={"hidden"}
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
            >
        
              <h2 className=" text-neutral-500 text-[20px] font-semibold md:text-[24px] lg:text-3xl">I'm a</h2>
              <div className=" text-neutral-100 text-[20px] font-semibold md:text-[24px] lg:text-3xl">
                <Typewriter
                  words={[
                    "ReactJs Developer",
                    "NextJs Developer",
                    "Full Stack Developer",
                  ]}
                  typeSpeed={50}
                  deleteSpeed={50}
                  delaySpeed={2000}
                  cursor
                  loop={false}
                />
              </div>
            </motion.div>
            <motion.p
              className=" text-neutral-400 w-[300px] md:w-[400px] md:text-[18px]"
              variants={fadeIn("down", 0.4)}
              initial={"hidden"}
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
            >
              Dedicated to continuous learning, I excel in crafting top-notch solutions. Proficient in ReactJS, NextJs, and backend development.
            </motion.p>
            <Link to={"About"}>
              <motion.button
                className="px-5 py-2 mt-2 text-sm font-bold text-black uppercase border-b-4 rounded-full bg-purple-500 hover:bg-purple-800 border-purple-800 hover:border-purple-500"
                variants={fadeIn("down", 0.5)}
                initial={"hidden"}
                whileInView={"show"}
                viewport={{ once: false, amount: 0.7 }}
              >
                About Me
              </motion.button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
