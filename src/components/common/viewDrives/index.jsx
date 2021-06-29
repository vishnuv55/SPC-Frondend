/* eslint-disable react/jsx-key */
import React, { useEffect, useState } from 'react';

import './style.scss';
import useApiError from '../../../hooks/useApiError';
import { getDriveDetails } from '../../../Services/user';
import Loading from '../loading';
import Drive from './drive';
import NoDrives from '../noDrives/noDrive';
import { getStudentDetails } from '../../../Services/student';

const ViewDrives = ({ userType }) => {
  const [loading, setLoading] = useState(true);

  const [drives, setDrives] = useState([]);

  const [registeredDrives, setRegisteredDrives] = useState([]);

  const { handleApiError } = useApiError();

  useEffect(() => {
    getDrives();
    getStudent();
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
  const getStudent = async () => {
    if (!loading) {
      setLoading(true);
    }
    try {
      if (userType === 'student') {
        const student = await getStudentDetails();
        setRegisteredDrives(student.data.registered_drives);
      }
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
      {React.Children.toArray(
        drives.map((drive) => <Drive drive={drive} registeredDrives={registeredDrives} />)
      )}
    </div>
  );
};

export default ViewDrives;
