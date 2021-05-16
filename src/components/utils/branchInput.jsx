import React from 'react';

import { FormControl, InputLabel, MenuItem, Select } from '@material-ui/core';

const BranchInput = ({ value, onChange }) => {
  return (
    <div className="input branch-input">
      <FormControl variant="outlined" size="small" fullWidth required>
        <InputLabel id="branch-input-label">Branch</InputLabel>
        <Select
          name="branch"
          labelId="branch-input-label"
          id="branch-select-input"
          value={value}
          onChange={onChange}
          label="Branch"
        >
          <MenuItem value="CSE">CSE</MenuItem>
          <MenuItem value="ECE">ECE</MenuItem>
          <MenuItem value="EEE">EEE</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
};

export default BranchInput;
