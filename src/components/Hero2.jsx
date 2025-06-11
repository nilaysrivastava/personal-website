import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../utils/variants";
import TextSpan from "../utils/textSpan";
import about from "../images/Nilay-About.png";

const Hero2 = () => {
  const name = "About me.".split("");

  return (
    <section className="flex flex-col items-center justify-center min-h-screen px-4 py-10 sm:px-8 lg:px-16">
      <div className="grid gap-8 rounded-3xl border border-purple-500 p-6 sm:p-10 shadow-[0px_12px_32px_0px_purple] backdrop-blur-sm bg-black/80 w-full max-w-6xl lg:grid-cols-2">
        {/* Image */}
        <div className="flex justify-center lg:order-1">
          <motion.img
            className="w-[180px] sm:w-[240px] md:w-[300px] lg:w-[350px] xl:w-[400px]"
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.7 }}
            src={about}
            alt="Nilay Srivastava"
          />
        </div>

        {/* Text content */}
        <div className="flex flex-col items-center text-center lg:items-end lg:text-right gap-3">
          {/* Title */}
          <motion.div
            className="text-purple-500 font-bold text-3xl sm:text-4xl md:text-5xl"
            variants={fadeIn("down", 0.1)}
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

          {/* Description */}
          <motion.p
            className="text-neutral-400 text-sm sm:text-base max-w-[320px] sm:max-w-md md:max-w-lg"
            variants={fadeIn("down", 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.7 }}
          >
            I’m a pre-final year dual-degree (B.Tech + M.Tech) student in
            Information Technology at ABV-IIITM Gwalior, with a strong
            foundation in Full-stack Development, DevOps, and Data Structures
            and Algorithms. I enjoy solving complex problems efficiently and
            have consistently applied DSA skills in competitive coding and
            real-world applications. My experience spans building scalable web
            applications, automating deployments, and managing cloud
            infrastructure. I’ve also explored machine learning through academic
            projects and I am currently exploring the AI/ML field.
          </motion.p>

          {/* Button */}
          <motion.div
            className="flex justify-center gap-6 mt-6"
            variants={fadeIn("up", 0.3)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.7 }}
          >
            <a
              href="https://drive.google.com/file/d/15zBCKUNcuu_Y88nNQfgdxRz_ZKI5eMB5/view?usp=drive_link"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2 border-2 border-purple-600 text-purple-300 hover:bg-purple-600 hover:text-black rounded-full transition-all duration-300"
            >
              View Resume
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero2;
