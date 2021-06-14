/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';

import { getQueries } from '../../../../Services/user';

import ShowQueries from './showQueries';
import AddNewQuestion from './addNewQuestion';
import useApiError from '../../../../hooks/useApiError';

const Forum = () => {
  const { handleApiError } = useApiError();

  const [queries, setQueries] = useState([]);

  const getForumQueries = async () => {
    try {
      const response = await getQueries('student');
      setQueries(response.data);
    } catch (err) {
      handleApiError(err);
    }
  };

  useEffect(() => {
    getForumQueries();
  }, []);

  return (
    <>
      <ShowQueries queries={queries} />
      <AddNewQuestion getForumQueries={getForumQueries} />
    </>
  );
};

export default Forum;