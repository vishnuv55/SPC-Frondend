import React from 'react';

import { Button as MaterialButton } from '@material-ui/core';

import './style.scss';
import ButtonProgress from './buttonProgress';

const Button = ({ children, loading, onClick }) => {
  return (
    <div className="loading-button-wrapper">
      <MaterialButton disabled={loading} onClick={onClick}>
        {children}
      </MaterialButton>
      {loading && <ButtonProgress />}
    </div>
  );
};

export default Button;
