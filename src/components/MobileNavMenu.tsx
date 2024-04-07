"use client";

import React, { useState } from "react";
import HamburgerMenu from "./ui/HamburgerMenu";
import DropDownMenu from "./DropDownMenu";


const MobileNav = () => {
  const [menu, setMenu] = useState(false);
  const [openMenu, setOpenMenu] = useState(null);

  const hamBurgerClick = () => {
    setMenu(!menu);
  };

  const closeMenus = () => {
    setOpenMenu(null);
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
          style={{ height: "24px", width: "24px" }}
          alt="uni"
        /></a>
        
      </div>
      {menu && (
  <div className="absolute inset-x-0 top-16   p-4">
    <ul className="flex flex-col gap-10 space-y-2 ">
    <li>
        <a href="/mission">Mission</a>
      </li>
      <li>
      <DropDownMenu
          menuTitle="Products"
          menuItems={[
        { "title": "Unicago Sense(1)", "href": "#" },
        {"title": "ProjecktMJ", "href":"#"},
        {"title": "1for1","href":"#"},    
        {"title": "Homie","href":"#"},    
      ]}
      onClick={() => setOpenMenu(openMenu === "Products" ? null : "Products")}
      openMenu={openMenu}
        />
      </li>
      <li className="">
        <DropDownMenu
          menuTitle="Services"
          menuItems={[
        { "title": "Market Research and Analysis", "href": "/services/market-research-analysis" },
        { "title": "Audience Building", "href": "/services/audience-building" },
        { "title": "90 Days MVP Development", "href": "/services/90-day-mvp" },
        { "title": "UI/UX Design & Prototyping", "href": "/services/ui-ux-design-and-prototyping" },
        { "title": "Platform Technology Migration", "href": "/services/platform-technology-migration" },
        { "title": "Product Marketing Setup", "href": "/services/product-marketing-setup" },
        { "title": "Web Development", "href": "/services/web-development" },
        { "title": "Search Engine Optimization", "href": "/services/search-engine-optimization" },
        { "title": "Branding", "href": "/services/branding" },
          ]}
          onClick={() => setOpenMenu(openMenu === "Services" ? null : "Services")}
          openMenu={openMenu}
        />
      </li>
      <li>
      <DropDownMenu
          menuTitle="Industies"
          menuItems={[
        { "title": "Fintech", "href": "#" },
        {"title": "Healthcare", "href":"#"},
        {"title": "Retail","href":"#"},    
        {"title": "Insurance","href":"#"},    
        {"title": "Oil and Gas","href":"#"},    
      ]}
      onClick={() => setOpenMenu(openMenu === "Industries" ? null : "Industries")}
      openMenu={openMenu}
      
        />
    </li>

    
    </ul>
  </div>
)}

    </div>
  );
};

export default MobileNav;


