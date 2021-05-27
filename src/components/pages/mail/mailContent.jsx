/* eslint-disable react/button-has-type */
import { Button } from '@material-ui/core';
import React, { useState } from 'react';

import { FiSend } from 'react-icons/fi';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { useSetRhinoState } from '../../../config/context';
import { sendEmail } from '../../../Services/user';
import TextInput from '../../utils/textInput';
import useApiError from '../../../hooks/useApiError';

const MailContent = ({ values, error, checkboxValues, onChange, handleError, userType }) => {
  const setToastMessage = useSetRhinoState('toastMessage');
  const [content, setContent] = useState('');
  const { handleApiError } = useApiError();

  const sendMail = async () => {
    const isError = Object.values(error).some((err) => err !== '');

    const genderList = [
      ...(checkboxValues.male ? ['male'] : ''),
      ...(checkboxValues.female ? ['female'] : ''),
      ...(checkboxValues.others ? ['other'] : ''),
    ];

    const branchList = [
      ...(checkboxValues.CSE ? ['CSE'] : ''),
      ...(checkboxValues.ECE ? ['ECE'] : ''),
      ...(checkboxValues.EEE ? ['EEE'] : ''),
    ];

    if (isError) {
      setToastMessage({
        severity: 'error',
        message: 'Invalid data found',
      });
    } else if (branchList.length === 0) {
      setToastMessage({
        severity: 'error',
        message: 'Choose at least one branch ',
      });
    } else if (genderList.length === 0) {
      setToastMessage({
        severity: 'error',
        message: 'Choose at lease one gender',
      });
    } else if (content === '' || values.subject === '') {
      setToastMessage({
        severity: 'error',
        message: 'Mail must include subject and content',
      });
    } else {
      const data = {
        ...(values.tenth_percentage !== '' && { tenth_mark: values.tenth_percentage }),
        ...(values.twelfth_percentage !== '' && { plus_two_mark: values.twelfth_percentage }),
        ...(values.number_of_backlogs !== '' && { number_of_backlogs: values.number_of_backlogs }),
        ...(values.btech_cgpa !== '' && { btech_cgpa: values.btech_cgpa }),
        branch_list: branchList,
        gender_list: genderList,
        subject: values.subject,
        content,
      };

      try {
        const response = await sendEmail(userType, data);
        setToastMessage({
          severity: 'success',
          message: `Mail has been successfully send to ${response.data.accepted}`,
        });
      } catch (err) {
        handleApiError(err);
      }
    }
  };

  return (
    <div className="mail-content">
      <h5 className="heading-5">
        <FiSend className="icon" /> Message
      </h5>
      <TextInput
        label="subject"
        id="subject"
        name="subject"
        value={values.subject}
        errorMsg={error.subject}
        onChange={onChange}
        setErrorMsg={handleError}
      />
      <ReactQuill theme="snow" value={content} onChange={setContent} className="quill-editor" />
      <div className="send-button-container">
        <Button className="send-button" onClick={sendMail}>
          Send Mail
        </Button>
      </div>
    </div>
  );
};

export default MailContent;
