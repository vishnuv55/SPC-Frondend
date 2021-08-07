import React, { useEffect, useState } from 'react';

import './style.scss';
import InputForm from './inputForm';
import Button from '../../common/button';
import useForm from '../../../hooks/useForm';
import useApiError from '../../../hooks/useApiError';
import img from '../../../assets/changePassword.svg';
import { changePassword } from '../../../Services/user';
import { useSetRhinoState } from '../../../config/context';

const ChangePassword = ({ userType }) => {
  const { values, onChange, error, handleError } = useForm({
    currentPassword: '',
    newPassword: '',
    confirmPassword: '',
  });

  const setPageTitle = useSetRhinoState('pageTitle');

  const setToastMessage = useSetRhinoState('toastMessage');

  const { handleApiError } = useApiError();

  const [buttonLoading, setButtonLoading] = useState(false);

  useEffect(() => {
    setPageTitle('Update Password');
  }, [setPageTitle]);

  // Function handle change password
  const handleChangePassword = async () => {
    const isValuesEmpty = Object.values(values).some((value) => value === '');
    const isError = Object.values(error).some((err) => err !== '');
    setButtonLoading(true);

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
        setButtonLoading(false);
      } catch (err) {
        handleApiError(err);
        setButtonLoading(false);
      }
    }
  };

  return (
    <div className="change-password-container">
      <div className="change-password-wrapper">
        <InputForm values={values} onChange={onChange} error={error} handleError={handleError} />
        <div className="button-wrapper">
          <Button onClick={handleChangePassword} loading={buttonLoading}>
            Change Password
          </Button>
        </div>
      </div>
      <img src={img} className="change-password-svg" alt="Change password" />
    </div>
  );
};

export default ChangePassword;
