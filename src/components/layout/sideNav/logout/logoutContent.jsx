/* eslint-disable react/button-has-type */
import React from 'react';

import { useSetRhinoState } from '../../../../config/context';
import useApiError from '../../../../hooks/useApiError';
import { logout } from '../../../../Services/user';

const LogoutContent = ({ user, handleClose }) => {
  const setUser = useSetRhinoState('user');

  const { handleApiError } = useApiError();

  const handleLogout = async () => {
    try {
      await logout(user);
      handleClose();
      setUser({
        is_user_logged_in: false,
      });
    } catch (error) {
      handleApiError(error);
    }
  };

  return (
    <div className="logout-alert">
      <p className="paragraph content">Are you sure you want to Logout.</p>
      <div className="button-container">
        <button onClick={handleClose} className="button cancel-button">
          Cancel
        </button>
        <button onClick={handleLogout} className="button logout-button">
          Logout
        </button>
      </div>
    </div>
  );
};

export default LogoutContent;
