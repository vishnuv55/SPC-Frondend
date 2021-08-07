import React, { useEffect } from 'react';

import './style.scss';
import Drives from './drives';
import { useSetRhinoState } from '../../../../../config/context';

const ViewDrives = () => {
  const setPageTitle = useSetRhinoState('pageTitle');

  useEffect(() => {
    setPageTitle('Manage Drive Details');
  }, [setPageTitle]);

  return <Drives />;
};

export default ViewDrives;
