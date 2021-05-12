import React from 'react';

import { Switch } from 'react-router-dom';
import Login from '../pages/Login';
import StudentHome from '../pages/student';
import ExecomHome from '../pages/execom';
import ProtectedRoute from './protectedRoute';
import Route from './route';
import AdminLogin from '../pages/admin/login';
import AdminHome from '../pages/admin/adminHome';

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Login />
      </Route>
      <Route exact path="/admin">
        <AdminLogin />
      </Route>
      <ProtectedRoute exact to="/student">
        <StudentHome />
      </ProtectedRoute>
      <ProtectedRoute exact to="/execom">
        <ExecomHome />
      </ProtectedRoute>
      <ProtectedRoute exact to="/admin/home">
        <AdminHome />
      </ProtectedRoute>
    </Switch>
  );
};

export default Routes;
