import React, { useState } from 'react';

import { FiCheckSquare } from 'react-icons/fi';
import Criteria from './criteria';
import MailContent from './mailContent';
import useForm from '../../../hooks/useForm';

const SendMail = ({ userType }) => {
  const { values, onChange, error, handleError } = useForm({
    tenth_percentage: '',
    twelfth_percentage: '',
    btech_cgpa: '',
    branch: '',
    number_of_backlogs: '',
    subject: '',
  });

  const [checkboxValues, setCheckboxValues] = useState({
    male: true,
    female: true,
    others: true,
    CSE: true,
    ECE: true,
    EEE: true,
  });

  const handleCheckboxChange = (e) => {
    setCheckboxValues((prevPreferredGender) => {
      return {
        ...prevPreferredGender,
        [e.target.name]: e.target.checked,
      };
    });
  };

  return (
    <>
      <div className="criteria-container">
        <h5 className="heading-5">
          <FiCheckSquare className="icon" /> Choose criteria
        </h5>
        <div className="note">
          <p className="paragraph">Select None if the mail should be send to all students.</p>
        </div>
        <Criteria
          values={values}
          onChange={onChange}
          error={error}
          handleError={handleError}
          checkboxValues={checkboxValues}
          handleCheckboxChange={handleCheckboxChange}
        />
      </div>
      <MailContent
        values={values}
        checkboxValues={checkboxValues}
        onChange={onChange}
        error={error}
        handleError={handleError}
        userType={userType}
      />
    </>
  );
};

export default SendMail;
