/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';

import { FiAward } from 'react-icons/fi';
import { getStudentsData } from '../../../../../Services/admin';

import './style.scss';
import StudentDetailsTable from './StudentDetailsTable';
import useApiError from '../../../../../hooks/useApiError';

const ViewStudents = () => {
  const [students, setStudents] = useState([]);

  const { handleApiError } = useApiError();

  const getStudentsDetails = async () => {
    try {
      const response = await getStudentsData();
      setStudents(response.data);
    } catch (err) {
      handleApiError(err);
    }
  };

  useEffect(() => {
    getStudentsDetails();
  }, []);

  if (students.length === 0) {
    return null;
  }

  return (
    <div className="view-student-details">
      <h5 className="heading-5">
        <FiAward className="icon" />
        Students Details
      </h5>
      <StudentDetailsTable students={students} getStudentsDetails={getStudentsDetails} />
    </div>
  );
};

export default ViewStudents;
