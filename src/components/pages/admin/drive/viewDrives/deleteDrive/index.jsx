/* eslint-disable react/button-has-type */
import React, { useState } from 'react';

import { FiTrash } from 'react-icons/fi';

import DeleteContent from './deleteContent';
import Modal from '../../../../../utils/modal';

const DeleteDrive = ({ id }) => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <button className="delete-button" onClick={handleOpen}>
        <FiTrash />
      </button>
      <Modal open={open} handleClose={handleClose}>
        <DeleteContent id={id} handleClose={handleClose} />
      </Modal>
    </>
  );
};

export default DeleteDrive;
