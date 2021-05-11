import React from 'react';
import { Route, Redirect } from 'react-router-dom';

// eslint-disable-next-line react/prop-types
const ProtectedRoute = ({ isUserLoggedIn, children, ...rest }) => {
  return (
    <Route
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...rest}
      render={() => {
        return isUserLoggedIn ? children : <Redirect to="/login" />;
      }}
    />
  );
};

export default ProtectedRoute;
