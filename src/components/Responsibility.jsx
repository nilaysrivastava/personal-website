import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../utils/variants";
import { FaUserTie } from "react-icons/fa";
import TextSpan from "../utils/textSpan";

const Responsibility = () => {
  const heading = "Positions of Responsibility".split("");

  const roles = [
    {
      title: "Disaster Management Team Member",
      org: "URJA’23",
      date: "Apr 2023",
    },
    {
      title: "Web Development Team Member",
      org: "IEEE Student's Branch",
      date: "Feb 2024 – Aug 2024",
    },
    {
      title: "SAC Cultural Executive",
      org: "Students Activity Council",
      date: "Apr 2024 – Mar 2025",
    },
    {
      title: "Event Co-ordinator",
      org: "URJA'25 ",
      date: "Jan 2025",
    },
    {
      title: "Event Co-ordinator (Hospitality Lead)",
      org: "Inter-IIIT Sports Fest 2025 (Twaran’25)",
      date: "Mar 2025",
    },
  ];

  return (
    <section className="flex flex-col items-center min-h-screen justify-center px-4 py-12 sm:px-8 lg:px-16 gap-6">
      {/* Heading with letter animation */}
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

      {/* Responsibility card */}
      <div className="w-full max-w-6xl rounded-3xl border border-purple-500 p-6 sm:p-10 shadow-[0px_12px_32px_0px_purple] backdrop-blur-sm bg-black/80">
        <motion.div
          className="flex flex-col gap-6 text-neutral-300"
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.7 }}
        >
          {roles.map((role, index) => (
            <div key={index} className="flex flex-col gap-1">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center">
                <div className="flex items-center gap-3 text-lg sm:text-xl font-semibold text-purple-400">
                  <FaUserTie className="text-purple-500" />
                  {role.title}
                </div>
                <div className="text-sm sm:text-base text-neutral-400 italic mt-1 sm:mt-0">
                  {role.date}
                </div>
              </div>
              <div className="text-neutral-400 text-sm sm:text-base font-medium">
                {role.org}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Responsibility;
