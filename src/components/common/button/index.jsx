import React from 'react';

import './style.scss';

import { Button as MaterialButton } from '@material-ui/core';
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
