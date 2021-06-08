/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';

import Papa from 'papaparse';
import { Button } from '@material-ui/core';
import { useDropzone } from 'react-dropzone';
import { FiUploadCloud } from 'react-icons/fi';
import { createStudents } from '../../../../../Services/admin';
import { useSetRhinoState } from '../../../../../config/context';

const FileUpload = () => {
  const setToastMessage = useSetRhinoState('toastMessage');

  const { acceptedFiles, getRootProps, getInputProps } = useDropzone({
    maxFiles: 1,
    accept: 'text/csv',
  });

  const createNewStudents = async (studentData) => {
    try {
      await createStudents(studentData);
      setToastMessage({
        severity: 'success',
        message: 'Students created successfully',
      });
    } catch (error) {
      setToastMessage({
        severity: 'error',
        message: error.response?.data?.message
          ? error.response?.data?.message
          : 'Some error has occurred',
      });
    }
  };

  const [file] = acceptedFiles;
  const parse = async () => {
    const csvResult = [];
    if (file !== undefined) {
      try {
        Papa.parse(file, {
          dynamicTyping: true,
          step(result) {
            if (result.data.length === 5) {
              csvResult.push(result.data);
            }
          },
          complete(results) {
            createNewStudents(csvResult);
          },
        });
      } catch (error) {
        setToastMessage({
          severity: 'error',
          message: 'Error parsing the file',
        });
      }
    }
  };

  return (
    <div className="file-upload">
      <div {...getRootProps()} className="drag-and-drop">
        <input {...getInputProps()} />
        <div className="content">
          <div className="upload-icon">
            <FiUploadCloud className="icon" />
          </div>
          <div className="main-content">
            <p className="text">Drag and drop file.</p>
            <p className="text-or">OR</p>
            <p className="text">Click to add file.</p>
          </div>
          <p className="file-info">
            {file !== undefined
              ? `${file.path} - ${file.size} bytes`
              : 'File format : text/csv || maximum size : 2mb'}
          </p>
        </div>
      </div>
      <div className="button-container">
        <Button onClick={parse}>Create Accounts</Button>
      </div>
    </div>
  );
};

export default FileUpload;
