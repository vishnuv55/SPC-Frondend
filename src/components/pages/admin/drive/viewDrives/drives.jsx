/* eslint-disable react/jsx-key */
import React, { useEffect, useState } from 'react';
import { useRhinoValue } from 'react-rhino';

import Drive from './drive';
import Loading from '../../../../common/loading';
import NoDrives from '../../../../common/noDrives/noDrive';
import useApiError from '../../../../../hooks/useApiError';
import { getDriveDetails } from '../../../../../Services/user';

const Drives = () => {
  const [loading, setLoading] = useState(true);

  const [drives, setDrives] = useState([]);

  const { handleApiError } = useApiError();

  const reload = useRhinoValue('reload');

  useEffect(() => {
    getDrives();
  }, [reload]); // eslint-disable-line react-hooks/exhaustive-deps

  const getDrives = async () => {
    if (!loading) {
      setLoading(true);
    }
    try {
      const response = await getDriveDetails('admin');
      setDrives(response.data);
      setLoading(false);
    } catch (err) {
      handleApiError(err);
      setLoading(false);
    }
  };

  if (loading) {
    return <Loading />;
  }

  if (drives.length === 0) {
    return (
      <div className="no-drive-container">
        <NoDrives />
      </div>
    );
  }

  return (
    <div className="drives">
      {React.Children.toArray(drives.map((drive) => <Drive drive={drive} />))}
    </div>
  );
};

export default Drives;
