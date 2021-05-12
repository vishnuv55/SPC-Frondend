import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useRhinoValue } from '../../config/context';

const ProtectedRoute = ({ children, ...rest }) => {
  const user = useRhinoValue('user');
  return (
    <>
      <Route
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...rest}
        render={() => {
          return user.is_user_logged_in ? children : <Redirect to="/" />;
        }}
      />
    </>
  );
};

export default ProtectedRoute;
