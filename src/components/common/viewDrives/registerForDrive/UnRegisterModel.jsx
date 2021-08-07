import React, { useState } from 'react';

import Button from '../../button';
import useApiError from '../../../../hooks/useApiError';
import { useSetRhinoState } from '../../../../config/context';
import { deRegisterDrive } from '../../../../Services/student';

const UnRegisterModel = ({ id, handleClose, setIsRegistered }) => {
  const { handleApiError } = useApiError();

  const setToastMessage = useSetRhinoState('toastMessage');

  const [buttonLoading, setButtonLoading] = useState(false);

  const handleDeRegister = async () => {
    const data = {
      id,
    };

    try {
      setButtonLoading(true);
      await deRegisterDrive(data);
      setToastMessage({
        severity: 'success',
        message: 'You have been removed registration',
      });
      setIsRegistered(false);
      setButtonLoading(false);
    } catch (err) {
      handleApiError(err);
      setButtonLoading(false);
    }
    handleClose();
  };

  return (
    <div className="register-modal">
      <p className="paragraph content">Are you sure you want to Un register.</p>
      <div className="button-container">
        <button type="button" onClick={handleClose} className="button cancel-button">
          Cancel
        </button>
        <Button
          onClick={handleDeRegister}
          className="button register-button"
          loading={buttonLoading}
        >
          Un-Register
        </Button>
      </div>
    </div>
  );
};

export default UnRegisterModel;
