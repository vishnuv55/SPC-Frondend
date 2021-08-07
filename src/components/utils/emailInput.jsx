import React from 'react';

import { TextField } from '@material-ui/core';

import useDebounce from '../../hooks/useDebounce';
import { validateEmail } from '../../helpers/validation';

const EmailInput = ({ id, label, name, email, errorMsg, setErrorMsg, onChange }) => {
  const handleChange = (e) => {
    onChange(e);
    delayedHandleError(e);
  };

  const handleError = (e) => {
    const msg = validateEmail(e.target.value, e.target.name, true);
    setErrorMsg(e, msg);
  };

  const delayedHandleError = useDebounce(handleError, 1000);

  return (
    <div className="textfield input">
      <TextField
        id={id === undefined ? 'email' : id}
        label={label}
        name={name}
        variant="outlined"
        type="email"
        size="small"
        fullWidth
        value={email}
        onChange={handleChange}
        error={errorMsg !== ''}
        helperText={errorMsg}
        required
      />
    </div>
  );
};

export default EmailInput;
