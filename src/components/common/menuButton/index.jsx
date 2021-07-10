import React, { useState } from 'react';

import { FiSettings } from 'react-icons/fi';

import './style.scss';
import MenuContent from './menuContent';

const Menu = ({ darkMode, toggleDarkMode }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((pervMenuOpen) => !pervMenuOpen);
  };

  return (
    <div className="menu">
      <button type="button" className="menu-button" onClick={toggleMenu}>
        <FiSettings className="icon" />
      </button>
      {menuOpen ? (
        <MenuContent darkMode={darkMode} toggleDarkMode={toggleDarkMode} toggleMenu={toggleMenu} />
      ) : null}
    </div>
  );
};

export default Menu;
