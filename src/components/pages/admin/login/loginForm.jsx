import React, { useState } from 'react';

import { useHistory } from 'react-router-dom';
import { useSetRhinoState } from 'react-rhino';

import Button from '../../../common/button';
import useForm from '../../../../hooks/useForm';
import { login } from '../../../../Services/user';
import useApiError from '../../../../hooks/useApiError';
import PasswordInput from '../../../utils/passwordInput';

const LoginForm = () => {
  const { values, onChange, error, handleError } = useForm({
    password: '',
  });

  const [buttonLoading, setButtonLoading] = useState(false);

  const { handleApiError } = useApiError();

  const setUser = useSetRhinoState('user');

  const history = useHistory();

  const handleLogin = async () => {
    if (error.password === '') {
      setButtonLoading(true);
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
        setButtonLoading(false);
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
        <Button onClick={handleLogin} loading={buttonLoading}>
          Sign In
        </Button>
      </div>
    </div>
  );
};
export default LoginForm;
