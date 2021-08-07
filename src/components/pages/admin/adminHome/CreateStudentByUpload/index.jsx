import React from 'react';

import { FiUsers } from 'react-icons/fi';

import './style.scss';
import FileUpload from './fileUpload';

const CreateStudentByUpload = () => {
  return (
    <div className="student-file-upload">
      <h5 className="heading-5">
        <FiUsers className="icon" />
        Create Student with upload
      </h5>
      <p className="paragraph">
        The uploaded file must be of type text/csv with Register Number, Name, Email, Branch and
        Number of backlogs Respectively.
      </p>
      <FileUpload />
    </div>
  );
};

export default CreateStudentByUpload;
