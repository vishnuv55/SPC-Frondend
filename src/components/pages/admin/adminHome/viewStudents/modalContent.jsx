import React from 'react';

import ProgressLine from '../../../../common/progressLine';

const ModalContent = ({ studentDetails, handleClose }) => {
  if (studentDetails.phone_number === undefined) {
    return (
      <div className="no-info-modal">
        <p className="paragraph content">
          Sorry. No more information is available on this student. Please ask the student to
          complete his profile.
        </p>
        <div className="button-container">
          <button type="button" onClick={handleClose} className="button cancel-button">
            Cancel
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="student-details-modal">
      <h5 className="heading-5">{studentDetails.name}</h5>
      <div className="register-number-container">
        <p className="register-number">{studentDetails.register_number}</p>
      </div>
      <div className="personal-info-container">
        <div className="row">
          <div className="col-1">
            <div className="container">
              <div className="label">Gender</div>
              <div className="content">{studentDetails.gender}</div>
            </div>
            <div className="container">
              <div className="label">Contact Number</div>
              <div className="content">{studentDetails.phone_number}</div>
            </div>
          </div>
          <div className="col-2">
            <div className="container">
              <div className="label">Guardian Name</div>
              <div className="content">{studentDetails.guardian_name}</div>
            </div>
            <div className="container">
              <div className="label">Guardian Contact</div>
              <div className="content">{studentDetails.guardian_contact_number}</div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="email-container">
            <div className="label">Email</div>
            <a href={`mailto:${studentDetails.email}`} className="link">
              {studentDetails.email}
            </a>
          </div>
        </div>
      </div>
      <div className="educational-details">
        <h6 className="heading-6">Educational Details</h6>
        <div className="progress-bar-container">
          <div className="col-1">
            <ProgressLine
              label={`10th Percentage ${studentDetails.tenth_mark.percentage}%`}
              percentage={`${studentDetails.tenth_mark.percentage}%`}
            />
            <ProgressLine
              label={`10th CGPA ${studentDetails.tenth_mark.cgpa}`}
              percentage={`${studentDetails.tenth_mark.cgpa * 10}%`}
            />
            <ProgressLine
              label={`Number of Backlogs ${studentDetails.number_of_backlogs}`}
              percentage={`${studentDetails.number_of_backlogs * 0.54}%`}
            />
          </div>
          <div className="col-2">
            <ProgressLine
              label={`+2 Percentage ${studentDetails.plus_two_mark.percentage}%`}
              percentage={`${studentDetails.plus_two_mark.percentage}%`}
            />
            <ProgressLine
              label={`+2 CGPA ${studentDetails.plus_two_mark.cgpa} `}
              percentage={`${studentDetails.plus_two_mark.cgpa * 10}%`}
            />
            <ProgressLine
              label={`B-Tech CGPA ${studentDetails.btech_cgpa}`}
              percentage={`${studentDetails.btech_cgpa * 10}%`}
            />
          </div>
        </div>
      </div>
      {studentDetails.placed_company && (
        <div className="placement-status">
          Placed in {studentDetails.placed_company} with a salary of {studentDetails.ctc}
        </div>
      )}
      <div className="footer">
        <button type="button" className="close-button" onClick={handleClose}>
          Close
        </button>
      </div>
    </div>
  );
};

export default ModalContent;
