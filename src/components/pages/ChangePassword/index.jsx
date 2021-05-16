import React, { useEffect } from 'react';

import './style.scss';
import { Button } from '@material-ui/core';
import { useSetRhinoState } from '../../../config/context';
import useForm from '../../../hooks/useForm';
import InputForm from './inputForm';
import useApiError from '../../../hooks/useApiError';
import { changePassword } from '../../../Services/user';
import img from '../../../assets/changePassword.svg';

const ChangePassword = ({ userType }) => {
  const { values, onChange, error, handleError } = useForm({
    currentPassword: '',
    newPassword: '',
    confirmPassword: '',
  });

  const setPageTitle = useSetRhinoState('pageTitle');

  const setToastMessage = useSetRhinoState('toastMessage');

  const { handleApiError } = useApiError();

  useEffect(() => {
    setPageTitle('Update Password');
  }, [setPageTitle]);

  // Function handle change password
  const handleChangePassword = async () => {
    const isValuesEmpty = Object.values(values).some((value) => value === '');
    const isError = Object.values(error).some((err) => err !== '');

    if (isValuesEmpty) {
      setToastMessage({
        severity: 'error',
        message: 'Please fill up all fields',
      });
    } else if (isError) {
      setToastMessage({
        severity: 'error',
        message: 'Invalid data found',
      });
    } else if (values.newPassword !== values.confirmPassword) {
      setToastMessage({
        severity: 'error',
        message: 'Confirm password and New password must be same',
      });
    } else {
      const data = {
        current_password: values.currentPassword,
        new_password: values.newPassword,
      };

      try {
        await changePassword(userType, data);

        setToastMessage({
          severity: 'success',
          message: 'Password successfully updated',
        });
      } catch (err) {
        handleApiError(err);
      }
    }
  };

  return (
    <div className="change-password-container">
      <div className="change-password-wrapper">
        <InputForm values={values} onChange={onChange} error={error} handleError={handleError} />
        <div className="button-wrapper">
          <Button onClick={handleChangePassword}>Change Password</Button>
        </div>
      </div>
      <img src={img} className="change-password-svg" alt="Change password" />
    </div>
  );
};

export default ChangePassword;
