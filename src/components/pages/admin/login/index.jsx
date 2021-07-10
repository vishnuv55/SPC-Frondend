import React from 'react';

import './style.scss';
import LoginForm from './loginForm';
import Menu from '../../../common/menuButton';
import loginImage from '../../../../assets/admin-login-image.svg';

const AdminLogin = ({ darkMode, toggleDarkMode }) => {
  return (
    <div className="admin-login">
      <img src={loginImage} alt="" className="login-image" />
      <div className="login-container">
        <h3 className="heading-3">Sign In as Admin</h3>
        <LoginForm />
      </div>
      <Menu darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
    </div>
  );
};

export default AdminLogin;
