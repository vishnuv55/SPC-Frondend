import React from 'react';

import './style.scss';
import { Button as MaterialButton } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    borderRadius: '100px',
  },
  label: {
    textTransform: 'capitalize',
  },
});

// eslint-disable-next-line react/prop-types
const Button = ({ children, ...props }) => {
  const classes = useStyles();

  return (
    <MaterialButton
      variant="contained"
      color="primary"
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...props}
      classes={{
        root: classes.root,
        label: classes.label,
      }}
    >
      {children}
    </MaterialButton>
  );
};

export default Button;
