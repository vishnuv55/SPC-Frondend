/* eslint-disable react/button-has-type */
import React, { useState } from 'react';

import './style.scss';
import { FiLogOut } from 'react-icons/fi';
import { Button, Dialog, DialogActions, DialogContent, DialogContentText } from '@material-ui/core';
import { useSetRhinoState } from '../../../../config/context';
import useApiError from '../../../../hooks/useApiError';
import { logout } from '../../../../Services/user';

const Logout = ({ user }) => {
  const setUser = useSetRhinoState('user');
  const { handleApiError } = useApiError();

  const [open, setOpen] = useState(false);

  const handleLogout = async () => {
    try {
      await logout(user);

      setUser({
        is_user_logged_in: false,
      });
    } catch (error) {
      handleApiError(error);
    }
    setOpen(false);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className="logout">
      {/* eslint-disable-next-line react/button-has-type */}
      <button className="logout-button" onClick={handleClickOpen}>
        <FiLogOut className="icon" />
      </button>
      <Dialog
        maxWidth="xs"
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Are you sure you want to logout.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} variant="outlined" color="primary">
            cancel
          </Button>
          <Button onClick={handleLogout} autoFocus variant="contained" color="primary">
            Logout
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default Logout;
