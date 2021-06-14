/* eslint-disable no-underscore-dangle */
import React from 'react';

import { isoStringToDate } from '../../../helpers/date';
import AddNewAnswer from './addNewAnswer';

const Query = ({ query, getForumQueries, userType }) => {
  const date = isoStringToDate(query.created_date);

  return (
    <div className="query">
      <div className="header">
        <div className="name">{query.question?.student_name || null}</div>
        <div className="created-date">{`${date.day} ${date.month} ${date.year}`}</div>
      </div>
      <h5 className="heading-5 question">{query.question?.question || null}</h5>
      {query.answer ? <div className="answer">{query.answer.answer}</div> : null}
      <div className="horizontal-line"> </div>
      <div className="footer">
        <AddNewAnswer getForumQueries={getForumQueries} userType={userType} id={query._id} />
        {query.answer ? (
          <div className="designation">answered by {query.answer.designation}</div>
        ) : null}
      </div>
    </div>
  );
};

export default Query;
