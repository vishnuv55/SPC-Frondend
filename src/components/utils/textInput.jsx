import { TextField } from '@material-ui/core';
import React from 'react';
import useDebounce from '../../hooks/useDebounce';
import { validateString } from '../../helpers/validation';

const TextInput = ({ label, name, data, errorMsg, setErrorMsg, onChange }) => {
  const handleChange = (e) => {
    onChange(e);
    delayedHandleError(e);
  };

  const handleError = (e) => {
    let msg;
    switch (e.target.name) {
      case 'designation': {
        msg = validateString(e.target.value, e.target.name, 3, 50, true);
        break;
      }
      default:
        msg = '';
    }
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
        type="text"
        size="small"
        fullWidth
        value={data}
        onChange={handleChange}
        error={errorMsg !== ''}
        helperText={errorMsg}
        required
      />
    </div>
  );
};

export default TextInput;
