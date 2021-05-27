import React from 'react';
import './modal.scss';
import { IoCloseSharp } from 'react-icons/io5';
import GetStudentDetails from './getStudentDetails';

const ModalContent = ({ handleClose, id }) => {
  return (
    <div className="get-student-details-modal-container">
      <div className="modal-container">
        <div className="modal-content">
          <div className="header">
            <h5 className="heading-5">Download Student Details</h5>
            <button type="button" className="close-button" onClick={handleClose}>
              <IoCloseSharp className="icon" />
            </button>
          </div>
          <div className="horizontal-line"> </div>
          <GetStudentDetails handleClose={handleClose} id={id} />
        </div>
      </div>
    </div>
  );
};

export default ModalContent;
