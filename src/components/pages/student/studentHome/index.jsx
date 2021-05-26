import React, { useEffect } from 'react';

import './style.scss';
import { useSetRhinoState } from '../../../../config/context';
import ViewDrives from '../../../common/viewDrives';

const StudentHome = () => {
  const setPageTitle = useSetRhinoState('pageTitle');

  useEffect(() => {
    setPageTitle('Upcoming Drives');
  }, [setPageTitle]);

  return (
    <div className="student-home">
      <ViewDrives userType="student" />
    </div>
  );
};

export default StudentHome;
