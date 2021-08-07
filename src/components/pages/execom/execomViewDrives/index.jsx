import React, { useEffect } from 'react';

import './style.scss';
import ViewDrives from '../../../common/viewDrives';
import { useSetRhinoState } from '../../../../config/context';

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
