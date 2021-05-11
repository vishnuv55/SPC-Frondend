import { TextField } from '@material-ui/core';
import React from 'react';
import { validatePassword } from '../../helpers/validation';
import useDebounce from '../../hooks/useDebounce';

const PasswordInput = ({ label, name, password, errorMsg, setErrorMsg, onChange }) => {
  const handleChange = (e) => {
    onChange(e);
    delayedHandleError(e);
  };

  // eslint-disable-next-line no-shadow
  const handleError = (e, errorMsg) => {
    const msg = validatePassword(e.target.value, 'Password', true);
    setErrorMsg(e, msg);
  };

  const delayedHandleError = useDebounce(handleError, 1000);

  return (
    <div className="textfield">
      <TextField
        id="outlined-basic"
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
