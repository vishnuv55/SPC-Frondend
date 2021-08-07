/* eslint-disable react/button-has-type */
import React from 'react';

import './style.scss';
import useApiError from '../../../../../../hooks/useApiError';
import { deleteDrive } from '../../../../../../Services/admin';
import { useSetRhinoState } from '../../../../../../config/context';

const DeleteContent = ({ id, handleClose }) => {
  const setToastMessage = useSetRhinoState('toastMessage');

  const { handleApiError } = useApiError();

  const setReload = useSetRhinoState('reload');

  const handleDelete = async () => {
    try {
      await deleteDrive(id);
      setToastMessage({
        severity: 'success',
        message: 'The drive has been successfully deleted',
      });
      setReload((prevReload) => !prevReload);
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
