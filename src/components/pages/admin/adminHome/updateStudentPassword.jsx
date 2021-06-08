import React from 'react';

import { FiUnlock } from 'react-icons/fi';
import { Button } from '@material-ui/core';
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
      try {
        await updateStudentPassword(values);
        setToastMessage({
          severity: 'Success',
          message: 'Student Password successfully Updated',
        });
      } catch (err) {
        handleApiError(err);
      }
    }
  };

  return (
    <div className="update-password">
      <h5 className="heading-5">
        <FiUnlock className="icon" />
        Update Student Password
      </h5>
      <form>
        <EmailInput
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
        <Button onClick={updatePassword}>Update Password</Button>
      </form>
    </div>
  );
};

export default UpdateStudentPassword;
