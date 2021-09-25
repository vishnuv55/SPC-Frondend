/* eslint-disable no-underscore-dangle */
/* eslint-disable react/button-has-type */
import React from 'react';
import { useRhinoValue } from 'react-rhino';

import { FiBriefcase } from 'react-icons/fi';

import DriveDate from './driveDate';
import MoreDetails from '../DriveMoreDetails';
import RegisterForDrive from './registerForDrive';

const Drive = ({ drive, registeredDrives }) => {
  const user = useRhinoValue('user');

  return (
    <div className="drive">
      <div className="header">
        <div className="container">
          <h5 className="heading-5">{drive.company_name}</h5>
          <p className="position">
            <FiBriefcase className="icon" />
            {drive.position}
          </p>
        </div>
        <div className="date">
          <DriveDate date={drive.drive_date} />
        </div>
      </div>
      <div className="paragraph">{drive.description}</div>
      <div className="button-container">
        <MoreDetails drive={drive} />
        {user.user_type === 'student' ? (
          <RegisterForDrive registeredDrives={registeredDrives} id={drive._id} />
        ) : null}
      </div>
    </div>
  );
};

export default Drive;
