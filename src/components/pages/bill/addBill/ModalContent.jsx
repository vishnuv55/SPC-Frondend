import React from 'react';

import { IoCloseSharp } from 'react-icons/io5';

import './modal.scss';
import BillForm from './BillForm';

const ModalContent = ({ handleClose, userType, fetchBills }) => {
  return (
    <div className="add-bill-modal-container">
      <div className="modal-content">
        <div className="header">
          <h4 className="heading-5">Add a new Bill</h4>
          <button type="button" className="close-button" onClick={handleClose}>
            <IoCloseSharp className="icon" />
          </button>
        </div>
        <div className="horizontal-line"> </div>
        <BillForm handleClose={handleClose} userType={userType} fetchBills={fetchBills} />
      </div>
    </div>
  );
};

export default ModalContent;
