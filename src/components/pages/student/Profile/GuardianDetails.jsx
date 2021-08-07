import React from 'react';

import { FiHome } from 'react-icons/fi';

import TextInput from '../../../utils/textInput';
import NumberInput from '../../../utils/numberInput';

const GuardianDetails = ({ values, onChange, error, handleError }) => {
  return (
    <div>
      <div className="heading-container guardian-heading">
        <FiHome className="icon" />
        <h4 className="heading-5 "> Guardian Details </h4>
      </div>

      <TextInput
        id="guardian_name"
        className="input-field"
        label=" Name"
        name="guardian_name"
        value={values.guardian_name}
        onChange={onChange}
        errorMsg={error.guardian_name}
        setErrorMsg={handleError}
      />
      <NumberInput
        id="guardian_phone_number"
        className="input-field"
        label="Phone Number"
        name="guardian_phone_number"
        value={values.guardian_phone_number}
        onChange={onChange}
        errorMsg={error.guardian_phone_number}
        setErrorMsg={handleError}
      />
    </div>
  );
};

export default GuardianDetails;
