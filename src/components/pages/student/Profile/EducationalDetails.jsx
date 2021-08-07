import React from 'react';

import { FiAward } from 'react-icons/fi';

import NumberInput from '../../../utils/numberInput';

const EducationalDetails = ({ values, onChange, error, handleError }) => {
  return (
    <>
      <div className="heading-container education-heading">
        <FiAward className="icon" />
        <h4 className="heading-5">Educational Details </h4>
      </div>

      <div className="tenth-marks">
        <NumberInput
          id="tenth_percentage"
          className="input-field"
          label="Tenth Percentage"
          name="tenth_percentage"
          value={values.tenth_percentage}
          onChange={onChange}
          errorMsg={error.tenth_percentage}
          setErrorMsg={handleError}
        />
        <NumberInput
          id="tenth_cgpa"
          className="input-field"
          label="Tenth CGPA"
          name="tenth_cgpa"
          value={values.tenth_cgpa}
          onChange={onChange}
          errorMsg={error.tenth_cgpa}
          setErrorMsg={handleError}
        />
      </div>
      <div className="twelfth-marks">
        <NumberInput
          id="twelfth_percentage"
          className="input-field"
          label="Twelfth Percentage"
          name="twelfth_percentage"
          value={values.twelfth_percentage}
          onChange={onChange}
          errorMsg={error.twelfth_percentage}
          setErrorMsg={handleError}
        />
        <NumberInput
          id="twelfth_cgpa"
          className="input-field"
          label="Twelfth CGPA"
          name="twelfth_cgpa"
          value={values.twelfth_cgpa}
          onChange={onChange}
          errorMsg={error.twelfth_cgpa}
          setErrorMsg={handleError}
        />
      </div>
      <NumberInput
        id="btech_cgpa"
        className="input-field"
        label="Btech CGPA"
        name="btech_cgpa"
        value={values.btech_cgpa}
        onChange={onChange}
        errorMsg={error.btech_cgpa}
        setErrorMsg={handleError}
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
      />
    </>
  );
};

export default EducationalDetails;
