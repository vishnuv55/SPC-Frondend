/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-underscore-dangle */
import React, { useEffect, useState } from 'react';

import Query from './query';
import { getQueries } from '../../../Services/user';
import useApiError from '../../../hooks/useApiError';
import NoContent from '../../common/NoContent';

const ShowQueries = ({ userType }) => {
  const { handleApiError } = useApiError();

  const [queries, setQueries] = useState([]);

  const getForumQueries = async () => {
    try {
      const response = await getQueries(userType);
      setQueries(response.data);
    } catch (err) {
      handleApiError(err);
    }
  };

  useEffect(() => {
    getForumQueries();
  }, []);

  if (queries.length === 0) {
    return <NoContent />;
  }

  return (
    <div className="queries">
      {queries.map((query) => (
        <Query
          key={query._id}
          query={query}
          getForumQueries={getForumQueries}
          userType={userType}
        />
      ))}
    </div>
  );
};

export default ShowQueries;
