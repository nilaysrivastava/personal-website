import React from "react";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      {/* Left-side vertical social links (large screens only) */}
      <div className="hidden lg:flex fixed left-0 bottom-0 z-50 flex-col items-center space-y-6 px-4 py-4">
        <div className="flex flex-col items-center space-y-4 text-purple-500">
          <a
            href="https://www.linkedin.com/in/nilay-srivastava-29939a205/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin
              size={28}
              className="hover:scale-110 transition-transform"
            />
          </a>
          <a
            href="https://github.com/nilaysrivastava"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub
              size={28}
              className="hover:scale-110 transition-transform"
            />
          </a>
          <a
            href="https://www.instagram.com/nilaysriivastava/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram
              size={28}
              className="hover:scale-110 transition-transform"
            />
          </a>
          <div className="w-[2px] h-24 bg-gray-300 mt-4" />
        </div>
      </div>

      {/* Right-side rotated email (large screens only) */}
      <div className="hidden lg:flex fixed right-0 bottom-0 z-50 flex-col items-center px-4 py-4">
        <div className="flex flex-col items-center text-purple-500">
          <div className="rotate-90 origin-bottom mb-4 text-sm font-medium tracking-widest">
            nilay2103@gmail.com
          </div>
          <div className="w-[2px] h-24 bg-gray-300" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
