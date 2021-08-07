import React, { useEffect, useState } from 'react';

import { isoStringToDate } from '../../../../../helpers/date';

const DriveDate = ({ date }) => {
  const [stringDate, setStringDate] = useState('');

  useEffect(() => {
    const convertedDate = isoStringToDate(date);
    setStringDate(convertedDate);
  }, [date]);

  return (
    <div className="date">
      <span className="day">{stringDate.day}</span>
      <span className="month">{stringDate.month}</span>
      <span className="year">{stringDate.year}</span>
    </div>
  );
};

export default DriveDate;
