import React from 'react';
import { useRhinoValue } from 'react-rhino';

import './style.scss';
import Logout from './logout';
import NavList from './navList';
import getNavListData from './navListData';

const SideNav = () => {
  const user = useRhinoValue('user');

  const navListData = getNavListData(user.user_type);

  return (
    <div className="side-nav">
      <NavList listData={navListData} />
      <Logout user={user.user_type} />
    </div>
  );
};

export default SideNav;
