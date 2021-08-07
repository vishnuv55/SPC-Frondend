import React, { useState } from 'react';

import { BiRupee } from 'react-icons/bi';

import './billCard.scss';
import Modal from '../../utils/modal';
import ModalContent from './deleteBill/ModalContent ';
import { isoStringToDate } from '../../../helpers/date';

const BillCard = ({ bill, userType, fetchBills }) => {
  const [open, setOpen] = useState(false);
  const billDate = isoStringToDate(bill.bill_date);
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  // eslint-disable-next-line no-underscore-dangle
  const billId = bill._id;
  return (
    <div className="bill-card-wrapper">
      <div className="bill-header">
        <div className="bill-title">
          <h2 className="heading">{bill.bill_title}</h2>
          <div className="amount-wrapper">
            <BiRupee className="icon" />
            <span className="amount"> {bill.bill_amount}</span>
          </div>
        </div>
        <div className="bill-date">
          <span className="day">{billDate.day}</span>
          <span className="month">{billDate.month}</span>
          <span className="year">{billDate.year}</span>
        </div>
      </div>
      <div className="description paragraph">{bill.bill_description}</div>
      <div className="delete-button-wrapper">
        <button type="button" className="delete-button" onClick={handleOpen}>
          Delete
        </button>
      </div>
      <Modal open={open} handleClose={handleClose}>
        <ModalContent
          handleClose={handleClose}
          userType={userType}
          billId={billId}
          fetchBills={fetchBills}
        />
      </Modal>
    </div>
  );
};

export default BillCard;
