import React, { useState, useEffect } from "react";
import {Sling as Hamburger} from 'hamburger-react'
import { NavLink, Link } from "react-router-dom";
import { FaLinkedin, FaGithub, FaInstagram, FaItchIo } from "react-icons/fa";
import Logo from "../images/logo.png";


const Header = () => {
  const [isOpen, setOpen] = useState(false);
  const handleClick = () => setOpen(!isOpen);

  //navbar state
  const [isActive, setActive] = useState(false)
  //event listener
  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 60 ? setActive(true) : setActive(false)
    })
  })

  return (
    <header >
      <div className={`${isActive ? "shadow-md" : ""} fixed px-4 w-full h-[70px] justify-between flex md:px-10 items-center z-10 text-white`} style={{backgroundColor:"black"}}>
        {/*logo header*/}
        <Link to="/">
          <img className="h-8 sm:max-h-9" src={Logo} alt="Logo image" />
        </Link>
         {/*nav-links*/}
        <ul className="hidden gap-10 md:flex">
          <NavLink to="/">
            <li>Home</li>
          </NavLink>
          <NavLink to="/about">
            <li>About</li>
          </NavLink>
          <NavLink to="/portfolio">
            <li>Projects</li>
          </NavLink>
          <NavLink to="/contacts">
            <li>Contacts</li>
          </NavLink>
        </ul>
        
        {/*side-menu icon*/}
        <div className="z-20 text-white cursor-pointer md:hidden" onClick={handleClick}>
          <Hamburger toggle={setOpen} toggled={isOpen} direction="left" size={25} color={`${isOpen ? "black" : "white"}`} duration={0.3} rounded />
        </div>
        {/*blurred bg*/}
        <div
          className={
            !isOpen
              ? "hidden"
              : "fixed top-0 right-0 h-screen w-full bg-neutral-900 backdrop-blur-sm"
          }
        />
        {/*side-menu*/}
        <div className={`absolute top-0 right-0 h-screen flex flex-col gap-10 p-4 bg-purple-500 ${!isOpen ? "translate-x-full" : "translate-x-0"} ease-in-out duration-200`} >
          <ul className="flex flex-col text-3xl font-semibold text-black gap-7 pt-[60px]">
            <hr className="border-2 rounded-lg border-black" />
            <Link to="/" onClick={handleClick}>
              <li>Home</li>
            </Link>
            <Link to="/about" onClick={handleClick}>
              <li>About</li>
            </Link>
            <Link to="/portfolio" onClick={handleClick}>
              <li>Portfolio</li>
            </Link>
            <Link to="/contacts" onClick={handleClick}>
              <li>Contacts</li>
            </Link>
          </ul>
          <div className="flex gap-5 text-black">
            <a href="https://github.com/nilaysrivastava">
              <FaGithub size={25} />
            </a>
            <a href="https://www.linkedin.com/in/nilay-srivastava-29939a205/">
              <FaLinkedin size={25} />
            </a>
            <a href="https://www.instagram.com/nilaysriivastava/">
              <FaInstagram size={25} />
            </a>
            {/* <a href="https://lafayenbros.itch.io/">
              <FaItchIo size={25} />
            </a> */}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
