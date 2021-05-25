import React, { useEffect } from 'react';

import './style.scss';
import { useSetRhinoState } from '../../../../../config/context';
import Drives from './drives';

const ViewDrives = () => {
  const setPageTitle = useSetRhinoState('pageTitle');

  useEffect(() => {
    setPageTitle('Manage Drive Details');
  }, [setPageTitle]);

  return <Drives />;
};

export default ViewDrives;
