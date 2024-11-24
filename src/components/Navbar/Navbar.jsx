import React, { useState } from "react";
import Hamburger from "hamburger-react";
import { assets } from "../../assets/assets";

const Navbar = () => {
  const [isActive, setIsActive] = useState(false);
  console.log(isActive);
  return (
    <div className="navbar flex items-center justify-between ">
      <img src={assets.logo} alt="" className="logo" />

      <ul className="navbar-menu flex flex-wrap justify-between max-sm:hidden">
        <li>About us</li>
        <li>Services</li>
        <li>Team</li>
        <li>Clients</li>
        <li>Contact Us</li>
      </ul>

      {/* navbar (hamburger) */}

      <div className="sm:hidden">
        <Hamburger
          toggled={isActive}
          toggle={setIsActive}
          color="#0891b2"
          duration={0.5}
          size={26}
          className="z-[999]"
        />
      </div>

      {/* this is for responsive nave bar */}

      <div
        className={
          "re_nav absolute max-sm:w-[60vw] flex justify-center rounded-md bg-white drop-shadow-2xl " +
          (isActive ? "block" : "hidden")
        }
      >
        <ul className="flex flex-col gap-3 text-md items-center max-sm:py-6">
          <li className="hover:text-cyan-600 duration-75">About Us</li>
          <li className="hover:text-cyan-600 duration-75">Services</li>
          <li className="hover:text-cyan-600 duration-75">Team</li>
          <li className="hover:text-cyan-600 duration-75">Clients</li>
          <li className="hover:text-cyan-600 duration-75">Contact Us</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
