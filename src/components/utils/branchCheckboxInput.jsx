import { Checkbox, FormControl, FormControlLabel, FormGroup, FormLabel } from '@material-ui/core';
import React from 'react';

const BranchCheckboxInput = ({ values, onChange }) => {
  return (
    <div className="input checkbox-input">
      <FormControl component="fieldset" size="small">
        <FormLabel component="legend">Preferred Branches</FormLabel>
        <FormGroup fullWidth variant="outlined">
          <div className="checkboxes">
            <FormControlLabel
              control={
                <Checkbox checked={values.CSE} color="primary" onChange={onChange} name="CSE" />
              }
              label="CSE"
            />
            <FormControlLabel
              control={
                <Checkbox checked={values.ECE} color="primary" onChange={onChange} name="ECE" />
              }
              label="ECE"
            />
            <FormControlLabel
              control={
                <Checkbox checked={values.EEE} color="primary" onChange={onChange} name="EEE" />
              }
              label="EEE"
            />
          </div>
        </FormGroup>
      </FormControl>
    </div>
  );
};

export default BranchCheckboxInput;
