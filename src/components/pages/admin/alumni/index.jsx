import React, { useEffect } from 'react';

import './style.scss';
import CreateAlumni from './CreateAlumni';
import DownloadAlumni from './DownloadAlumni';
import { useSetRhinoState } from '../../../../config/context';

const Alumni = () => {
  const setPageTitle = useSetRhinoState('pageTitle');
  useEffect(() => {
    setPageTitle('Manage Alumni Details');
  }, [setPageTitle]);
  return (
    <div className="alumni-wrapper">
      <CreateAlumni />
      <DownloadAlumni />
    </div>
  );
};

export default Alumni;
