import React from 'react';

import PasswordInput from '../../utils/passwordInput';

const InputForm = ({ values, onChange, error, handleError }) => {
  return (
    <>
      <PasswordInput
        id="current_password"
        label="Current Password"
        name="currentPassword"
        password={values.currentPassword}
        errorMsg={error.currentPassword}
        setErrorMsg={handleError}
        onChange={onChange}
      />
      <PasswordInput
        id="new_password"
        label="New Password"
        name="newPassword"
        password={values.newPassword}
        errorMsg={error.newPassword}
        setErrorMsg={handleError}
        onChange={onChange}
      />
      <PasswordInput
        id="confirmPassword"
        label="Confirm Password"
        name="confirmPassword"
        onChange={onChange}
        refPassword={values.newPassword}
        password={values.confirmPassword}
        errorMsg={error.confirmPassword}
        setErrorMsg={handleError}
      />
    </>
  );
};

export default InputForm;
