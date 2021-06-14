import React from 'react';
import { isoStringToDate } from '../../../../helpers/date';

const Query = ({ query }) => {
  const date = isoStringToDate(query.created_date);

  return (
    <div className="query">
      <div className="header">
        <div className="name">{query.question?.student_name || null}</div>
        <div className="created-date">{`${date.day} ${date.month} ${date.year}`}</div>
      </div>
      <h5 className="heading-5 question">{query.question?.question || null}</h5>
      {query.answer ? (
        <>
          <div className="answer">{query.answer.answer}</div>
          <div className="horizontal-line"> </div>
          <div className="footer">
            <div className="designation">answered by {query.answer.designation}</div>
          </div>
        </>
      ) : null}
    </div>
  );
};

export default Query;
