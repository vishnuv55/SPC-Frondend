import React from 'react';

import './style.scss';
import ViewDrives from './viewDrives';
import AddNewDrive from './addNewDrives';

const Drives = () => {
  return (
    <div className="drives">
      <ViewDrives />
      <AddNewDrive />
    </div>
  );
};

export default Drives;
