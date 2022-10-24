import React, { useEffect } from 'react';
import { useSetRhinoState } from 'react-rhino';

import './style.scss';
import Forum from './forum';

const StudentForum = () => {
  const setPageTitle = useSetRhinoState('pageTitle');

  useEffect(() => {
    setPageTitle('Forum');
  }, [setPageTitle]);

  return <Forum />;
};

export default StudentForum;
