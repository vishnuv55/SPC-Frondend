import React, { useState, useEffect } from 'react';

import './style.scss';
import Modal from '../../../utils/modal';
import RegisterModel from './RegisterModel';
import UnRegisterModel from './UnRegisterModel';

const RegisterForDrive = ({ id, registeredDrives }) => {
  const [open, setOpen] = useState(false);
  const [isRegistered, setIsRegistered] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  useEffect(() => {
    const isStudentRegistered = registeredDrives.includes(id);
    setIsRegistered(isStudentRegistered);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id, registeredDrives]);

  return (
    <>
      <button type="button" onClick={handleOpen} className="button reg-button">
        {isRegistered ? 'Un-Register' : 'Register'}
      </button>
      <Modal open={open} handleClose={handleClose}>
        {isRegistered ? (
          <UnRegisterModel handleClose={handleClose} id={id} setIsRegistered={setIsRegistered} />
        ) : (
          <RegisterModel handleClose={handleClose} id={id} setIsRegistered={setIsRegistered} />
        )}
      </Modal>
    </>
  );
};

export default RegisterForDrive;
