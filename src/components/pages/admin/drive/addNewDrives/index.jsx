/* eslint-disable react/button-has-type */
import React, { useState } from 'react';

import './style.scss';
import { FiPlus } from 'react-icons/fi';
import Modal from '../../../../utils/modal';
import ModalContent from './modalContent';

const AddNewDrive = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className="new-drive">
      <button className="new-drive-button" onClick={handleOpen}>
        <FiPlus className="icon" />
      </button>
      <Modal open={open} handleClose={handleClose}>
        <ModalContent handleClose={handleClose} />
      </Modal>
    </div>
  );
};

export default AddNewDrive;
