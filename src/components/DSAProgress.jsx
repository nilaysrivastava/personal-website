import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../utils/variants";
import { FaLink } from "react-icons/fa";
import CountUp from "react-countup";
import TextSpan from "../utils/textSpan"; // ✅ Importing TextSpan
import hm from "../images/hm.png";

const DSAProgress = () => {
  const title = "DSA Progress".split("");

  return (
    <section className="flex flex-col items-center justify-center min-h-screen px-4 py-10 sm:px-8 lg:px-16 gap-8">
      {/* Animated Heading Outside the Card */}
      <motion.h2
        className="text-purple-400 text-3xl sm:text-4xl md:text-5xl font-bold text-center"
        variants={fadeIn("down", 0.1)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.7 }}
      >
        {title.map((letter, index) => (
          <TextSpan key={index}>{letter === " " ? "\u00A0" : letter}</TextSpan>
        ))}
      </motion.h2>

      {/* Stats + Heatmap Card */}
      <div className="grid gap-6 rounded-3xl border border-purple-500 p-4 sm:p-6 lg:p-10 shadow-[0px_12px_32px_0px_purple] backdrop-blur-sm bg-black/80 lg:w-1/2 max-w-6xl">
        {/* Stats and Heatmap Section */}
        <motion.div
          className="grid grid-cols-1 gap-6 text-white items-center"
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.7 }}
        >
          {/* Problem Count Card */}
          <div className="bg-purple-900/30 rounded-xl p-5 text-center shadow-inner">
            <p className="text-lg sm:text-xl font-semibold text-purple-300">
              Total Problems Solved
            </p>
            <p className="text-3xl sm:text-4xl font-bold pt-4">
              <CountUp end={450} duration={4} />+
            </p>
          </div>

          {/* Heatmap Image */}
          <div className="flex justify-center items-center">
            <motion.img
              className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl rounded-lg"
              variants={fadeIn("up", 0.3)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.7 }}
              src={hm}
              alt="heat map"
            />
          </div>
        </motion.div>

        {/* Profile Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6 mt-6"
          variants={fadeIn("up", 0.4)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.7 }}
        >
          <a
            href="https://leetcode.com/nilaysrivastava"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 px-5 py-2 border-2 border-purple-600 text-purple-300 hover:bg-purple-600 hover:text-black rounded-full transition-all duration-300"
          >
            <FaLink /> LeetCode Profile
          </a>
          <a
            href="https://auth.geeksforgeeks.org/user/nilaysrivastava2103/profile"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 px-5 py-2 border-2 border-green-600 text-green-300 hover:bg-green-600 hover:text-black rounded-full transition-all duration-300"
          >
            <FaLink /> GFG Profile
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default DSAProgress;
