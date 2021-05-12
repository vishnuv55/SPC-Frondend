import React from 'react';

import { Switch } from 'react-router-dom';
import Login from '../pages/Login';
import StudentHome from '../pages/student';
import ExecomHome from '../pages/execom';
import ProtectedRoute from './protectedRoute';
import Route from './route';

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Login />
      </Route>
      <ProtectedRoute exact to="/student">
        <StudentHome />
      </ProtectedRoute>
      <ProtectedRoute exact to="/execom">
        <ExecomHome />
      </ProtectedRoute>
    </Switch>
  );
};

export default Routes;
