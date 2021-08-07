import React from 'react';

import { TextField } from '@material-ui/core';
import useDebounce from '../../hooks/useDebounce';
import { validateDate, validateDateOfBirth } from '../../helpers/validation';

const DateInput = ({ label, name, value, onChange, errorMsg, setErrorMsg, id }) => {
  const handleChange = (e) => {
    onChange(e);
    delayedHandleError(e);
  };
  const handleError = (e) => {
    let msg;
    switch (e.target.name) {
      case 'dob': {
        msg = validateDateOfBirth(e.target.value, 16, 'Date of Birth', true);
        break;
      }
      case 'drive_date': {
        msg = validateDate(e.target.value, 'Drive Date', true);
        break;
      }
      case 'billDate': {
        msg = validateDate(e.target.value, 'Bill Date', true);
        break;
      }
      default:
        msg = '';
    }
    setErrorMsg(e, msg);
  };

  const delayedHandleError = useDebounce(handleError, 1000);
  return (
    <div className="input">
      <TextField
        id={id}
        type="date"
        label={label}
        name={name}
        variant="outlined"
        size="small"
        fullWidth
        value={value}
        onChange={handleChange}
        error={errorMsg !== ''}
        helperText={errorMsg}
        required
        InputLabelProps={{
          shrink: true,
        }}
      />
    </div>
  );
};

export default DateInput;
