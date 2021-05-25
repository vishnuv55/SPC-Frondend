/* eslint-disable react/button-has-type */
import React from 'react';

import './style.scss';
import { useSetRhinoState } from '../../../../../../config/context';
import useApiError from '../../../../../../hooks/useApiError';
import { deleteDrive } from '../../../../../../Services/admin';

const DeleteContent = ({ id, handleClose }) => {
  const setToastMessage = useSetRhinoState('toastMessage');

  const { handleApiError } = useApiError();

  const handleDelete = async () => {
    try {
      await deleteDrive(id);
      setToastMessage({
        severity: 'success',
        message: 'The drive has been successfully deleted',
      });
    } catch (err) {
      handleApiError(err);
    }
    handleClose();
  };

  return (
    <div className="delete-alert">
      <p className="paragraph content">
        Are you sure you want to delete this drive. All data about this drive will be lost forever.
      </p>
      <div className="button-container">
        <button onClick={handleClose} className="button cancel-button">
          Cancel
        </button>
        <button onClick={handleDelete} className="button delete-button">
          Delete
        </button>
      </div>
    </div>
  );
};

export default DeleteContent;
