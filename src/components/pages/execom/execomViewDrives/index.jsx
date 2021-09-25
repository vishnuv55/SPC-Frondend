import React, { useEffect } from 'react';
import { useSetRhinoState } from 'react-rhino';

import './style.scss';
import ViewDrives from '../../../common/viewDrives';

const ExecomViewDrives = () => {
  const setPageTitle = useSetRhinoState('pageTitle');

  useEffect(() => {
    setPageTitle('Upcoming Drive Details');
  }, [setPageTitle]);

  return (
    <div className="execom-drives">
      <ViewDrives userType="execom" />
    </div>
  );
};
export default ExecomViewDrives;
