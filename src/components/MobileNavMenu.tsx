"use client";

import React, { useState } from "react";
import HamburgerMenu from "./ui/HamburgerMenu";
import MobileNavMenu from "./MobileMenu";
import NavMenu from "./Navmenu2";

const HamBurgerIcon = () => {
  const [menu, setMenu] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  const hamBurgerClick = () => {
    setMenu(!menu);
  };
  const toggleDropdown = () => {
    setDropdown(!dropdown);
  };
  return (
    <div
      className={` ${
        menu ? `h-screen` : `h-16`
      } bg-zinc-950  text-white fixed md:hidden  bottom-0  w-[100vw]  z-[1000] items-center flex justify-between  px-5 `}
    >
      <div className="absolute bottom-0 mb-6 left-5" onClick={hamBurgerClick}>
        <HamburgerMenu />
      </div>
      <div className="absolute bottom-0 mb-4 right-5">
        <a href="/"><img
          src="/uni-logo-white.svg"
          style={{ height: "24px", width: "24px`" }}
          alt="uni"
        /></a>
        
      </div>
      {menu && (
        <div className="absolute inset-x-0 top-16  bg-gray-900 p-4">
          <ul className="flex flex-col space-y-2">
            <li>
              <a href="/services">Services</a>
            </li>
            <li>
              <a href="/services/market-research-analysis">Market Research and Analysis</a>
            </li>
            <li>
              <a href="#">NavItem 3</a>
            </li>
            <li className="relative">
              <button className="flex items-center" onClick={toggleDropdown}>
                Dropdown
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className={`h-4 w-4 ml-1 transform ${dropdown ? 'rotate-180' : ''}`}
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 14l6-6H4l6 6z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
              <MobileNavMenu/>
              <NavMenu/>
              {dropdown && <ul className="absolute left-0 top-full bg-gray-800 p-2">
                <li>
                  <a href="#">Dropdown Item 1</a>
                </li>
                <li>
                  <a href="#">Dropdown Item 2</a>
                </li>
                <li>
                  <a href="#">Dropdown Item 3</a>
                </li>
              </ul>}
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default HamBurgerIcon;
