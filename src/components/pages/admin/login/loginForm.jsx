import React from 'react';

import { Button } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import PasswordInput from '../../../utils/passwordInput';
import useForm from '../../../../hooks/useForm';
import { login } from '../../../../Services/user';
import { useSetRhinoState } from '../../../../config/context';
import useApiError from '../../../../hooks/useApiError';

const LoginForm = () => {
  const { values, onChange, error, handleError } = useForm({
    password: '',
  });

  const { handleApiError } = useApiError();

  const setUser = useSetRhinoState('user');

  const history = useHistory();

  const handleLogin = async () => {
    if (error.password === '') {
      const data = {
        email: values.email,
        password: values.password,
      };

      try {
        await login('admin', data);
        setUser({
          is_user_logged_in: true,
          user_type: 'admin',
        });
        history.push('/admin/home');
      } catch (err) {
        handleApiError(err);
      }
    }
  };

  return (
    <div className="login-form">
      <PasswordInput
        label="Password"
        name="password"
        email={values.password}
        errorMsg={error.password}
        setErrorMsg={handleError}
        onChange={onChange}
      />
      <div className="button">
        <Button onClick={handleLogin}>Sign In</Button>
      </div>
    </div>
  );
};
export default LoginForm;
