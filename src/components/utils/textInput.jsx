import { TextField } from '@material-ui/core';
import React from 'react';
import useDebounce from '../../hooks/useDebounce';
import { validateString, validateUrl } from '../../helpers/validation';

const TextInput = ({ label, name, value, errorMsg, setErrorMsg, onChange, id }) => {
  const handleChange = (e) => {
    onChange(e);
    delayedHandleError(e);
  };

  const handleError = (e) => {
    let msg;
    switch (e.target.name) {
      case 'designation': {
        msg = validateString(e.target.value, 'Designation', 3, 50, true);
        break;
      }
      case 'name': {
        msg = validateString(e.target.value, 'Name', 3, 50, true);
        break;
      }
      case 'line_one': {
        msg = validateString(e.target.value, 'Address Line 1', 3, 120, true);
        break;
      }
      case 'line_two': {
        msg = validateString(e.target.value, 'Address Line 2', 3, 120, true);
        break;
      }
      case 'state': {
        msg = validateString(e.target.value, 'State', 3, 30, true);
        break;
      }
      case 'guardian_name': {
        msg = validateString(e.target.value, 'Name', 3, 50, true);
        break;
      }
      case 'register_number': {
        msg = validateString(e.target.value, 'Register Number', 5, 20, true);
        break;
      }
      case 'company_name': {
        msg = validateString(e.target.value, 'Company Name', 5, 20, true);
        break;
      }
      case 'location': {
        msg = validateString(e.target.value, 'Location', 5, 20, true);
        break;
      }
      case 'url': {
        msg = validateUrl(e.target.value, 'URL', true);
        break;
      }
      case 'salary': {
        msg = validateString(e.target.value, 'Salary', 5, 20, true);
        break;
      }
      case 'position': {
        msg = validateString(e.target.value, 'Position', 5, 20, true);
        break;
      }
      case 'billTitle': {
        msg = validateString(e.target.value, 'Title', 5, 20, true);
        break;
      }
      default:
        msg = '';
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
        type="text"
        size="small"
        fullWidth
        value={value}
        onChange={handleChange}
        error={errorMsg !== ''}
        helperText={errorMsg}
        required
      />
    </div>
  );
};

export default TextInput;
