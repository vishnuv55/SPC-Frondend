import React, { useState } from 'react';

import UserSwitcher from './userSwitcher';
import LoginForm from './loginForm';

const LoginContainer = () => {
  const [userType, setUserType] = useState('student');

  const onStudentButtonClick = () => {
    if (userType === 'execom') setUserType('student');
  };

  const onExecomButtonClick = () => {
    if (userType === 'student') setUserType('execom');
  };

  return (
    <div className="login-container">
      <h4 className="heading-4">Sign In</h4>
      <UserSwitcher
        userType={userType}
        studentButtonClick={onStudentButtonClick}
        execomButtonClick={onExecomButtonClick}
      />
      <LoginForm user={userType} />
    </div>
  );
};

export default LoginContainer;
