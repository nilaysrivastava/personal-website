import React from "react";
import works from "../constants/works";
import { motion } from "framer-motion";
import { fadeIn } from "../utils/variants";

const Multimedia = () => {
  return (
    <section>
      <div className="grid gap-5 lg:grid-cols-3 max-w-[1500px] items-center">
        {works.multimedia.map((project, index) => {
          return (
            <motion.div
              key={index}
              variants={fadeIn("up", project.duration)}
              initial={"hidden"}
              whileInView={"show"}
              viewport={{ once: true, amount: "some" }}
            >
              <div className="grid gap-2 p-8 mx-8 duration-200 ease-in-out bg-white shadow-lg lg:mx-0 rounded-2xl lg:hover:-translate-y-3">
                <img
                  className="max-w-full rounded-md"
                  src={project.image}
                  alt={`${project.title} Thumbnail`}
                />
                <div className="text-[20px] md:text-2xl font-bold flex items-center">
                  <p>{project.title}</p>
                </div>
                <p>{project.description}</p>
                <div className="flex flex-wrap items-center gap-2 text-sm">
                  <span className="font-semibold">Built with:</span>
                  <span className="text-v">{project.stack}</span>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default Multimedia;
