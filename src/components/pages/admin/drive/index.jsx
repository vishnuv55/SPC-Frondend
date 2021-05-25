import React from 'react';

import './style.scss';
import AddNewDrive from './addNewDrives';
import ViewDrives from './viewDrives';

const Drives = () => {
  return (
    <div className="drives">
      <ViewDrives />
      <AddNewDrive />
    </div>
  );
};

export default Drives;
