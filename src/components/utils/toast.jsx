import React, { useEffect, useState } from 'react';

import { Alert, AlertTitle } from '@material-ui/lab';

import Snackbar from '@material-ui/core/Snackbar';
import { useRhinoValue } from '../../config/context';

const Toast = () => {
  const [open, setOpen] = useState(false);

  const toastMessage = useRhinoValue('toastMessage');

  useEffect(() => {
    if (toastMessage.message !== '') {
      setOpen(true);
    }
  }, [toastMessage]);

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
      <Alert elevation={6} variant="filled" severity={toastMessage.severity} onClose={handleClose}>
        <AlertTitle>{toastMessage.severity}</AlertTitle>
        {toastMessage.message}
      </Alert>
    </Snackbar>
  );
};

export default Toast;
