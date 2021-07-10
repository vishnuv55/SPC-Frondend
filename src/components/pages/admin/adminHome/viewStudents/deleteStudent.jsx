import React, { useState } from 'react';

import { useSetRhinoState } from '../../../../../config/context';

import Modal from '../../../../utils/modal';
import useApiError from '../../../../../hooks/useApiError';
import { deleteStudent } from '../../../../../Services/admin';

const DeleteStudent = ({ id, getStudentsDetails }) => {
  const [open, setOpen] = useState(false);

  const setToastMessage = useSetRhinoState('toastMessage');

  const { handleApiError } = useApiError();

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleDelete = async () => {
    try {
      await deleteStudent(id);
      setToastMessage({
        severity: 'success',
        message: 'This student has been successfully deleted',
      });
      getStudentsDetails();
    } catch (err) {
      handleApiError(err);
    }
    handleClose();
  };

  return (
    <>
      <button className="delete-button" type="button" onClick={handleOpen}>
        delete
      </button>
      <Modal open={open} handleClose={handleClose}>
        <div className="delete-alert">
          <p className="paragraph content">
            Are you sure you want to delete this students data. Be careful, all data about the
            student will be deleted.
          </p>
          <div className="button-container">
            <button type="button" onClick={handleClose} className="button cancel-button">
              Cancel
            </button>
            <button type="button" onClick={handleDelete} className="button delete-button">
              Delete
            </button>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default DeleteStudent;
