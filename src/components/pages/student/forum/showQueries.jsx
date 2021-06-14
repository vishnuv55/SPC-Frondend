/* eslint-disable no-underscore-dangle */
import React from 'react';
import Query from './query';

const ShowQueries = ({ queries }) => {
  return (
    <>
      {queries.map((query) => (
        <Query key={query._id} query={query} />
      ))}
    </>
  );
};

export default ShowQueries;
