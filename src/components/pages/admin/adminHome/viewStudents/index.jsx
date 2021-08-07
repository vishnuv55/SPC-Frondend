/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState } from 'react';

import { FiAward } from 'react-icons/fi';

import './style.scss';
import Button from '../../../../common/button';
import useForm from '../../../../../hooks/useForm';
import NumberInput from '../../../../utils/numberInput';
import BranchInput from '../../../../utils/branchInput';
import StudentDetailsTable from './StudentDetailsTable';
import useApiError from '../../../../../hooks/useApiError';
import { getStudentsData } from '../../../../../Services/admin';
import { useSetRhinoState } from '../../../../../config/context';

const ViewStudents = () => {
  const { values, onChange, error, handleError } = useForm({
    branch: '',
    pass_out_year: '',
  });

  const setToastMessage = useSetRhinoState('toastMessage');

  const [buttonLoading, setButtonLoading] = useState(false);

  const [students, setStudents] = useState([]);

  const { handleApiError } = useApiError();

  const getStudentsDetails = async () => {
    const isValuesEmpty = Object.values(values).some((value) => value === '');
    const isError = Object.values(error).some((err) => err !== '');
    const studentDetails = {
      ...values,
      pass_out_year: parseInt(values.pass_out_year, 10),
    };

    if (!isValuesEmpty && !isError) {
      setButtonLoading(true);
      try {
        const response = await getStudentsData(studentDetails);
        setStudents(response.data);
        setButtonLoading(false);
      } catch (err) {
        handleApiError(err);
        setButtonLoading(false);
        setStudents([]);
      }
    } else {
      setToastMessage({
        severity: 'Error',
        message: 'Please fill all the fields',
      });
    }
  };

  return (
    <div className="view-student-details">
      <h5 className="heading-5">
        <FiAward className="icon" />
        View Students Details
      </h5>
      <div className="view-students-form">
        <BranchInput value={values.branch} onChange={onChange} />
        <NumberInput
          id="passOutYear"
          label="Pass Out Year"
          name="pass_out_year"
          value={values.pass_out_year}
          onChange={onChange}
          errorMsg={error.pass_out_year}
          setErrorMsg={handleError}
        />
        <div className="button-container">
          <Button onClick={getStudentsDetails} loading={buttonLoading}>
            View
          </Button>
        </div>
      </div>
      {students.length !== 0 ? (
        <StudentDetailsTable students={students} getStudentsDetails={getStudentsDetails} />
      ) : null}
    </div>
  );
};

export default ViewStudents;
