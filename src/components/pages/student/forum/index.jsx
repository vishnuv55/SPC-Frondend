import React, { useEffect } from 'react';

import './style.scss';
import Forum from './forum';
import { useSetRhinoState } from '../../../../config/context';

const StudentForum = () => {
  const setPageTitle = useSetRhinoState('pageTitle');

  useEffect(() => {
    setPageTitle('Forum');
  }, [setPageTitle]);

  return <Forum />;
};

export default StudentForum;
