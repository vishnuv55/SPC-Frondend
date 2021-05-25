import React from 'react';
import { IoCloseSharp } from 'react-icons/io5';
import BillForm from './BillForm';

const ModalContent = ({ handleClose, userType }) => {
  return (
    <div className="modal-container">
      <div className="modal-content">
        <div className="header">
          <h4 className="heading-5">Add a new Bill</h4>
          <button type="button" className="close-button" onClick={handleClose}>
            <IoCloseSharp className="icon" />
          </button>
        </div>
        <div className="horizontal-line"> </div>
        <BillForm handleClose={handleClose} userType={userType} />
      </div>
    </div>
  );
};

export default ModalContent;
