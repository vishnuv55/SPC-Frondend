import React, { useState } from 'react';

import './style.scss';
import Modal from '../../../utils/modal';
import ModalContent from './modalContent';

const RegisterForDrive = ({ id }) => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <button type="button" onClick={handleOpen} className="button reg-button">
        Register
      </button>
      <Modal open={open} handleClose={handleClose}>
        <ModalContent handleClose={handleClose} id={id} />
      </Modal>
    </>
  );
};

export default RegisterForDrive;
