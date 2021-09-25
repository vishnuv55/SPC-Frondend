import React, { useEffect } from 'react';
import { useSetRhinoState } from 'react-rhino';

import './style.scss';
import ShowQueries from './showQueries';

const Forum = ({ userType }) => {
  const setPageTitle = useSetRhinoState('pageTitle');

  useEffect(() => {
    setPageTitle('Forum');
  }, [setPageTitle]);

  return <ShowQueries userType={userType} />;
};

export default Forum;
