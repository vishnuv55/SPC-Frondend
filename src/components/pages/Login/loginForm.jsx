import React, { useState } from 'react';

import { useHistory } from 'react-router-dom';
import { login } from '../../../Services/user';
import { useSetRhinoState } from '../../../config/context';

import Button from '../../common/button';
import useForm from '../../../hooks/useForm';
import TextInput from '../../utils/textInput';
import EmailInput from '../../utils/emailInput';
import useApiError from '../../../hooks/useApiError';
import PasswordInput from '../../utils/passwordInput';

const LoginForm = ({ userType }) => {
  const { values, onChange, error, handleError } = useForm({
    email: '',
    studentPassword: '',
    designation: '',
    execomPassword: '',
  });

  const [buttonLoading, setButtonLoading] = useState(false);

  // eslint-disable-next-line no-unused-vars
  const setUser = useSetRhinoState('user');

  const { handleApiError } = useApiError();

  const history = useHistory();

  const handleLogin = async () => {
    if (userType === 'student') {
      if (
        values.email !== '' &&
        values.studentPassword !== '' &&
        error.email === '' &&
        error.studentPassword === ''
      ) {
        setButtonLoading(true);
        const data = {
          email: values.email,
          password: values.studentPassword,
        };

        try {
          await login(userType, data);
          setUser({
            is_user_logged_in: true,
            user_type: userType,
          });
          history.push(`/${userType}/home`);
        } catch (err) {
          handleApiError(err);
          setButtonLoading(false);
        }
      }
    }
    if (userType === 'execom') {
      if (
        values.designation !== '' &&
        values.execomPassword !== '' &&
        error.designation === '' &&
        error.execomPassword === ''
      ) {
        setButtonLoading(true);
        const data = {
          designation: values.designation,
          password: values.execomPassword,
        };

        try {
          await login(userType, data);
          setUser({
            is_user_logged_in: true,
            user_type: userType,
          });
          history.push(`/${userType}/home`);
        } catch (err) {
          handleApiError(err);
          setButtonLoading(false);
        }
      }
    }
  };

  return (
    <>
      <div className="login-form">
        {userType === 'student' ? (
          <>
            <EmailInput
              label="Email"
              name="email"
              email={values.email}
              errorMsg={error.email}
              setErrorMsg={handleError}
              onChange={onChange}
            />
            <PasswordInput
              id="studentPassword"
              label="Password"
              name="studentPassword"
              password={values.studentPassword}
              errorMsg={error.studentPassword}
              setErrorMsg={handleError}
              onChange={onChange}
            />
          </>
        ) : (
          <>
            <TextInput
              id="designation"
              label="Designation"
              name="designation"
              password={values.designation}
              errorMsg={error.designation}
              setErrorMsg={handleError}
              onChange={onChange}
            />
            <PasswordInput
              id="execomPassword"
              label="Password"
              name="execomPassword"
              password={values.execomPassword}
              errorMsg={error.execomPassword}
              setErrorMsg={handleError}
              onChange={onChange}
            />
          </>
        )}
        <div className="button">
          <Button onClick={handleLogin} loading={buttonLoading}>
            Sign In
          </Button>
        </div>
      </div>
    </>
  );
};

export default LoginForm;
