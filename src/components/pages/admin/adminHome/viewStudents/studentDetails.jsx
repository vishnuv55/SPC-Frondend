/* eslint-disable no-underscore-dangle */
import React from 'react';

import MoreInfo from './moreInfo';
import DeleteStudent from './deleteStudent';

const StudentDetails = ({ student, getStudentsDetails }) => {
  return (
    <tr className="row">
      <td className="column">{student.name}</td>
      <td className="column">
        <a href={`mailto:${student.email}`} className="mail">
          {student.email}
        </a>
      </td>
      <td className="column">{student.register_number}</td>
      <td className="column">{student.branch}</td>
      <td className="column">
        <MoreInfo studentDetails={student} />
      </td>
      <td className="column">
        <DeleteStudent id={student._id} getStudentsDetails={getStudentsDetails} />
      </td>
    </tr>
  );
};

export default StudentDetails;
