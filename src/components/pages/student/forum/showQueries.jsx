/* eslint-disable no-underscore-dangle */
import React from 'react';

import Query from './query';
import NoContent from '../../../common/NoContent';

const ShowQueries = ({ studentId, queries, getForumQueries }) => {
  if (queries.length === 0) {
    return <NoContent />;
  }

  return (
    <div className="student-queries">
      {queries.map((query) => (
        <Query
          studentId={studentId}
          key={query._id}
          query={query}
          getForumQueries={getForumQueries}
        />
      ))}
    </div>
  );
};

export default ShowQueries;
