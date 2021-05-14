import React from 'react';
import { Route as DefaultRoute, Redirect } from 'react-router-dom';
import { useRhinoValue } from '../../config/context';

const Route = ({ children, ...rest }) => {
  const user = useRhinoValue('user');

  return (
    <DefaultRoute
      {...rest} // eslint-disable-line react/jsx-props-no-spreading
      render={() => {
        return !user.is_user_logged_in ? children : <Redirect to="/" />;
      }}
    />
  );
};

export default Route;
