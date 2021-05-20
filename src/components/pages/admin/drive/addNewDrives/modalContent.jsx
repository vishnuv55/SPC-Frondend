/* eslint-disable react/button-has-type */
import React from 'react';

import { IoCloseSharp } from 'react-icons/all';
import DriveForm from './driveForm';

const ModalContent = ({ handleClose }) => {
  return (
    <div className="modal-container">
      <div className="modal-content">
        <div className="header">
          <h4 className="heading-5">Add a new Drive</h4>
          <button className="close-button" onClick={handleClose}>
            <IoCloseSharp className="icon" />
          </button>
        </div>
        <div className="horizontal-line"> </div>
        <DriveForm handleClose={handleClose} />
      </div>
    </div>
  );
};

export default ModalContent;
