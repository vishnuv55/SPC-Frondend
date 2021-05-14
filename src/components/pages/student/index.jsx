import React, { useEffect } from 'react';
import { useSetRhinoState } from '../../../config/context';

const StudentHome = () => {
  const setPageTitle = useSetRhinoState('pageTitle');

  useEffect(() => {
    setPageTitle('Upcoming Drives');
  }, [setPageTitle]);

  return (
    <>
      <h2>Student</h2>
    </>
  );
};

export default StudentHome;
