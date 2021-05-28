import React from 'react';
import { useSetRhinoState } from '../../../../config/context';
import useApiError from '../../../../hooks/useApiError';
import { registerForDrive } from '../../../../Services/student';

const ModalContent = ({ id, handleClose }) => {
  const { handleApiError } = useApiError();

  const setToastMessage = useSetRhinoState('toastMessage');

  const handleRegister = async () => {
    const data = {
      id,
    };

    try {
      await registerForDrive(data);
      setToastMessage({
        severity: 'success',
        message: 'You have been successfully registered for the drive',
      });
    } catch (err) {
      handleApiError(err);
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
        <button type="button" onClick={handleRegister} className="button register-button">
          Register
        </button>
      </div>
    </div>
  );
};

export default ModalContent;
