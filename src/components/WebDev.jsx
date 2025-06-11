import React, { useRef, useEffect } from "react";
import works from "../constants/works";
import { motion } from "framer-motion";
import { fadeIn } from "../utils/variants";

const WebDev = () => {
  const cursorRef = useRef(null);

  useEffect(() => {
    const moveCursor = (e) => {
      const cursor = cursorRef.current;
      if (cursor) {
        cursor.style.left = e.pageX + "px";
        cursor.style.top = e.pageY + "px";
      }
    };

    window.addEventListener("mousemove", moveCursor);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };
  }, []);

  return (
    <section>
      <div>
        {/* Cursor tracking element */}
        <div ref={cursorRef} className="cursor"></div>

        {/* Card container */}
        <div className="grid gap-20 lg:grid-cols-2 max-w-[1000px] items-center pb-5">
          {works.web.map((project, index) => {
            return (
              <div key={index}>
                {/* Fixed Box Container */}
                <div
                  className={`grid gap-2 p-8 mx-8 duration-200 ease-in-out lg:mx-0 rounded-2xl lg:hover:-translate-y-2 text-white shadow-lg ${project.shadow}`}
                  style={{ backgroundColor: "black" }}
                >
                  {/* Image with Motion */}
                  <motion.a
                    className="flex items-center gap-2 text-[20px] md:text-2xl font-bold cursor-pointer"
                    target="#"
                    href={project.link}
                    variants={fadeIn("up", 0.1)}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: false, amount: 0.7 }}
                  >
                    <img
                      className="max-w-full rounded-md"
                      src={project.image}
                      alt={project.title}
                    />
                  </motion.a>

                  {/* Title with Motion */}
                  <motion.a
                    className="flex items-center gap-2 text-[20px] md:text-2xl font-bold"
                    variants={fadeIn("up", 0.2)}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: false, amount: 0.7 }}
                  >
                    <p className="text-purple-500">{project.title}</p>
                  </motion.a>

                  {/* Description with Motion */}
                  <motion.p
                    variants={fadeIn("up", 0.3)}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: false, amount: 0.7 }}
                  >
                    {project.description}
                  </motion.p>

                  {/* Tech Stack with Motion */}
                  <motion.div
                    className="flex flex-wrap items-center gap-2 text-sm"
                    variants={fadeIn("up", 0.4)}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: false, amount: 0.7 }}
                  >
                    <span className="font-semibold">Built with:</span>
                    <span className="text-purple-500">{project.stack}</span>
                  </motion.div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WebDev;
