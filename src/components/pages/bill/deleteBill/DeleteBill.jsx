import React from 'react';
import { useSetRhinoState } from 'react-rhino';

import './deleteBill.scss';
import { deleteBill } from '../../../../Services/user';
import useApiError from '../../../../hooks/useApiError';

const DeleteBill = ({ handleClose, userType, billId, fetchBills }) => {
  const { handleApiError } = useApiError();
  const setToastMessage = useSetRhinoState('toastMessage');
  const handleDeleteBill = async () => {
    try {
      await deleteBill(userType, billId);
      setToastMessage({
        severity: 'success',
        message: 'Bill deleted successfully',
      });
      fetchBills();
      handleClose();
    } catch (err) {
      handleApiError(err);
    }
  };
  return (
    <div className="delete-form">
      <p className="paragraph">This Bill will be permanently deleted. </p>
      <div className="button-wrapper">
        <button type="button" className="button cancel-button" onClick={handleClose}>
          Cancel
        </button>
        <button type="button" className="button delete-button" onClick={handleDeleteBill}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default DeleteBill;
