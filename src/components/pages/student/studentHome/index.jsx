/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { useSetRhinoState } from 'react-rhino';

import './style.scss';
import Loading from '../../../common/loading';
import CompleteProfile from './completeProfile';
import ViewDrives from '../../../common/viewDrives';
import useApiError from '../../../../hooks/useApiError';
import { getStudentDetails } from '../../../../Services/student';

const StudentHome = () => {
  const setPageTitle = useSetRhinoState('pageTitle');

  const [loading, setLoading] = useState(true);

  const [isProfileComplete, setIsProfileComplete] = useState(true);

  const { handleApiError } = useApiError();

  const fetchStudentDetail = async () => {
    setLoading(true);
    try {
      const student = await getStudentDetails();
      const user = student.data;
      if (!user.gender || !user.phone_number) {
        setIsProfileComplete(false);
      }
      setLoading(false);
    } catch (err) {
      handleApiError(err);
      setLoading(false);
    }
  };
  useEffect(() => {
    setPageTitle('Upcoming Drives');
    fetchStudentDetail();
  }, [setPageTitle]);

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="student-home">
      {isProfileComplete ? <ViewDrives userType="student" /> : <CompleteProfile />}
    </div>
  );
};

export default StudentHome;
