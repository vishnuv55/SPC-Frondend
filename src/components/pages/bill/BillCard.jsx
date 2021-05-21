import { Button } from '@material-ui/core';
import React from 'react';
import './billCard.scss';
import { isoStringToDate } from '../../../helpers/date';

const BillCard = ({ bill }) => {
  const billDate = isoStringToDate(bill.bill_date);
  return (
    <div className="bill-card-wrapper">
      <div className="bill-header">
        <div className="bill-title">
          <h2 className="heading">{bill.bill_title}</h2>
          <h3 className="amount"> {bill.bill_amount}</h3>
        </div>
        <div className="bill-date">
          <p className="day">{billDate.day}</p>
          <p className="month">{billDate.month}</p>
          <p className="year">{billDate.year}</p>
        </div>
      </div>
      <div className="description">{bill.bill_description}</div>
      <Button> Delete </Button>
    </div>
  );
};

export default BillCard;
