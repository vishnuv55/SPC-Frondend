/* eslint-disable react/button-has-type */
import React, { useState } from 'react';

import './style.scss';
import { FiLogOut } from 'react-icons/fi';
import Modal from '../../../utils/modal';
import LogoutContent from './logoutContent';

const Logout = ({ user }) => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className="logout">
      <button type="button" className="logout-button" onClick={handleClickOpen}>
        <FiLogOut className="icon" />
      </button>
      <Modal open={open} handleClose={handleClose}>
        <LogoutContent user={user} handleClose={handleClose} />
      </Modal>
    </div>
  );
};

export default Logout;
