import React from 'react';

import './style.scss';
import Logout from './logout';
import NavList from './navList';
import getNavListData from './navListData';
import { useRhinoValue } from '../../../config/context';

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
