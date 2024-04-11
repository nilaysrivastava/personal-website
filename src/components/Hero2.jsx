import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../utils/variants";
import TextSpan from "../utils/textSpan";
import { FiDownload, FiEye } from "react-icons/fi";
import about from "../images/Nilay-About.png";
import Cv from "../constants/resume.pdf";
import { FaArrowDown } from "react-icons/fa";

const scrollToBottom = () => {
  window.scrollTo({
    top: document.documentElement.scrollHeight,
    behavior: "smooth"
  });
};

const openResumeInNewTab = () => {
  window.open(Cv, "_blank");
};

const Hero2 = () => {
  const name = "About me.".split("");

  return (
    <section style={{ paddingTop: "3rem" }}>
      <div className="flex flex-col items-center justify-center w-full min-h-screen text-neutral-800 ">
        {/*container*/}
        <div className="grid items-center gap-4 md:gap-6 lg:gap-8 justify-items-center lg:grid-cols-2" 
        style={{
          // backgroundColor: 'rgba(255, 255, 255, 0.15)', /* Semi-transparent white background */
          backdropFilter: 'blur(5px)', /* Apply a blur effect */
          borderRadius: '20px', /* Rounded corners */
          boxShadow: '0px 12px 32px 0px purple', /* Soft shadow */
          padding: '20px', /* Add padding as needed */
          border: '1px solid #8B5CF6',
        }}>
          {/*image*/}
          <div className=" w-[200px] md:w-[300px] lg:w-[400px] xxl:w-[500px]">
            <motion.img
              variants={fadeIn("up", 0.1)}
              initial={"hidden"}
              whileInView={"show"}
              viewport={{ once: true, amount: 0.7 }}
              src={about}
              alt="An image of Nilay Srivastava"
            />
          </div>
          {/*text-box*/}
          <div className="grid items-center gap-1 md:gap-2 lg:gap-3 justify-items-center w-[300px] md:w-[400px]">
            {/*title*/}
            <motion.div
              className="text-3xl font-bold text-center md:text-4xl lg:text-5xl text-purple-500"
              variants={fadeIn("down", 0.1)}
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
            {/*text*/}
            <div className="flex flex-col text-justify text-neutral-400 ">
              <motion.p
                variants={fadeIn("down", 0.2)}
                initial={"hidden"}
                whileInView={"show"}
                viewport={{ once: true, amount: 0.7 }}
              >
                Passionate about continuous improvement and expanding my skill set, I specialize in crafting robust, high-performing solutions. With expertise in front-end technologies like ReactJS, Next.js, Bootstrap, MaterialUI, and TailwindCSS, complemented by a strong backend development background which includes Node.js, Express.js, MongoDB, PostgreSQL, and Firebase, I deliver innovative solutions tailored to diverse project needs. This combination of front-end and back-end expertise enables me to create seamless integration between front-end and backend systems for efficient and scalable applications.

              </motion.p>
            </div>
            {/*cv buttons*/}
            <div className="flex flex-row gap-2">
            <motion.div
                className="px-5 py-2 text-sm font-bold uppercase border-b-4 rounded-full bg-vBtn bg-purple-500 hover:bg-purple-800 border-purple-800 hover:border-purple-500"
                variants={fadeIn("down", 0.3)}
                initial={"hidden"}
                whileInView={"show"}
                viewport={{ once: true, amount: 0.7 }}
                onClick={openResumeInNewTab}
              >
                <div className="flex items-center gap-2">
                  <FiEye size={20} />
                  <p className="font-semibold">View Resume</p>
                </div>
              </motion.div>
              <motion.div
                className="px-5 py-2 text-sm font-bold uppercase border-b-4 rounded-full bg-vBtn bg-purple-500 hover:bg-purple-800 border-purple-800 hover:border-purple-500"
                variants={fadeIn("down", 0.3)}
                initial={"hidden"}
                whileInView={"show"}
                viewport={{ once: true, amount: 0.7 }}
                onClick={openResumeInNewTab}
              >
                <div className="flex items-center gap-2">
                  <FiDownload size={20} />
                  <p className="font-semibold">Download Resume</p>
                </div>
              </motion.div>
              
            </div>
          </div>
        </div>
        <motion.div
        variants={fadeIn("down", 0.1)}
        initial={"hidden"}
        whileInView={"show"}
        viewport={{ once: true, amount: 0.7 }}
          style={{
            marginTop: "2rem",
            paddingTop: "2rem",
            color: "white",
            cursor: "pointer",
            display: "flex",
            flexDirection: "column",
            justifyItems: "center",
            alignItems: "center"
          }}
          onClick={scrollToBottom}
        >
          <FaArrowDown /> Scroll Down
        </motion.div>
      </div>
    </section>
  );
};

export default Hero2;
