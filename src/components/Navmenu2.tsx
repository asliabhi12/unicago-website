// NavMenu2.js
import React from "react";
import { MenuItem } from "./ui/navbar-menu";
// Define the type for menuItems prop
type MenuItem =
  | { title: string; href: string }
  | { title: string; submenu: SubmenuItem[]; href?: string };

interface Props {
  menuItems: MenuItem[];
}


interface SubmenuItem {
  title: string;
  href: string;
  src?: string; // Assuming src is optional
  description?: string; // Assuming description is optional
}


const NavMenu2 = ({ menuItems }) => {
  return (
    <ul className="flex flex-col gap-10 space-y-2 ">
      {menuItems.map((item, index) => (
        <li key={index}>
          {/* Render the main menu item */}
          <MenuItem
            title={item.title}
            href={item.href}
            submenu={item.submenu} // Pass the submenu array to the MenuItem component
          />
        </li>
      ))}
    </ul>
  );
};

export default NavMenu2;