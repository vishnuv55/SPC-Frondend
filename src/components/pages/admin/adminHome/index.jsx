import React, { useEffect } from 'react';

import './style.scss';
import { useSetRhinoState } from '../../../../config/context';
import CreateStudent from './createStudent';
import UpdateExecomPassword from './updateExecomPassword';
import UpdateStudentPassword from './updateStudentPassword';
import CreateStudentByUpload from './CreateStudentByUpload';

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
    </div>
  );
};

export default AdminHome;
