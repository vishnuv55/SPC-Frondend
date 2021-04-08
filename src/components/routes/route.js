import React from 'react';
import { Route as DefaultRoute, Redirect } from 'react-router-dom';
import { useRhinoState } from '../../helpers/context';

// eslint-disable-next-line react/prop-types
const Route = ({ children, ...rest }) => {
  const user = useRhinoState('user');
  return (
    <DefaultRoute
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...rest}
      render={() => {
        return user ? children : <Redirect to="/dashboard" />;
      }}
    />
  );
};

export default Route;
