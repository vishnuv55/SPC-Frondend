import React, { useState } from 'react';
import { FiDownload } from 'react-icons/fi';
import { jsonToCSV } from 'react-papaparse';
import { useSetRhinoState } from '../../../../../config/context';
import useApiError from '../../../../../hooks/useApiError';
import useForm from '../../../../../hooks/useForm';
import { getPlacedStudents } from '../../../../../Services/admin';
import Button from '../../../../common/button';
import NumberInput from '../../../../utils/numberInput';
import './style.scss';

const PlacementStatus = () => {
  const { values, onChange, error, handleError } = useForm({
    pass_out_year: '',
  });

  const [buttonLoading, setButtonLoading] = useState(false);

  const { handleApiError } = useApiError();

  const setToastMessage = useSetRhinoState('toastMessage');

  const generateCsvFile = async (data) => {
    const csv = await jsonToCSV(data);
    const csvData = new Blob([csv], { type: 'text/csv;charset=utf-8;' });

    const csvURL = window.URL.createObjectURL(csvData);

    const testLink = document.createElement('a');
    testLink.href = csvURL;
    testLink.setAttribute('download', 'AlumniDetails.csv');
    testLink.click();
  };

  const downloadDetails = async () => {
    if (values.pass_out_year === '') {
      setToastMessage({
        severity: 'Error',
        message: 'Please Enter the pass out year',
      });
    } else if (error.pass_out_year === '') {
      const data = {
        pass_out_year: parseInt(values.pass_out_year, 10),
      };

      try {
        setButtonLoading(true);
        const studentInfo = await getPlacedStudents(data);

        if (studentInfo.data.length === 0) {
          setToastMessage({
            severity: 'warning',
            message: 'No Placed Students yet',
          });
        } else {
          generateCsvFile(studentInfo.data);
        }

        setButtonLoading(false);
      } catch (err) {
        handleApiError(err);
        setButtonLoading(false);
      }
    }
  };

  return (
    <div className="download-placement-info">
      <h5 className="heading-5">
        <FiDownload className="icon" />
        Download Placement Details
      </h5>
      <div className="form">
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
          <Button onClick={downloadDetails} loading={buttonLoading}>
            Download
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PlacementStatus;
