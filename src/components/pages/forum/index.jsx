import React, { useEffect } from 'react';

import './style.scss';
import ShowQueries from './showQueries';
import { useSetRhinoState } from '../../../config/context';

const Forum = ({ userType }) => {
  const setPageTitle = useSetRhinoState('pageTitle');

  useEffect(() => {
    setPageTitle('Forum');
  }, [setPageTitle]);

  return <ShowQueries userType={userType} />;
};

export default Forum;
