/* eslint-disable no-underscore-dangle */
import React from 'react';

import StudentDetails from './studentDetails';

const StudentDetailsTable = ({ students, getStudentsDetails }) => {
  return (
    <div className="students">
      <table className="student-table">
        <thead>
          <tr className="headings">
            <th>Name</th>
            <th>Email</th>
            <th>Register Number</th>
            <th>Branch</th>
            <th>More Info</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <StudentDetails
              key={student._id}
              student={student}
              getStudentsDetails={getStudentsDetails}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StudentDetailsTable;
