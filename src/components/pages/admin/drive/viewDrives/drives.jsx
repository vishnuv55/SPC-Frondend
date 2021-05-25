/* eslint-disable react/jsx-key */
import React, { useEffect, useState } from 'react';
import useApiError from '../../../../../hooks/useApiError';

import { getDriveDetails } from '../../../../../Services/user';
import Loading from '../../../../common/loading';
import Drive from './drive';

const Drives = () => {
  const [loading, setLoading] = useState(true);

  const [drives, setDrives] = useState(null);

  const { handleApiError } = useApiError();

  useEffect(() => {
    getDrives();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

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

  return (
    <div className="drives">
      {React.Children.toArray(drives.map((drive) => <Drive drive={drive} />))}
    </div>
  );
};

export default Drives;
