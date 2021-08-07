import React, { useState } from 'react';

import { FiUnlock } from 'react-icons/fi';

import Button from '../../../common/button';
import useForm from '../../../../hooks/useForm';
import TextInput from '../../../utils/textInput';
import useApiError from '../../../../hooks/useApiError';
import PasswordInput from '../../../utils/passwordInput';
import { useSetRhinoState } from '../../../../config/context';
import { updateExecomPassword } from '../../../../Services/admin';

const UpdateExecomPassword = () => {
  const { values, onChange, error, handleError } = useForm({
    designation: '',
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
        await updateExecomPassword(values);
        setToastMessage({
          severity: 'Success',
          message: 'Execom Password successfully Updated',
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
        <FiUnlock className="icon" /> Update Execom Password
      </h5>
      <div>
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
        <div className="button-container">
          <Button onClick={updatePassword} loading={buttonLoading}>
            Update Password
          </Button>
        </div>
      </div>
    </div>
  );
};

export default UpdateExecomPassword;
