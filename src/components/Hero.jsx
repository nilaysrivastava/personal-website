import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../utils/variants";
import TextSpan from "../utils/textSpan";
import { Typewriter } from "react-simple-typewriter";
import avatar from "../images/Nilay-Home.png";
import {
  FaEnvelope,
  FaGithub,
  FaLinkedinIn,
  FaInstagram,
  FaPhoneAlt,
} from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { SiGeeksforgeeks } from "react-icons/si";

const Hero = () => {
  const name = "Nilay Srivastava".split("");

  return (
    <section className="flex items-center justify-center min-h-screen px-4 py-10 sm:px-8 lg:px-16">
      <div className="grid gap-8 rounded-3xl border border-purple-500 p-6 sm:p-10 shadow-[0px_12px_32px_0px_purple] backdrop-blur-sm bg-black/80 w-full max-w-6xl lg:grid-cols-2">
        {/* Avatar + Social Icons */}
        <div className="flex flex-col items-center gap-4 lg:order-1">
          <motion.img
            className="w-[180px] sm:w-[240px] md:w-[300px] lg:w-[350px] xl:w-[400px]"
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.7 }}
            src={avatar}
            alt="Nilay Srivastava"
          />

          {/* Social Icons */}
          <motion.div
            className="flex flex-wrap justify-center gap-3 mt-2"
            variants={fadeIn("up", 0.3)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.7 }}
          >
            <a
              href="mailto:nilay2103@gmail.com"
              className="text-purple-300 hover:text-black hover:bg-purple-600 p-2 border-2 border-purple-500 rounded-full transition"
              title="Gmail"
            >
              <FaEnvelope size={18} />
            </a>
            <a
              href="https://github.com/nilay2103"
              target="_blank"
              rel="noopener noreferrer"
              className="text-purple-300 hover:text-black hover:bg-purple-600 p-2 border-2 border-purple-500 rounded-full transition"
              title="GitHub"
            >
              <FaGithub size={18} />
            </a>
            <a
              href="https://linkedin.com/in/nilaysrivastava2103"
              target="_blank"
              rel="noopener noreferrer"
              className="text-purple-300 hover:text-black hover:bg-purple-600 p-2 border-2 border-purple-500 rounded-full transition"
              title="LinkedIn"
            >
              <FaLinkedinIn size={18} />
            </a>
            <a
              href="https://instagram.com/nilaysriivastava"
              target="_blank"
              rel="noopener noreferrer"
              className="text-purple-300 hover:text-black hover:bg-purple-600 p-2 border-2 border-purple-500 rounded-full transition"
              title="Instagram"
            >
              <FaInstagram size={18} />
            </a>
            <a
              href="https://leetcode.com/nilaysrivastava"
              target="_blank"
              rel="noopener noreferrer"
              className="text-purple-300 hover:text-black hover:bg-purple-600 p-2 border-2 border-purple-500 rounded-full transition"
              title="LeetCode"
            >
              <SiLeetcode size={18} />
            </a>
            <a
              href="https://auth.geeksforgeeks.org/user/nilay2103"
              target="_blank"
              rel="noopener noreferrer"
              className="text-purple-300 hover:text-black hover:bg-purple-600 p-2 border-2 border-purple-500 rounded-full transition"
              title="GeeksforGeeks"
            >
              <SiGeeksforgeeks size={18} />
            </a>
            <a
              href="tel:+916391058103"
              className="text-purple-300 hover:text-black hover:bg-purple-600 p-2 border-2 border-purple-500 rounded-full transition"
              title="Phone"
            >
              <FaPhoneAlt size={18} />
            </a>
          </motion.div>
        </div>

        {/* Text content */}
        <div className="flex flex-col items-center text-center lg:items-end lg:text-right gap-3">
          <motion.p
            className="text-white text-xl sm:text-base md:text-2xl"
            variants={fadeIn("down", 0.1)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.7 }}
          >
            Hello, I'm
          </motion.p>

          <motion.div
            className="text-purple-500 font-bold text-3xl sm:text-4xl md:text-5xl xl:text-6xl"
            variants={fadeIn("down", 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.7 }}
          >
            {name.map((letter, index) => (
              <TextSpan key={index}>
                {letter === " " ? "\u00A0" : letter}
              </TextSpan>
            ))}
          </motion.div>

          <motion.div
            className="flex items-center gap-2"
            variants={fadeIn("down", 0.3)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.7 }}
          >
            <h2 className="text-neutral-500 text-base sm:text-xl md:text-2xl font-semibold pb-6 pt-6">
              I'm a
            </h2>
            <span className="text-neutral-100 text-base sm:text-xl md:text-2xl font-semibold pb-6 pt-6">
              <Typewriter
                words={[
                  "Full Stack Software Developer",
                  "DevOps & Automation Specialist",
                  "Cloud Solutions Architect",
                  "DSA Problem Solving Expert",
                ]}
                typeSpeed={50}
                deleteSpeed={50}
                delaySpeed={2000}
                cursor
                loop={false}
              />
            </span>
          </motion.div>

          <motion.p
            className="text-neutral-400 text-sm sm:text-base max-w-[320px] sm:max-w-md md:max-w-lg pb-2"
            variants={fadeIn("down", 0.4)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.7 }}
          >
            A full-stack developer and DevOps enthusiast with a strong grasp of
            DSA, passionate about building cloud-native, scalable systems,
            solving real-world problems, and exploring the evolving landscape of
            AI/ML.
          </motion.p>

          <motion.div
            className="flex justify-center gap-6 mt-6"
            variants={fadeIn("up", 0.3)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.7 }}
          >
            <a
              href="/about"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2 border-2 border-purple-600 text-purple-300 hover:bg-purple-600 hover:text-black rounded-full transition-all duration-300"
            >
              About
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
