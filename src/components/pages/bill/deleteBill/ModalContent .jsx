import React from 'react';

import './modal.scss';
import DeleteBill from './DeleteBill';

const ModalContent = ({ handleClose, userType, billId, fetchBills }) => {
  return (
    <div className="delete-bill-modal-container">
      <div className="modal-content">
        <DeleteBill
          handleClose={handleClose}
          userType={userType}
          billId={billId}
          fetchBills={fetchBills}
        />
      </div>
    </div>
  );
};

export default ModalContent;
