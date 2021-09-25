import React, { useState } from 'react';

import { FiUserPlus } from 'react-icons/fi';
import { useSetRhinoState } from 'react-rhino';

import Button from '../../../common/button';
import useForm from '../../../../hooks/useForm';
import TextInput from '../../../utils/textInput';
import EmailInput from '../../../utils/emailInput';
import BranchInput from '../../../utils/branchInput';
import NumberInput from '../../../utils/numberInput';
import useApiError from '../../../../hooks/useApiError';
import { createStudent } from '../../../../Services/admin';

const CreateStudent = () => {
  const { values, onChange, error, handleError } = useForm({
    name: '',
    email: '',
    register_number: '',
    branch: '',
    pass_out_year: '',
  });

  const [buttonLoading, setButtonLoading] = useState(false);

  const { handleApiError } = useApiError();

  const setToastMessage = useSetRhinoState('toastMessage');

  const createNewStudent = async () => {
    const isValuesEmpty = Object.values(values).some((value) => value === '');
    const isError = Object.values(error).some((err) => err !== '');
    const studentDetails = {
      ...values,
      pass_out_year: parseInt(values.pass_out_year, 10),
    };

    if (!isValuesEmpty && !isError) {
      setButtonLoading(true);
      try {
        await createStudent(studentDetails);
        setToastMessage({
          severity: 'Success',
          message: 'Student account successfully created',
        });
        setButtonLoading(false);
      } catch (err) {
        handleApiError(err);
        setButtonLoading(false);
      }
    } else {
      setToastMessage({
        severity: 'Error',
        message: 'Please fill all the fields',
      });
    }
  };

  return (
    <div className="create-student">
      <h5 className="heading-5">
        <FiUserPlus className="icon" /> Create New Student Account
      </h5>
      <div>
        <TextInput
          id="name"
          label="Student Name"
          name="name"
          value={values.name}
          onChange={onChange}
          errorMsg={error.name}
          setErrorMsg={handleError}
        />
        <EmailInput
          label="Email"
          name="email"
          email={values.email}
          errorMsg={error.email}
          setErrorMsg={handleError}
          onChange={onChange}
        />
        <TextInput
          id="register-number"
          label="Register Number"
          name="register_number"
          value={values.register_number}
          onChange={onChange}
          errorMsg={error.register_number}
          setErrorMsg={handleError}
        />
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
          <Button onClick={createNewStudent} loading={buttonLoading}>
            Create Student
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CreateStudent;
