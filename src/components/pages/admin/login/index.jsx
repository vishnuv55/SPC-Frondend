import React from 'react';

import './style.scss';
import loginImage from '../../../../assets/admin-login-image.svg';
import LoginForm from './loginForm';

const AdminLogin = () => {
  return (
    <div className="admin-login">
      <img src={loginImage} alt="" className="login-image" />
      <div className="login-container">
        <h3 className="heading-3">Sign In as Admin</h3>
        <LoginForm />
      </div>
    </div>
  );
};

export default AdminLogin;
