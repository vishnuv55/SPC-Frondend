/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-underscore-dangle */
import React, { useEffect, useState } from 'react';

import Query from './query';
import Loading from '../../common/loading';
import NoContent from '../../common/NoContent';
import { getQueries } from '../../../Services/user';
import useApiError from '../../../hooks/useApiError';

const ShowQueries = ({ userType }) => {
  const { handleApiError } = useApiError();

  const [queries, setQueries] = useState([]);

  const [loading, setLoading] = useState(true);

  const getForumQueries = async () => {
    setLoading(true);
    try {
      const response = await getQueries(userType);
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
