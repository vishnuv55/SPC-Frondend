import React, { useEffect } from 'react';

import './style.scss';
import { useSetRhinoState } from '../../../../config/context';
import CreateStudent from './createStudent';

const AdminHome = () => {
  const setPageTitle = useSetRhinoState('pageTitle');

  useEffect(() => {
    setPageTitle('Manage user accounts');
  }, [setPageTitle]);

  return (
    <div className="admin-home">
      <CreateStudent />
    </div>
  );
};

export default AdminHome;
