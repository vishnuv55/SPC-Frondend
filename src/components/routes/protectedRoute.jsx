import React from 'react';

import { useRhinoValue } from 'react-rhino';
import { Route, Redirect } from 'react-router-dom';

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
