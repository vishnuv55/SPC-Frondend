import React from 'react';
import { FormControlLabel, FormLabel, Radio, RadioGroup } from '@material-ui/core';

const GenderInput = ({ value, onChange }) => {
  const handleChange = (e) => {
    onChange(e);
  };
  return (
    <div className="input gender-picker">
      <FormLabel component="legend">Gender</FormLabel>
      <RadioGroup aria-label="gender" name="gender" value={value} onChange={handleChange}>
        <div className="gender-values">
          <FormControlLabel value="female" control={<Radio />} label="Female" />
          <FormControlLabel value="male" control={<Radio />} label="Male" />
          <FormControlLabel value="other" control={<Radio />} label="Other" />
        </div>
      </RadioGroup>
    </div>
  );
};

export default GenderInput;
