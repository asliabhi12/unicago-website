import React, { useState } from 'react';

interface SubmenusState {
    menu1: boolean;
    menu2: boolean;
    menu3: boolean;
  }
function MobileNavMenu() {
  const [submenus, setSubmenus] = useState({
    menu1: false,
    menu2: false,
    menu3: false,
  });

  const toggleSubmenu = (menu: keyof SubmenusState) => {
    setSubmenus({
      ...submenus,
      [menu]: !submenus[menu],
    });
  };

  return (
    <div>
      <ul>
        <li>
          <button className="flex items-center" onClick={() => toggleSubmenu('menu1')}>
            Menu 1
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={`h-4 w-4 ml-1 transform ${submenus.menu1 ? 'rotate-180' : ''}`}
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
          {submenus.menu1 && (
            <ul className="py-2">
              <li className="px-4 py-2 hover:bg-gray-100">Submenu 1 - Option 1</li>
              <li className="px-4 py-2 hover:bg-gray-100">Submenu 1 - Option 2</li>
              <li className="px-4 py-2 hover:bg-gray-100">Submenu 1 - Option 3</li>
            </ul>
          )}
        </li>
        <li>
          <button className="flex items-center" onClick={() => toggleSubmenu('menu2')}>
            Menu 2
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={`h-4 w-4 ml-1 transform ${submenus.menu2 ? 'rotate-180' : ''}`}
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
          {submenus.menu2 && (
            <ul className="py-2">
              <li className="px-4 py-2 hover:bg-gray-100">Submenu 2 - Option 1</li>
              <li className="px-4 py-2 hover:bg-gray-100">Submenu 2 - Option 2</li>
              <li className="px-4 py-2 hover:bg-gray-100">Submenu 2 - Option 3</li>
            </ul>
          )}
        </li>
        <li>
          <button className="flex items-center" onClick={() => toggleSubmenu('menu3')}>
            Menu 3
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={`h-4 w-4 ml-1 transform ${submenus.menu3 ? 'rotate-180' : ''}`}
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
          {submenus.menu3 && (
            <ul className="py-2">
              <li className="px-4 py-2 hover:bg-gray-100">Submenu 3 - Option 1</li>
              <li className="px-4 py-2 hover:bg-gray-100">Submenu 3 - Option 2</li>
              <li className="px-4 py-2 hover:bg-gray-100">Submenu 3 - Option 3</li>
            </ul>
          )}
        </li>
      </ul>
    </div>
  );
}

export default MobileNavMenu;
