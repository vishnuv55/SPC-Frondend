import React, { useEffect, useState } from 'react';

import { Alert, AlertTitle } from '@material-ui/lab';
import Snackbar from '@material-ui/core/Snackbar';

const Toast = ({ severity, msg }) => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (msg !== '') {
      setOpen(true);
    }
  }, [msg]);

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
      <Alert elevation={6} variant="filled" severity={severity} onClose={handleClose}>
        <AlertTitle>Error</AlertTitle>
        {msg}
      </Alert>
    </Snackbar>
  );
};

export default Toast;
