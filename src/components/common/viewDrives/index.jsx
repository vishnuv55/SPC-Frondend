/* eslint-disable react/jsx-key */
import React, { useEffect, useState } from 'react';

import './style.scss';
import useApiError from '../../../hooks/useApiError';
import { getDriveDetails } from '../../../Services/user';
import Loading from '../loading';
import Drive from './drive';
import NoDrives from '../noDrives/noDrive';

const ViewDrives = ({ userType }) => {
  const [loading, setLoading] = useState(true);

  const [drives, setDrives] = useState([]);

  const { handleApiError } = useApiError();

  useEffect(() => {
    getDrives();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const getDrives = async () => {
    if (!loading) {
      setLoading(true);
    }
    try {
      const response = await getDriveDetails(userType);
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
    return <NoDrives />;
  }

  return (
    <div className="drives">
      {React.Children.toArray(drives.map((drive) => <Drive drive={drive} />))}
    </div>
  );
};

export default ViewDrives;
