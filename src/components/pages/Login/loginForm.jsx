import React from 'react';

import { Button } from '@material-ui/core';
import EmailInput from '../../utils/emailInput';
import useForm from '../../../hooks/useForm';
import PasswordInput from '../../utils/passwordInput';
import TextInput from '../../utils/textInput';
import useApiError from '../../../hooks/useApiError';
import Toast from '../../utils/toast';
import { login } from '../../../Services/user';

const LoginForm = ({ user }) => {
  const { values, onChange, error, handleError } = useForm({
    email: '',
    studentPassword: '',
    designation: '',
    execomPassword: '',
  });

  const [apiError, handleApiError] = useApiError();

  const signIn = async () => {
    if (user === 'student') {
      if (
        values.email !== '' &&
        values.studentPassword !== '' &&
        error.email === '' &&
        error.studentPassword === ''
      ) {
        const data = {
          email: values.email,
          password: values.studentPassword,
        };

        try {
          await login(user, data);
        } catch (err) {
          handleApiError(err);
        }
      }
    }
    if (user === 'execom') {
      if (
        values.designation !== '' &&
        values.execomPassword !== '' &&
        error.designation === '' &&
        error.execomPassword === ''
      ) {
        const data = {
          designation: values.designation,
          password: values.execomPassword,
        };

        try {
          await login(user, data);
        } catch (err) {
          handleApiError(err);
        }
      }
    }
  };

  return (
    <>
      <form className="login-form">
        {user === 'student' ? (
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
              label="Password"
              name="studentPassword"
              email={values.studentPassword}
              errorMsg={error.studentPassword}
              setErrorMsg={handleError}
              onChange={onChange}
            />
          </>
        ) : (
          <>
            <TextInput
              label="Designation"
              name="designation"
              email={values.designation}
              errorMsg={error.designation}
              setErrorMsg={handleError}
              onChange={onChange}
            />
            <PasswordInput
              label="Password"
              name="execomPassword"
              email={values.execomPassword}
              errorMsg={error.execomPassword}
              setErrorMsg={handleError}
              onChange={onChange}
            />
          </>
        )}
        <div className="button">
          <Button onClick={signIn}>Sign In</Button>
        </div>
      </form>
      <Toast msg={apiError} severity="error" />
    </>
  );
};

export default LoginForm;
