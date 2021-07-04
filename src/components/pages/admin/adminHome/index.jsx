import React, { useEffect } from 'react';

import { useSetRhinoState } from '../../../../config/context';

import './style.scss';
import ViewStudents from './viewStudents';
import CreateStudent from './createStudent';
import UpdateExecomPassword from './updateExecomPassword';
import CreateStudentByUpload from './CreateStudentByUpload';
import UpdateStudentPassword from './updateStudentPassword';

const AdminHome = () => {
  const setPageTitle = useSetRhinoState('pageTitle');

  useEffect(() => {
    setPageTitle('Manage user accounts');
  }, [setPageTitle]);

  return (
    <div className="admin-home">
      <div className="create-student-container">
        <CreateStudent />
        <CreateStudentByUpload />
      </div>
      <div className="password-container">
        <UpdateStudentPassword />
        <UpdateExecomPassword />
      </div>
      <ViewStudents />
    </div>
  );
};

export default AdminHome;
