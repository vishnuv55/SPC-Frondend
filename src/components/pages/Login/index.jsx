import React from 'react';

import './style.scss';
import LoginContainer from './LoginContainer';
import heroImg from '../../../assets/login-image.svg';
import Follow from './follow';

const Login = () => {
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
    </div>
  );
};

export default Login;
