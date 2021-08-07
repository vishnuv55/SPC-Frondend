import React, { useState } from 'react';

import { FiUnlock } from 'react-icons/fi';

import Button from '../../../common/button';
import useForm from '../../../../hooks/useForm';
import EmailInput from '../../../utils/emailInput';
import useApiError from '../../../../hooks/useApiError';
import PasswordInput from '../../../utils/passwordInput';
import { useSetRhinoState } from '../../../../config/context';
import { updateStudentPassword } from '../../../../Services/admin';

const UpdateStudentPassword = () => {
  const { values, onChange, error, handleError } = useForm({
    email: '',
    password: '',
  });

  const [buttonLoading, setButtonLoading] = useState(false);

  const { handleApiError } = useApiError();

  const setToastMessage = useSetRhinoState('toastMessage');

  const updatePassword = async () => {
    const isValuesEmpty = Object.values(values).some((value) => value === '');
    const isError = Object.values(error).some((err) => err !== '');

    if (isValuesEmpty) {
      setToastMessage({
        severity: 'Error',
        message: 'Please fill all the fields',
      });
    } else if (isError) {
      setToastMessage({
        severity: 'Error',
        message: 'Please resolve the error first',
      });
    } else {
      setButtonLoading(true);
      try {
        await updateStudentPassword(values);
        setToastMessage({
          severity: 'Success',
          message: 'Student Password successfully Updated',
        });
        setButtonLoading(false);
      } catch (err) {
        handleApiError(err);
        setButtonLoading(false);
      }
    }
  };

  return (
    <div className="update-password">
      <h5 className="heading-5">
        <FiUnlock className="icon" />
        Update Student Password
      </h5>
      <div>
        <EmailInput
          id="student-email"
          label="Email"
          name="email"
          email={values.email}
          errorMsg={error.email}
          setErrorMsg={handleError}
          onChange={onChange}
        />
        <PasswordInput
          id="student-password"
          label="Password"
          name="password"
          email={values.password}
          errorMsg={error.password}
          setErrorMsg={handleError}
          onChange={onChange}
        />
        <div className="button-container">
          <Button onClick={updatePassword} loading={buttonLoading}>
            Update Password
          </Button>
        </div>
      </div>
    </div>
  );
};

export default UpdateStudentPassword;
