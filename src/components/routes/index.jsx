import React from 'react';

import { Redirect, Switch } from 'react-router-dom';

import Route from './route';
import Bill from '../pages/bill';
import Mail from '../pages/mail';
import Login from '../pages/Login';
import Forum from '../pages/forum';
import Drives from '../pages/admin/drive';
import Alumni from '../pages/admin/alumni';
import ProtectedRoute from './protectedRoute';
import AdminLogin from '../pages/admin/login';
import Profile from '../pages/student/Profile';
import AdminHome from '../pages/admin/adminHome';
import StudentForum from '../pages/student/forum';
import ChangePassword from '../pages/ChangePassword';
import StudentHome from '../pages/student/studentHome';
import ExecomViewDrives from '../pages/execom/execomViewDrives';

const Routes = ({ darkMode, toggleDarkMode }) => {
  return (
    <Switch>
      {/* Common Routes */}

      <Route exact path="/">
        <Login darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      </Route>

      {/* Admin Routes */}

      <Route exact path="/admin">
        <AdminLogin darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
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
        <Forum userType="admin" />
      </ProtectedRoute>
      <ProtectedRoute exact path="/admin/bill">
        <Bill userType="admin" />
      </ProtectedRoute>
      <ProtectedRoute exact path="/admin/alumni">
        <Alumni />
      </ProtectedRoute>

      {/* Execom Routes */}

      <ProtectedRoute exact path="/execom/home">
        <Redirect to="/execom/bill" />
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
        <Forum userType="execom" />
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
        <StudentForum />
      </ProtectedRoute>
      <ProtectedRoute exact path="/student/update-password">
        <ChangePassword userType="student" />
      </ProtectedRoute>
    </Switch>
  );
};

export default Routes;
