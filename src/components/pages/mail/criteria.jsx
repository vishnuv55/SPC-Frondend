import React from 'react';
import BranchCheckboxInput from '../../utils/branchCheckboxInput';
import GenderCheckboxInput from '../../utils/genderCheckboxInput';
import NumberInput from '../../utils/numberInput';

const Criteria = ({
  values,
  onChange,
  error,
  handleError,
  checkboxValues,
  handleCheckboxChange,
}) => {
  return (
    <div className="criteria">
      <div className="container">
        <NumberInput
          id="tenth_percentage"
          className="input-field"
          label="Tenth Percentage"
          name="tenth_percentage"
          value={values.tenth_percentage}
          onChange={onChange}
          errorMsg={error.tenth_percentage}
          setErrorMsg={handleError}
          isRequired={false}
        />
        <NumberInput
          id="twelfth_percentage"
          className="input-field"
          label="Twelfth Percentage"
          name="twelfth_percentage"
          value={values.twelfth_percentage}
          onChange={onChange}
          errorMsg={error.twelfth_percentage}
          setErrorMsg={handleError}
          isRequired={false}
        />
      </div>
      <div className="container">
        <NumberInput
          id="btech_cgpa"
          className="input-field"
          label="Btech CGPA"
          name="btech_cgpa"
          value={values.btech_cgpa}
          onChange={onChange}
          errorMsg={error.btech_cgpa}
          setErrorMsg={handleError}
          isRequired={false}
        />
        <NumberInput
          id="number_of_backlogs"
          className="input-field"
          label="Number of backlogs"
          name="number_of_backlogs"
          value={values.number_of_backlogs}
          onChange={onChange}
          errorMsg={error.number_of_backlogs}
          setErrorMsg={handleError}
          isRequired={false}
        />
      </div>
      <BranchCheckboxInput values={checkboxValues} onChange={handleCheckboxChange} />
      <GenderCheckboxInput values={checkboxValues} onChange={handleCheckboxChange} />
    </div>
  );
};

export default Criteria;
