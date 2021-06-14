/* eslint-disable react/button-has-type */
import React, { useState } from 'react';

import { Button } from '@material-ui/core';
import TextInput from '../../../../utils/textInput';
import useForm from '../../../../../hooks/useForm';
import EmailInput from '../../../../utils/emailInput';
import DateInput from '../../../../utils/dateInput';
import NumberInput from '../../../../utils/numberInput';
import GenderCheckboxInput from '../../../../utils/genderCheckboxInput';
import { useSetRhinoState } from '../../../../../config/context';
import useApiError from '../../../../../hooks/useApiError';
import TextArea from '../../../../utils/textArea';
import { addNewDrive } from '../../../../../Services/admin';

const DriveForm = ({ handleClose }) => {
  const { values, onChange, error, handleError } = useForm({
    company_name: '',
    position: '',
    description: '',
    email: '',
    drive_date: '',
    location: '',
    url: '',
    salary: '',
    tenth_percentage: '',
    tenth_cgpa: '',
    twelfth_percentage: '',
    twelfth_cgpa: '',
    btech_cgpa: '',
    number_of_backlogs: '',
  });

  const [preferredGender, setPreferredGender] = useState({
    male: true,
    female: true,
    others: true,
  });

  const setReload = useSetRhinoState('reload');

  const setToastMessage = useSetRhinoState('toastMessage');

  const { handleApiError } = useApiError();

  const handleCheckboxChange = (e) => {
    setPreferredGender((prevPreferredGender) => {
      return {
        ...prevPreferredGender,
        [e.target.name]: e.target.checked,
      };
    });
  };

  const addDrive = async () => {
    const isValuesEmpty = Object.values(values).some((value) => value === '');
    const isError = Object.values(error).some((err) => err !== '');
    if (isValuesEmpty) {
      setToastMessage({
        severity: 'error',
        message: 'Please fill up all fields',
      });
    } else if (isError) {
      setToastMessage({
        severity: 'error',
        message: 'Invalid data found',
      });
    } else if (values.newPassword !== values.confirmPassword) {
      setToastMessage({
        severity: 'error',
        message: 'Confirm password and New password must be same',
      });
    } else {
      try {
        const data = {
          company_name: values.company_name,
          position: values.position,
          description: values.description,
          contact_email: values.email,
          drive_date: values.drive_date,
          location: values.location,
          url: values.url,
          salary: values.salary,
          requirements: {
            gender: [
              ...(preferredGender.male ? ['male'] : ''),
              ...(preferredGender.female ? ['female'] : ''),
              ...(preferredGender.others ? ['other'] : ''),
            ],
            tenth_mark: {
              percentage: parseInt(values.tenth_percentage, 10),
              cgpa: parseInt(values.tenth_cgpa, 10),
            },
            plus_two_mark: {
              percentage: parseInt(values.twelfth_percentage, 10),
              cgpa: parseInt(values.twelfth_cgpa, 10),
            },
            btech_min_cgpa: parseInt(values.btech_cgpa, 10),
            number_of_backlogs: parseInt(values.number_of_backlogs, 10),
          },
        };
        await addNewDrive(data);
        setToastMessage({
          severity: 'Success',
          message: 'Drive successfully created',
        });
        setReload((prevReload) => !prevReload);
        handleClose();
      } catch (err) {
        handleApiError(err);
      }
    }
  };

  return (
    <>
      <div className="drive-form">
        <h5 className="heading-6">Company Information</h5>
        <div className="row">
          <TextInput
            id="company_name"
            label="Company Name"
            name="company_name"
            value={values.company_name}
            onChange={onChange}
            errorMsg={error.company_name}
            setErrorMsg={handleError}
          />
          <TextInput
            id="position"
            label="Position"
            name="position"
            value={values.position}
            onChange={onChange}
            errorMsg={error.position}
            setErrorMsg={handleError}
          />
        </div>
        <div className="row row-2">
          <div className="textarea-container">
            <TextArea
              id="description"
              label="Description"
              name="description"
              value={values.description}
              onChange={onChange}
              errorMsg={error.description}
              setErrorMsg={handleError}
              rows="5"
            />
          </div>
          <div className="email-url-container">
            <EmailInput
              label="Email"
              name="email"
              email={values.email}
              errorMsg={error.email}
              setErrorMsg={handleError}
              onChange={onChange}
            />
            <TextInput
              id="url"
              label="WebsiteURL"
              name="url"
              value={values.url}
              onChange={onChange}
              errorMsg={error.url}
              setErrorMsg={handleError}
            />
          </div>
        </div>
        <div className="row">
          <DateInput
            id="drive_date"
            label="Drive Date"
            name="drive_date"
            value={values.drive_date}
            onChange={onChange}
            errorMsg={error.drive_date}
            setErrorMsg={handleError}
          />
          <TextInput
            id="location"
            label="Location"
            name="location"
            value={values.location}
            onChange={onChange}
            errorMsg={error.location}
            setErrorMsg={handleError}
          />
        </div>
        <TextInput
          id="salary"
          label="Salary"
          name="salary"
          value={values.salary}
          onChange={onChange}
          errorMsg={error.salary}
          setErrorMsg={handleError}
        />
        <h5 className="heading-6">Requirements</h5>
        <p className="paragraph">
          This information will be used to choose the students who should see this drive info.
        </p>
        <div className="row">
          <NumberInput
            id="tenth_percentage"
            label="10th Percentage"
            name="tenth_percentage"
            value={values.tenth_percentage}
            onChange={onChange}
            errorMsg={error.tenth_percentage}
            setErrorMsg={handleError}
          />
          <NumberInput
            id="tenth_cgpa"
            label="10th CGPA"
            name="tenth_cgpa"
            value={values.tenth_cgpa}
            onChange={onChange}
            errorMsg={error.tenth_cgpa}
            setErrorMsg={handleError}
          />
        </div>
        <div className="row">
          <NumberInput
            id="twelfth_percentage"
            label="12th Percentage"
            name="twelfth_percentage"
            value={values.twelfth_percentage}
            onChange={onChange}
            errorMsg={error.twelfth_percentage}
            setErrorMsg={handleError}
          />
          <NumberInput
            id="twelfth_cgpa"
            label="12th CGPA"
            name="twelfth_cgpa"
            value={values.twelfth_cgpa}
            onChange={onChange}
            errorMsg={error.twelfth_cgpa}
            setErrorMsg={handleError}
          />
        </div>
        <div className="row">
          <NumberInput
            id="btech_min_cgpa"
            label="B-Tech CGPA"
            name="btech_cgpa"
            value={values.btech_cgpa}
            onChange={onChange}
            errorMsg={error.btech_cgpa}
            setErrorMsg={handleError}
          />
          <NumberInput
            id="number_of_backlogs"
            label="Number of backlogs"
            name="number_of_backlogs"
            value={values.number_of_backlogs}
            onChange={onChange}
            errorMsg={error.number_of_backlogs}
            setErrorMsg={handleError}
          />
        </div>
        <GenderCheckboxInput values={preferredGender} onChange={handleCheckboxChange} />
      </div>
      <div className="button-container">
        <Button className="button" onClick={addDrive}>
          Add Drive
        </Button>
      </div>
    </>
  );
};

export default DriveForm;
