import React from 'react';

import { Redirect, Switch } from 'react-router-dom';
import Login from '../pages/Login';
import StudentHome from '../pages/student/studentHome';
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
import StudentForum from '../pages/student/forum';
import Forum from '../pages/forum';

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
