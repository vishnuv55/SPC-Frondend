import { Checkbox, FormControl, FormControlLabel, FormGroup, FormLabel } from '@material-ui/core';
import React from 'react';

const GenderCheckboxInput = ({ values, onChange }) => {
  return (
    <div className="input checkbox-input">
      <FormControl component="fieldset" size="small">
        <FormLabel component="legend">Preferred gender</FormLabel>
        <FormGroup fullWidth variant="outlined">
          <div className="checkboxes">
            <FormControlLabel
              control={
                <Checkbox checked={values.male} color="primary" onChange={onChange} name="male" />
              }
              label="Male"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={values.female}
                  color="primary"
                  onChange={onChange}
                  name="female"
                />
              }
              label="Female"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={values.others}
                  color="primary"
                  onChange={onChange}
                  name="others"
                />
              }
              label="Others"
            />
          </div>
        </FormGroup>
      </FormControl>
    </div>
  );
};

export default GenderCheckboxInput;
