/* eslint-disable no-underscore-dangle */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';

import { getQueries } from '../../../../Services/user';

import ShowQueries from './showQueries';
import Loading from '../../../common/loading';
import AddNewQuestion from './addNewQuestion';
import useApiError from '../../../../hooks/useApiError';
import { getStudentDetails } from '../../../../Services/student';

const Forum = () => {
  const { handleApiError } = useApiError();

  const [queries, setQueries] = useState([]);

  const [studentId, setStudentId] = useState('');

  const [loading, setLoading] = useState(true);

  const getForumQueries = async () => {
    setLoading(true);
    try {
      const response = await getQueries('student');

      if (studentId === '') {
        const studentDetails = await getStudentDetails();
        setStudentId(studentDetails.data._id);
      }

      setQueries(response.data);
      setLoading(false);
    } catch (err) {
      handleApiError(err);
      setLoading(false);
    }
  };

  useEffect(() => {
    getForumQueries();
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <>
      <ShowQueries studentId={studentId} queries={queries} getForumQueries={getForumQueries} />
      <AddNewQuestion getForumQueries={getForumQueries} />
    </>
  );
};

export default Forum;
