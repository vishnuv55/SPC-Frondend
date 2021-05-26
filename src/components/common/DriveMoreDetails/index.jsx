/* eslint-disable react/button-has-type */
import React, { useState } from 'react';

import './style.scss';
import Modal from '../../utils/modal';
import ModalContent from './modalContent';

const MoreDetails = ({ drive }) => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <button className="button more-button" onClick={handleOpen}>
        More Info
      </button>
      <Modal open={open} handleClose={handleClose}>
        <ModalContent drive={drive} handleClose={handleClose} />
      </Modal>
    </>
  );
};

export default MoreDetails;
