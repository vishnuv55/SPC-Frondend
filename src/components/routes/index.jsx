import React from 'react';

import { Switch } from 'react-router-dom';
import Login from '../pages/Login';
import StudentHome from '../pages/student/studentHome';
import ExecomHome from '../pages/execom';
import ProtectedRoute from './protectedRoute';
import Route from './route';
import AdminLogin from '../pages/admin/login';
import AdminHome from '../pages/admin/adminHome';
import Profile from '../pages/student/Profile';
import ChangePassword from '../pages/ChangePassword';
import Drives from '../pages/admin/drive';
import Bill from '../pages/bill';
import ExecomViewDrives from '../pages/execom/execomViewDrives';
import Mail from '../pages/mail';
import Alumni from '../pages/admin/alumni';

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
        <Drives />
      </ProtectedRoute>
      <ProtectedRoute exact path="/admin/mail">
        <Mail userType="admin" />
      </ProtectedRoute>
      <ProtectedRoute exact path="/admin/forum">
        <h2> Forum </h2>
      </ProtectedRoute>
      <ProtectedRoute exact path="/admin/bill">
        <Bill userType="admin" />
      </ProtectedRoute>
      <ProtectedRoute exact path="/admin/alumni">
        <Alumni />
      </ProtectedRoute>

      {/* Execom Routes */}

      <ProtectedRoute exact path="/execom/home">
        <ExecomHome />
      </ProtectedRoute>
      <ProtectedRoute exact path="/execom/bill">
        <Bill userType="execom" />
      </ProtectedRoute>
      <ProtectedRoute exact path="/execom/mail">
        <Mail userType="execom" />
      </ProtectedRoute>
      <ProtectedRoute exact path="/execom/drive">
        <ExecomViewDrives />
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
