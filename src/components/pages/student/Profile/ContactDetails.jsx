import React from 'react';
import { FiPhone } from 'react-icons/fi';
import NumberInput from '../../../utils/numberInput';
import TextInput from '../../../utils/textInput';

const ContactDetails = ({ values, onChange, error, handleError }) => {
  return (
    <div>
      <div className="heading-container">
        <FiPhone className="icon" />
        <h4 className="heading-5">Contact Details </h4>
      </div>

      <NumberInput
        id="phone_number"
        className="input-field"
        label="Phone Number"
        name="phone_number"
        value={values.phone_number}
        onChange={onChange}
        errorMsg={error.phone_number}
        setErrorMsg={handleError}
      />
      <TextInput
        id="line_one"
        className="input-field"
        label="Address Line 1"
        name="line_one"
        value={values.line_one}
        onChange={onChange}
        errorMsg={error.line_one}
        setErrorMsg={handleError}
      />
      <TextInput
        id="line_two"
        className="input-field"
        label="Address Line 2"
        name="line_two"
        value={values.line_two}
        onChange={onChange}
        errorMsg={error.line_two}
        setErrorMsg={handleError}
      />
      <TextInput
        id="state"
        className="input-field"
        label="State"
        name="state"
        value={values.state}
        onChange={onChange}
        errorMsg={error.state}
        setErrorMsg={handleError}
      />
      <NumberInput
        id="zip"
        className="input-field"
        label="Pin Code"
        name="zip"
        value={values.zip}
        onChange={onChange}
        errorMsg={error.zip}
        setErrorMsg={handleError}
      />
    </div>
  );
};

export default ContactDetails;
