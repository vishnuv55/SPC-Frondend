import React, { useState } from 'react';
import './createAlumni.scss';
import { FiUpload } from 'react-icons/fi';
import { useSetRhinoState } from '../../../../config/context';
import useForm from '../../../../hooks/useForm';
import useApiError from '../../../../hooks/useApiError';
import NumberInput from '../../../utils/numberInput';
import { createAlumni } from '../../../../Services/admin';
import Button from '../../../common/button';

const CreateAlumni = () => {
  const { handleApiError } = useApiError();
  const setToastMessage = useSetRhinoState('toastMessage');
  const { values, onChange, error, handleError } = useForm({
    pass_out_year: '',
  });
  const [buttonLoading, setButtonLoading] = useState(false);
  const handleCreateAlumni = async () => {
    setButtonLoading(true);
    const passOutYear = {
      pass_out_year: parseInt(values.pass_out_year, 10),
    };
    if (values.pass_out_year === '') {
      setToastMessage({
        severity: 'error',
        message: 'Please fill up all fields',
      });
    } else if (error.pass_out_year !== '') {
      setToastMessage({
        severity: 'error',
        message: 'Invalid data found',
      });
    } else {
      try {
        await createAlumni(passOutYear);
        setToastMessage({
          severity: 'success',
          message: 'Alumni created successfully',
        });
        setButtonLoading(false);
      } catch (err) {
        handleApiError(err);
        setButtonLoading(false);
      }
    }
  };
  return (
    <div className="create-alumni">
      <div className="heading">
        <FiUpload className="icon" />
        <h5 className="heading-5">Change Student to Alumni</h5>
      </div>
      <div className="display-text">
        <p className="paragraph">
          Enter pass out year of students that need to be converted to alumni.
        </p>
      </div>
      <div className="input-form">
        <NumberInput
          label="Pass Out Year"
          name="pass_out_year"
          id="year"
          value={values.pass_out_year}
          onChange={onChange}
          errorMsg={error.pass_out_year}
          setErrorMsg={handleError}
        />
        <div className="button-wrapper">
          <Button
            className="create-alumni-button"
            loading={buttonLoading}
            onClick={handleCreateAlumni}
          >
            Create Alumni
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CreateAlumni;
