import React from 'react';
import { FiUser } from 'react-icons/fi';
import TextInput from '../../../utils/textInput';
import DateInput from '../../../utils/dateInput';
import GenderInput from '../../../utils/genderInput';

const PersonalDetails = ({ values, onChange, error, handleError }) => {
  return (
    <>
      <div className="heading-container">
        <FiUser className="icon" />
        <h4 className="heading-5">Personal Details</h4>
      </div>
      <TextInput
        id="name"
        className="input-field"
        label="Name"
        name="name"
        value={values.name}
        onChange={onChange}
        errorMsg={error.name}
        setErrorMsg={handleError}
      />
      <DateInput
        id="date_of_birth"
        className="input-field"
        label="Date of Birth"
        name="dob"
        value={values.dob}
        onChange={onChange}
        errorMsg={error.dob}
        setErrorMsg={handleError}
      />
      <GenderInput value={values.gender} onChange={onChange} />
    </>
  );
};

export default PersonalDetails;
