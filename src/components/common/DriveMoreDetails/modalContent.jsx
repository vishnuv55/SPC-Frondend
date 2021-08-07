/* eslint-disable react/button-has-type */
import React from 'react';

import { BiRupee } from 'react-icons/bi';
import { RiComputerLine } from 'react-icons/ri';
import { FiExternalLink, FiMail, FiMapPin } from 'react-icons/fi';

import ProgressLine from '../progressLine';
import DriveDate from '../../pages/admin/drive/viewDrives/driveDate';

const ModalContent = ({ drive, handleClose }) => {
  const tenthCGPA = drive.requirements?.tenth_mark?.cgpa;
  const tenthPercentage = drive.requirements?.tenth_mark?.percentage;
  const twelthCGPA = drive.requirements?.plus_two_mark?.cgpa;
  const twelthPercentage = drive.requirements?.plus_two_mark?.percentage;
  const numberOfBacklogs = drive.requirements?.number_of_backlogs;
  const btechCGPA = drive.requirements?.btech_min_cgpa;

  return (
    <div className="drive-details">
      <div className="header">
        <div className="headings">
          <h5 className="heading-4">{drive.company_name}</h5>
          <div className="links-container">
            <a href={drive.url} target="_blank" rel="noopener noreferrer" className="link-tag">
              <FiExternalLink className="icon" />
              {drive.url}
            </a>
            <a href={`mailto:${drive.contact_email}`} className="link-tag">
              <FiMail className="icon" />
              {drive.contact_email}
            </a>
          </div>
        </div>
        <DriveDate date={drive.drive_date} />
      </div>
      <p className="paragraph">{drive.description}</p>
      <div className="container">
        <div className="position">
          <span className="label">
            <RiComputerLine className="icon" />
            Position
          </span>
          <p className="paragraph">{drive.position}</p>
        </div>

        <div className="salary">
          <span className="label">
            <BiRupee className="icon" />
            Salary
          </span>
          <p className="paragraph">{drive.salary}</p>
        </div>
      </div>
      <div className="location">
        <span className="label">
          <FiMapPin className="icon" />
          location
        </span>
        <p className="paragraph">{drive.location}</p>
      </div>

      <div className="requirements">
        <h6 className="heading-6">Requirements</h6>
        <div className="horizontal-line"> </div>

        <div className="progress-bar-container">
          <div className="col-1">
            <ProgressLine
              label={`10th Percentage ${tenthPercentage}%`}
              percentage={`${tenthPercentage}%`}
            />
            <ProgressLine label={`10th CGPA ${tenthCGPA}`} percentage={`${tenthCGPA * 10}%`} />
            <ProgressLine
              label={`Number of Backlogs ${numberOfBacklogs}`}
              percentage={`${numberOfBacklogs * 0.54}%`}
            />
          </div>
          <div className="col-2">
            <ProgressLine
              label={`+2 Percentage ${twelthPercentage}%`}
              percentage={`${twelthPercentage}%`}
            />
            <ProgressLine label={`+2 CGPA ${twelthCGPA} `} percentage={`${twelthCGPA * 10}%`} />
            <ProgressLine label={`B-Tech CGPA ${btechCGPA}`} percentage={`${btechCGPA * 10}%`} />
          </div>
        </div>
      </div>
      <div className="footer">
        <button className="close-button" onClick={handleClose}>
          Close
        </button>
      </div>
    </div>
  );
};

export default ModalContent;
