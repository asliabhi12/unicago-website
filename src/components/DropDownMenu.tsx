import React, { useState } from "react";
import "./ham-menu.css";

type MenuItem = {
  title: string;
  href: string;
  src?: string;
  description?: string;
  submenu?: MenuItem[];
};

interface Props {
  menuTitle: string;
  menuItems: MenuItem[]; // Ensure that menuItems is of type MenuItem[]
  openMenu: string | null;
  onClick: () => void; // Add onClick prop
}

function DropDownMenu({onClick, menuTitle, menuItems, openMenu }: Props) {
  const isOpen = openMenu === menuTitle;
  const [submenus, setSubmenus] = useState<{ [key: string]: boolean }>({});

  const toggleSubmenu = (menuTitle: string) => {
    setSubmenus(prevState => ({
      ...prevState,
      [menuTitle]: !prevState[menuTitle]
    }));
    // Only call onClick if the menu is not already open
    if (!isOpen) {
      onClick();
    }
 };

  return (
    <div className="">
      <ul className="w-full">
        <li className="relative ">
          <button
            className="flex items-center  "
            onClick={() => toggleSubmenu(menuTitle)}
          >
            {menuTitle}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={`h-4 w-4 ml-1 transform ${
                submenus[menuTitle] ? "rotate-180" : ""
              }`}
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
          { submenus[menuTitle] && (
            <ul
              className={`flex flex-col gap-2 shadow-md py-2 ${
                submenus[menuTitle] ? "submenu-open" : "submenu-closed"
              }`}
            >
              {menuItems.map((item, index) => (
                <li key={index}>
                  <a href={item.href}>{item.title}</a>
                </li>
              ))}
            </ul>
          )}
        </li>
        {/* Other menu items */}
      </ul>
    </div>
  );
}

export default DropDownMenu;
