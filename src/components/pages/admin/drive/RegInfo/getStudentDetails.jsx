import React, { useState } from 'react';
import './style.scss';
import Switch from '@material-ui/core/Switch';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { Button } from '@material-ui/core';
import { jsonToCSV } from 'react-papaparse';
import { regStudentDetails } from '../../../../../Services/admin';
import useApiError from '../../../../../hooks/useApiError';

const GetStudentDetails = ({ id, handleClose }) => {
  const { handleApiError } = useApiError();
  const [requiredDetails, setRequiredDetails] = useState({
    id,
    branch: false,
    gender: false,
    dob: false,
    tenth_mark: false,
    plus_two_mark: false,
    btech_cgpa: false,
    number_of_backlogs: false,
    email: false,
    phone_number: false,
  });
  const toggleRequiredDetails = (e) => {
    setRequiredDetails((prevChecked) => {
      return {
        ...prevChecked,
        [e.target.name]: !requiredDetails[e.target.name],
      };
    });
  };

  const refineJsonData = (data) => {
    let i = 1;

    for (const student of data) {
      if (student.tenth_mark) {
        student.tenth_percentage = student.tenth_mark.percentage;
        student.tenth_cgpa = student.tenth_mark.cgpa;
        delete student.tenth_mark;
      }
      if (student.plus_two_mark) {
        student.Plus_two_percentage = student.plus_two_mark.percentage;
        student.plus_two_cgpa = student.plus_two_mark.cgpa;
        delete student.plus_two_mark;
      }
      // eslint-disable-next-line no-underscore-dangle
      student._id = i;
      i += 1;
    }
    return data;
  };

  const generateCsvFile = async (data) => {
    const csv = await jsonToCSV(data);
    const csvData = new Blob([csv], { type: 'text/csv;charset=utf-8;' });

    const csvURL = window.URL.createObjectURL(csvData);

    const testLink = document.createElement('a');
    testLink.href = csvURL;
    testLink.setAttribute('download', 'StudentDetails.csv');
    testLink.click();
  };
  const handleGetDetails = async () => {
    try {
      const studentDetails = await regStudentDetails(requiredDetails);
      const refinedStudentDetails = await refineJsonData(studentDetails.data);
      generateCsvFile(refinedStudentDetails);
    } catch (err) {
      handleApiError(err);
    }
    handleClose();
  };
  return (
    <div className="req-info">
      <p className="paragraph"> Please select required data from below.</p>
      <FormGroup>
        <div className="req-wrapper">
          <div className="col-1">
            <FormControlLabel
              control={
                <Switch
                  name="branch"
                  color="primary"
                  checked={requiredDetails.branch}
                  onChange={toggleRequiredDetails}
                />
              }
              label="Branch"
            />
            <FormControlLabel
              control={
                <Switch
                  color="primary"
                  name="gender"
                  checked={requiredDetails.gender}
                  onChange={toggleRequiredDetails}
                />
              }
              label="Gender"
            />
            <FormControlLabel
              control={
                <Switch
                  color="primary"
                  name="dob"
                  checked={requiredDetails.dob}
                  onChange={toggleRequiredDetails}
                />
              }
              label="Date of Birth"
            />
            <FormControlLabel
              control={
                <Switch
                  color="primary"
                  name="tenth_mark"
                  checked={requiredDetails.tenth_mark}
                  onChange={toggleRequiredDetails}
                />
              }
              label="Tenth Mark"
            />
            <FormControlLabel
              control={
                <Switch
                  color="primary"
                  name="plus_two_mark"
                  checked={requiredDetails.plus_two_mark}
                  onChange={toggleRequiredDetails}
                />
              }
              label="Plus Two Marks"
            />
          </div>
          <div className="col-2">
            <FormControlLabel
              control={
                <Switch
                  name="btech_cgpa"
                  color="primary"
                  checked={requiredDetails.btech_cgpa}
                  onChange={toggleRequiredDetails}
                />
              }
              label="Btech CGPA"
            />
            <FormControlLabel
              control={
                <Switch
                  color="primary"
                  name="number_of_backlogs"
                  checked={requiredDetails.number_of_backlogs}
                  onChange={toggleRequiredDetails}
                />
              }
              label="Number of Backlogs"
            />
            <FormControlLabel
              control={
                <Switch
                  color="primary"
                  name="email"
                  checked={requiredDetails.email}
                  onChange={toggleRequiredDetails}
                />
              }
              label="Email"
            />
            <FormControlLabel
              control={
                <Switch
                  color="primary"
                  name="phone_number"
                  checked={requiredDetails.phone_number}
                  onChange={toggleRequiredDetails}
                />
              }
              label="Phone Number"
            />
          </div>
        </div>
      </FormGroup>

      <div className="button-wrapper">
        <Button onClick={handleGetDetails}>Get Details</Button>
      </div>
    </div>
  );
};

export default GetStudentDetails;
