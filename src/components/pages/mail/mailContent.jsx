/* eslint-disable react/button-has-type */
import React, { useState } from 'react';
import { useSetRhinoState } from 'react-rhino';

import ReactQuill from 'react-quill';
import { FiSend } from 'react-icons/fi';
import 'react-quill/dist/quill.snow.css';

import Button from '../../common/button';
import TextInput from '../../utils/textInput';
import { sendEmail } from '../../../Services/user';
import useApiError from '../../../hooks/useApiError';

const MailContent = ({ values, error, checkboxValues, onChange, handleError, userType }) => {
  const setToastMessage = useSetRhinoState('toastMessage');
  const [content, setContent] = useState('');
  const [buttonLoading, setButtonLoading] = useState(false);
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
      setButtonLoading(true);
      const data = {
        ...(values.tenth_percentage !== '' && {
          tenth_mark: parseFloat(values.tenth_percentage, 10),
        }),
        ...(values.twelfth_percentage !== '' && {
          plus_two_mark: parseFloat(values.twelfth_percentage, 10),
        }),
        ...(values.number_of_backlogs !== '' && {
          number_of_backlogs: parseInt(values.number_of_backlogs, 10),
        }),
        ...(values.btech_cgpa !== '' && { btech_cgpa: parseFloat(values.btech_cgpa, 10) }),
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
        setButtonLoading(false);
      } catch (err) {
        handleApiError(err);
        setButtonLoading(false);
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
        <Button className="send-button" onClick={sendMail} loading={buttonLoading}>
          Send Mail
        </Button>
      </div>
    </div>
  );
};

export default MailContent;
