import React, { useState, useEffect } from "react";
import { Sling as Hamburger } from "hamburger-react";
import { NavLink, Link } from "react-router-dom";
import Logo from "../images/logo.png";

const Header = () => {
  const [isOpen, setOpen] = useState(false);
  const handleClick = () => setOpen(!isOpen);

  const [isActive, setActive] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Scroll and resize listeners
  useEffect(() => {
    const handleScroll = () => {
      setActive(window.scrollY > 60);
    };

    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Set initial state
    handleResize();

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <header>
      <div
        className={`${
          isActive ? "shadow-md" : ""
        } fixed px-4 w-full h-[70px] flex justify-between items-center z-50 text-white transition-all duration-300`}
        style={{ backgroundColor: "black" }}
      >
        {/* Logo */}
        <Link to="/">
          <img className="h-8 md:max-h-9" src={Logo} alt="Logo image" />
        </Link>

        <ul
          className="gap-10"
          style={{
            display: isMobile ? "none" : "flex",
          }}
        >
          <NavLink to="/" className="hover:text-purple-300">
            <li>Home</li>
          </NavLink>
          <NavLink to="/about" className="hover:text-purple-300">
            <li>About</li>
          </NavLink>
          <NavLink to="/portfolio" className="hover:text-purple-300">
            <li>Projects</li>
          </NavLink>
          <NavLink to="/dsa" className="hover:text-purple-300">
            <li>DSA</li>
          </NavLink>
          <NavLink to="/contacts" className="hover:text-purple-300">
            <li>Contacts</li>
          </NavLink>
        </ul>

        {/* Hamburger Icon - Custom CSS for mobile only */}
        <div
          className="z-50 text-white cursor-pointer"
          onClick={handleClick}
          style={{
            display: isMobile ? "block" : "none",
          }}
        >
          <Hamburger
            toggle={setOpen}
            toggled={isOpen}
            direction="left"
            size={25}
            color="white"
            duration={0.3}
            rounded
          />
        </div>

        {/* Blurred Background */}
        {isOpen && (
          <div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-30"
            onClick={handleClick}
          ></div>
        )}

        {/* Mobile Side Menu - Custom CSS for mobile only */}
        <div
          className={`fixed top-0 right-0 h-screen w-[70%] bg-purple-500 z-40 transform transition-transform duration-300 ${
            isOpen ? "translate-x-0" : "translate-x-full"
          }`}
          style={{
            display: isMobile ? "block" : "none",
          }}
        >
          <ul className="flex flex-col text-2xl font-semibold text-black gap-8 pt-[80px] px-6">
            <Link to="/" onClick={handleClick}>
              <li>Home</li>
            </Link>
            <Link to="/about" onClick={handleClick}>
              <li>About</li>
            </Link>
            <NavLink to="/portfolio" className="hover:text-purple-300">
              <li>Projects</li>
            </NavLink>
            <NavLink to="/dsa" className="hover:text-purple-300">
              <li>DSA</li>
            </NavLink>
            <Link to="/contacts" onClick={handleClick}>
              <li>Contacts</li>
            </Link>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
