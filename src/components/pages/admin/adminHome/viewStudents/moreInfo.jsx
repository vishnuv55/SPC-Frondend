import React, { useState } from 'react';

import ModalContent from './modalContent';
import Modal from '../../../../utils/modal';

const MoreInfo = ({ studentDetails }) => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
      <button className="more-button" type="button" onClick={handleOpen}>
        More info
      </button>
      <Modal open={open} handleClose={handleClose}>
        <ModalContent handleClose={handleClose} studentDetails={studentDetails} />
      </Modal>
    </>
  );
};

export default MoreInfo;
