/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';

import './style.scss';
import Menu from './menu';
import { useRhinoValue } from '../../../config/context';

const Header = ({ darkMode, toggleDarkMode }) => {
  const title = useRhinoValue('pageTitle');

  return (
    <header className="header-container">
      <div className="wrapper">
        <h6 className="heading-6">{title}</h6>
        <div className="right-container">
          <div className="dark-mode">
            <input
              type="checkbox"
              name="checkbox"
              id="checkbox"
              checked={darkMode}
              onChange={toggleDarkMode}
            />
            {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
            <label htmlFor="checkbox" className="switch" />
          </div>
          <Menu darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        </div>
      </div>
    </header>
  );
};

export default Header;
