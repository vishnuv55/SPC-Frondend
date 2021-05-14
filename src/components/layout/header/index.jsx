import React from 'react';
import { useRhinoValue } from '../../../config/context';
import Menu from './menu';

import './style.scss';

const Header = () => {
  const title = useRhinoValue('pageTitle');

  return (
    <header className="header-container">
      <div className="wrapper">
        <h6 className="heading-6">{title}</h6>
        <div className="right-container">
          <div className="dark-mode">
            <input type="checkbox" name="checkbox" id="checkbox" />
            {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
            <label htmlFor="checkbox" className="switch" />
          </div>
          <Menu />
        </div>
      </div>
    </header>
  );
};

export default Header;
