import React, { useState } from 'react';

type Submenu = 'menu1' | 'menu2' | 'menu3';

function NavMenu() {
  const [activeSubmenu, setActiveSubmenu] = useState<Submenu | null>(null);

  const openSubmenu = (submenu: Submenu) => {
    setActiveSubmenu(submenu);
  };

  const closeSubmenu = () => {
    setActiveSubmenu(null);
  };

  return (
    <div>
      {activeSubmenu ? (
        <div>
          {/* Submenu content */}
          {activeSubmenu === 'menu1' && (
            <div>
              <h2>Menu 1 Submenu</h2>
              <button onClick={closeSubmenu}>Back to Main Menu</button>
              {/* Submenu 1 content */}
            </div>
          )}
          {activeSubmenu === 'menu2' && (
            <div>
              <h2>Menu 2 Submenu</h2>
              <button onClick={closeSubmenu}>Back to Main Menu</button>
              {/* Submenu 2 content */}
            </div>
          )}
          {activeSubmenu === 'menu3' && (
            <div>
              <h2>Menu 3 Submenu</h2>
              <button onClick={closeSubmenu}>Back to Main Menu</button>
              {/* Submenu 3 content */}
            </div>
          )}
        </div>
      ) : (
        <ul>
          <li>
            <button onClick={() => openSubmenu('menu1')}>Menu 1</button>
          </li>
          <li>
            <button onClick={() => openSubmenu('menu2')}>Menu 2</button>
          </li>
          <li>
            <button onClick={() => openSubmenu('menu3')}>Menu 3</button>
          </li>
        </ul>
      )}
    </div>
  );
}

export default NavMenu;