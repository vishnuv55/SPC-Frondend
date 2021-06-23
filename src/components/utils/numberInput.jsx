import { TextField } from '@material-ui/core';
import React from 'react';
import useDebounce from '../../hooks/useDebounce';
import {
  validateNumber,
  validatePassOutYear,
  validatePhone,
  validateString,
} from '../../helpers/validation';

const NumberInput = ({ label, name, value, errorMsg, setErrorMsg, onChange, id, isRequired }) => {
  const handleChange = (e) => {
    onChange(e);
    delayedHandleError(e);
  };

  const handleError = (e) => {
    let msg;
    switch (e.target.name) {
      case 'tenth_percentage': {
        msg = validateNumber(parseInt(e.target.value, 10), 0, 100, 'Tenth Percentage', true);
        break;
      }
      case 'tenth_cgpa': {
        msg = validateNumber(parseInt(e.target.value, 10), 0, 10, 'Tenth CGPA', true);
        break;
      }
      case 'twelfth_percentage': {
        msg = validateNumber(parseInt(e.target.value, 10), 0, 100, 'Twelfth Percentage', true);
        break;
      }
      case 'twelfth_cgpa': {
        msg = validateNumber(parseInt(e.target.value, 10), 0, 10, 'Twelfth CGPA', true);
        break;
      }
      case 'btech_cgpa': {
        msg = validateNumber(parseInt(e.target.value, 10), 0, 10, 'Btech_cgpa', true);
        break;
      }
      case 'number_of_backlogs': {
        msg = validateNumber(parseInt(e.target.value, 10), 0, 57, 'Number of Backlogs', true);
        break;
      }
      case 'phone_number': {
        msg = validatePhone(e.target.value, 'Phone Number', true);
        break;
      }
      case 'zip': {
        msg = validateString(e.target.value, 'Pin code', 6, 6, true);
        break;
      }
      case 'guardian_phone_number': {
        msg = validatePhone(e.target.value, 'Phone Number', true);
        break;
      }
      case 'billAmount': {
        msg = validateNumber(parseInt(e.target.value, 10), 1, 999999999, 'Amount', true);
        break;
      }
      case 'pass_out_year': {
        msg = validatePassOutYear(parseInt(e.target.value, 10));
        break;
      }
      case 'ctc': {
        msg = validateNumber(parseInt(e.target.value, 10), 500, 999999999, 'CTC', false);
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
        type="number"
        size="small"
        fullWidth
        value={value}
        onChange={handleChange}
        error={errorMsg !== ''}
        helperText={errorMsg}
        required={isRequired !== undefined ? isRequired : true}
      />
    </div>
  );
};

export default NumberInput;
