import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../utils/variants";
import { FaBriefcase } from "react-icons/fa";
import TextSpan from "../utils/textSpan"; // Make sure this path is correct

const Experience = () => {
  const heading = "Experience".split("");

  return (
    <section className="flex flex-col items-center justify-center px-4 py-12 sm:px-8 lg:px-16 gap-6 pt-32">
      {/* Animated Heading */}
      <motion.div
        className="text-purple-500 font-bold text-3xl sm:text-4xl md:text-5xl text-center pb-10"
        variants={fadeIn("down", 0.1)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.7 }}
      >
        {heading.map((letter, index) => (
          <TextSpan key={index}>{letter === " " ? "\u00A0" : letter}</TextSpan>
        ))}
      </motion.div>

      {/* Card Container */}
      <div className="w-full max-w-6xl rounded-3xl border border-purple-500 p-6 sm:p-10 shadow-[0px_12px_32px_0px_purple] backdrop-blur-sm bg-black/80">
        <motion.div
          className="flex flex-col gap-4 text-neutral-300"
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.7 }}
        >
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center">
            <div className="flex items-center gap-3 text-xl sm:text-2xl font-semibold text-purple-400">
              <FaBriefcase className="text-purple-500" />
              Full Stack Developer Intern
            </div>
            <div className="text-sm sm:text-base text-neutral-400 italic mt-1 sm:mt-0">
              July 2024 – Oct 2024
            </div>
          </div>

          <div className="text-neutral-400 text-sm sm:text-base font-medium">
            <span className="text-purple-300">DMD Solutions</span> · Remote
          </div>

          <ul className="list-disc pl-6 text-sm sm:text-base text-neutral-400 leading-relaxed space-y-2">
            <li>
              Worked on full-stack web application development, creating
              responsive UIs and scalable backend APIs.
            </li>
            <li>
              Utilized <span className="text-purple-300">Next.js</span>,{" "}
              <span className="text-purple-300">TailwindCSS</span>,{" "}
              <span className="text-purple-300">Node.js</span>, and{" "}
              <span className="text-purple-300">Express.js</span> to build
              production-ready features.
            </li>
            <li>
              Enhanced debugging and code quality using unit testing, Git
              version control, and collaborative code reviews.
            </li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
