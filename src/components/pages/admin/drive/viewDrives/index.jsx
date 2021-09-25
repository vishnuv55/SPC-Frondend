import React, { useEffect } from 'react';
import { useSetRhinoState } from 'react-rhino';

import './style.scss';
import Drives from './drives';

const ViewDrives = () => {
  const setPageTitle = useSetRhinoState('pageTitle');

  useEffect(() => {
    setPageTitle('Manage Drive Details');
  }, [setPageTitle]);

  return <Drives />;
};

export default ViewDrives;
