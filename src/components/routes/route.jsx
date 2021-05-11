import React from 'react';
import { Route as DefaultRoute, Redirect } from 'react-router-dom';
import { useRhinoState } from '../../config/context';

const Route = ({ children, ...rest }) => {
  const user = useRhinoState('user');
  return (
    <DefaultRoute
      {...rest} // eslint-disable-line react/jsx-props-no-spreading
      render={() => {
        return user ? children : <Redirect to="/dashboard" />;
      }}
    />
  );
};

export default Route;
