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
import ChangePassword from '../pages/ChangePassword';

const Routes = () => {
  return (
    <Switch>
      {/* Common Routes */}

      <Route exact path="/">
        <Login />
      </Route>

      {/* Admin Routes */}

      <Route exact path="/admin">
        <AdminLogin />
      </Route>
      <ProtectedRoute exact path="/admin/home">
        <AdminHome />
      </ProtectedRoute>
      <ProtectedRoute exact path="/admin/drive">
        <h2> Drive </h2>
      </ProtectedRoute>
      <ProtectedRoute exact path="/admin/mail">
        <h2> Mail </h2>
      </ProtectedRoute>
      <ProtectedRoute exact path="/admin/forum">
        <h2> Forum </h2>
      </ProtectedRoute>
      <ProtectedRoute exact path="/admin/bill">
        <h2> Bill </h2>
      </ProtectedRoute>
      <ProtectedRoute exact path="/admin/alumni">
        <h2> Alumni </h2>
      </ProtectedRoute>

      {/* Execom Routes */}

      <ProtectedRoute exact path="/execom/home">
        <ExecomHome />
      </ProtectedRoute>
      <ProtectedRoute exact path="/execom/bill">
        <h2> Bill </h2>
      </ProtectedRoute>
      <ProtectedRoute exact path="/execom/mail">
        <h2> Mail </h2>
      </ProtectedRoute>
      <ProtectedRoute exact path="/execom/drive">
        <h2> Drive </h2>
      </ProtectedRoute>
      <ProtectedRoute exact path="/execom/forum">
        <h2> Forum </h2>
      </ProtectedRoute>
      <ProtectedRoute exact path="/execom/update-password">
        <ChangePassword userType="execom" />
      </ProtectedRoute>

      {/* Student Routes */}

      <ProtectedRoute exact path="/student/home">
        <StudentHome />
      </ProtectedRoute>
      <ProtectedRoute exact path="/student/profile">
        <Profile />
      </ProtectedRoute>
      <ProtectedRoute exact path="/student/Forum">
        <h2> Forum </h2>
      </ProtectedRoute>
      <ProtectedRoute exact path="/student/update-password">
        <ChangePassword userType="student" />
      </ProtectedRoute>
    </Switch>
  );
};

export default Routes;
