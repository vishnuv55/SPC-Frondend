import React from 'react';
import './downloadAlumni.scss';
import { Button } from '@material-ui/core';
import { FiDownload } from 'react-icons/fi';
import { jsonToCSV } from 'react-papaparse';
import useApiError from '../../../../hooks/useApiError';
import { getAlumni } from '../../../../Services/admin';

const DownloadAlumni = () => {
  const { handleApiError } = useApiError();

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
    try {
      const alumni = await getAlumni();
      generateCsvFile(alumni);
    } catch (error) {
      handleApiError(error);
    }
  };
  return (
    <div className="download-alumni">
      <div className="heading">
        <FiDownload className="icon" />
        <h3 className="heading-4"> Download Alumni Details </h3>
      </div>
      <div className="display-text">
        <p className="paragraph"> Click the download button to download alumni details.</p>
      </div>
      <div className="button-wrapper">
        <Button onClick={handleDownload}> Download</Button>
      </div>
    </div>
  );
};

export default DownloadAlumni;
