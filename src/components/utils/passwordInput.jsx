import React from 'react';

import { TextField } from '@material-ui/core';
import { validateConfirmPassword, validatePassword } from '../../helpers/validation';
import useDebounce from '../../hooks/useDebounce';

const PasswordInput = ({
  label,
  name,
  password,
  errorMsg,
  setErrorMsg,
  onChange,
  id,
  refPassword,
}) => {
  const handleChange = (e) => {
    onChange(e);
    delayedHandleError(e, refPassword);
  };

  // eslint-disable-next-line no-shadow
  const handleError = (e, refPassword) => {
    let msg;
    if (e.target.name === 'confirmPassword') {
      msg = validateConfirmPassword(refPassword, e.target.value);
    } else {
      msg = validatePassword(e.target.value, 'Password', true);
    }
    setErrorMsg(e, msg);
  };

  const delayedHandleError = useDebounce(handleError, 1000);
  return (
    <div className="textfield input">
      <TextField
        id={id}
        label={label}
        name={name}
        variant="outlined"
        type="password"
        size="small"
        fullWidth
        defaultValue=""
        value={password}
        onChange={handleChange}
        error={errorMsg !== ''}
        helperText={errorMsg}
        required
      />
    </div>
  );
};

export default PasswordInput;
