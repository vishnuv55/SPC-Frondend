import { Button } from '@material-ui/core';
import React from 'react';
import { useSetRhinoState } from '../../../../config/context';
import useApiError from '../../../../hooks/useApiError';

import useForm from '../../../../hooks/useForm';
import { updateExecomPassword } from '../../../../Services/admin';
import PasswordInput from '../../../utils/passwordInput';
import TextInput from '../../../utils/textInput';

const UpdateExecomPassword = () => {
  const { values, onChange, error, handleError } = useForm({
    designation: '',
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
        await updateExecomPassword(values);
        setToastMessage({
          severity: 'Success',
          message: 'Execom Password successfully Updated',
        });
      } catch (err) {
        handleApiError(err);
      }
    }
  };

  return (
    <div className="update-password">
      <h5 className="heading-5">Update Execom Password</h5>
      <form>
        <TextInput
          label="Designation"
          name="designation"
          email={values.designation}
          errorMsg={error.designation}
          setErrorMsg={handleError}
          onChange={onChange}
        />
        <PasswordInput
          id="execom-password"
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

export default UpdateExecomPassword;
