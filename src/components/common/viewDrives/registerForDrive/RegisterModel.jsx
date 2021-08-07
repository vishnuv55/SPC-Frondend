import React, { useState } from 'react';

import Button from '../../button';
import useApiError from '../../../../hooks/useApiError';
import { useSetRhinoState } from '../../../../config/context';
import { registerForDrive } from '../../../../Services/student';

const RegisterModel = ({ id, handleClose, setIsRegistered }) => {
  const { handleApiError } = useApiError();

  const setToastMessage = useSetRhinoState('toastMessage');

  const [buttonLoading, setButtonLoading] = useState(false);

  const handleRegister = async () => {
    const data = {
      id,
    };

    try {
      setButtonLoading(true);
      await registerForDrive(data);
      setToastMessage({
        severity: 'success',
        message: 'You have been successfully registered for the drive',
      });
      setIsRegistered(true);
      setButtonLoading(false);
    } catch (err) {
      handleApiError(err);
      setButtonLoading(false);
    }
    handleClose();
  };

  return (
    <div className="register-modal">
      <p className="paragraph content">Are you sure you want to register.</p>
      <div className="button-container">
        <button type="button" onClick={handleClose} className="button cancel-button">
          Cancel
        </button>
        <Button onClick={handleRegister} className="button register-button" loading={buttonLoading}>
          Register
        </Button>
      </div>
    </div>
  );
};

export default RegisterModel;
