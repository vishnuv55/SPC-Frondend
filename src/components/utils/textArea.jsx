import { TextField } from '@material-ui/core';
import React from 'react';
import useDebounce from '../../hooks/useDebounce';
import { validateString } from '../../helpers/validation';

const TextArea = ({ label, name, value, errorMsg, setErrorMsg, onChange, id, rows }) => {
  const handleChange = (e) => {
    onChange(e);
    delayedHandleError(e);
  };

  const handleError = (e) => {
    let msg;
    switch (e.target.name) {
      case 'description': {
        msg = validateString(e.target.value, 'Description', 20, 200, true);
        break;
      }
      case 'billDescription': {
        msg = validateString(e.target.value, 'Description', 10, 100, true);
        break;
      }
      default:
        msg = '';
    }
    setErrorMsg(e, msg);
  };

  const delayedHandleError = useDebounce(handleError, 1000);

  return (
    <div className="textarea input">
      <TextField
        id={id}
        label={label}
        name={name}
        variant="outlined"
        type="text"
        size="small"
        fullWidth
        multiline
        rows={rows}
        value={value}
        onChange={handleChange}
        error={errorMsg !== ''}
        helperText={errorMsg}
        required
      />
    </div>
  );
};

export default TextArea;
