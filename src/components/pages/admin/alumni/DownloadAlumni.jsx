import React, { useState } from 'react';
import './downloadAlumni.scss';
import { FiDownload } from 'react-icons/fi';
import { jsonToCSV } from 'react-papaparse';
import useApiError from '../../../../hooks/useApiError';
import { getAlumni } from '../../../../Services/admin';
import Button from '../../../common/button';

const DownloadAlumni = () => {
  const { handleApiError } = useApiError();
  const [buttonLoading, setButtonLoading] = useState(false);

  const generateCsvFile = async (data) => {
    const csv = await jsonToCSV(data);
    const csvData = new Blob([csv], { type: 'text/csv;charset=utf-8;' });

    const csvURL = window.URL.createObjectURL(csvData);

    const testLink = document.createElement('a');
    testLink.href = csvURL;
    testLink.setAttribute('download', 'AlumniDetails.csv');
    testLink.click();
  };
  const handleDownload = async () => {
    setButtonLoading(true);
    try {
      const alumni = await getAlumni();
      generateCsvFile(alumni);
      setButtonLoading(false);
    } catch (error) {
      handleApiError(error);
      setButtonLoading(false);
    }
  };
  return (
    <div className="download-alumni">
      <div className="heading">
        <FiDownload className="icon" />
        <h3 className="heading-5"> Download Alumni Details </h3>
      </div>
      <div className="display-text">
        <p className="paragraph">
          The entire alumni details in the database will be downloaded by clicking below button.
        </p>
      </div>
      <div className="button-wrapper">
        <Button onClick={handleDownload} loading={buttonLoading}>
          Download
        </Button>
      </div>
    </div>
  );
};

export default DownloadAlumni;
