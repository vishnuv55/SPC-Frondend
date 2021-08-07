import React from 'react';

import NavItem from './navItem';

const NavList = ({ listData }) => {
  return (
    <div className="nav-list">
      {listData.map((listItem) => (
        <NavItem data={listItem} key={listItem.id} />
      ))}
    </div>
  );
};

export default NavList;
