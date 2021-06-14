/* eslint-disable no-underscore-dangle */
import React from 'react';

import Query from './query';
import NoContent from '../../../common/NoContent';

const ShowQueries = ({ queries }) => {
  if (queries.length === 0) {
    return <NoContent />;
  }

  return (
    <div className="student-queries">
      {queries.map((query) => (
        <Query key={query._id} query={query} />
      ))}
    </div>
  );
};

export default ShowQueries;
