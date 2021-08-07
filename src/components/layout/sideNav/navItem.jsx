import React from 'react';

import { NavLink } from 'react-router-dom';

const NavItem = ({ data }) => {
  return (
    <NavLink to={data.url} className="nav-item" activeClassName="active-nav-item">
      <div className="icon-container">{data.icon}</div>
      <div className="item-name">{data.name}</div>
    </NavLink>
  );
};

export default NavItem;
