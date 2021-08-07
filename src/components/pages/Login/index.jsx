import React from 'react';

import './style.scss';
import Follow from './follow';
import Menu from '../../common/menuButton';
import LoginContainer from './LoginContainer';
import heroImg from '../../../assets/login-image.svg';

const Login = ({ darkMode, toggleDarkMode }) => {
  return (
    <div className="login">
      <div className="left-container">
        <div className="content">
          <h1 className="heading-1">Smart Placement Cell</h1>
          <p className="paragraph">
            The best solution for placement management.Login to get the find all get all the
            placement updates.
          </p>
        </div>
        {/* eslint-disable-next-line jsx-a11y/alt-text */}
        <img src={heroImg} className="hero_img" />
      </div>
      <div className="right-container">
        <LoginContainer />
        <Follow />
      </div>
      <Menu darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
    </div>
  );
};

export default Login;
