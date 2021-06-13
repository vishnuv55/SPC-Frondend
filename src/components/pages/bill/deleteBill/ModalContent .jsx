import React from 'react';

import DeleteBill from './DeleteBill';
import './modal.scss';

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
