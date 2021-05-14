import React from 'react';

import { Switch } from 'react-router-dom';
import Login from '../pages/Login';
import StudentHome from '../pages/student';
import ExecomHome from '../pages/execom';
import ProtectedRoute from './protectedRoute';
import Route from './route';
import AdminLogin from '../pages/admin/login';
import AdminHome from '../pages/admin/adminHome';
import Profile from '../pages/student/Profile';

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Login />
      </Route>
      <Route exact path="/admin">
        <AdminLogin />
      </Route>
      <ProtectedRoute exact path="/student/home">
        <StudentHome />
      </ProtectedRoute>
      <ProtectedRoute exact path="/execom/home">
        <ExecomHome />
      </ProtectedRoute>
      <ProtectedRoute exact path="/admin/home">
        <AdminHome />
      </ProtectedRoute>
      <ProtectedRoute exact path="/student/profile">
        <Profile />
      </ProtectedRoute>
    </Switch>
  );
};

export default Routes;
