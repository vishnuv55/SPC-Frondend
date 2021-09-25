import React, { useState } from 'react';
import { useRhinoValue, useSetRhinoState } from 'react-rhino';

import { FiTrash } from 'react-icons/fi';

import Modal from '../../utils/modal';
import useApiError from '../../../hooks/useApiError';
import { deleteQuery } from '../../../Services/user';

const DeleteQuery = ({ id, getForumQueries }) => {
  const { handleApiError } = useApiError();
  const [open, setOpen] = useState(false);

  const user = useRhinoValue('user');

  const setToastMessage = useSetRhinoState('toastMessage');

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleDeleteForum = async () => {
    try {
      await deleteQuery(user.user_type, id);

      setToastMessage({
        severity: 'success',
        message: 'Query successfully deleted',
      });

      getForumQueries();
      handleClose();
    } catch (error) {
      handleApiError(error);
    }
  };

  return (
    <>
      <button className="delete-button" type="button" onClick={handleOpen}>
        <FiTrash className="icon" />
      </button>
      <Modal open={open} handleClose={handleClose}>
        <div className="delete-forum-alert">
          <p className="paragraph">This Forum will be permanently deleted. </p>
          <div className="button-wrapper">
            <button type="button" className="button cancel-button" onClick={handleClose}>
              Cancel
            </button>
            <button type="button" className="button delete-button" onClick={handleDeleteForum}>
              Delete
            </button>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default DeleteQuery;
