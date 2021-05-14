import React from 'react';

import './style.scss';
import { useRhinoValue } from '../../../config/context';
import NavList from './navList';
import Logout from './logout';
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
