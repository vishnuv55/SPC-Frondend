/* eslint-disable no-underscore-dangle */
/* eslint-disable react/button-has-type */
import React from 'react';

import { FiBriefcase } from 'react-icons/fi';
import RegInfo from '../RegInfo';
import DeleteDrive from './deleteDrive';
import DriveDate from './driveDate';
import MoreDetails from '../../../../common/DriveMoreDetails';

const Drive = ({ drive }) => {
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
        <RegInfo id={drive._id} />
        <DeleteDrive id={drive._id} />
      </div>
    </div>
  );
};

export default Drive;
