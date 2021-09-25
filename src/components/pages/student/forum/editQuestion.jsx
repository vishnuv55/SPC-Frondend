/* eslint-disable no-underscore-dangle */
import React, { useState, useEffect } from 'react';
import { useSetRhinoState } from 'react-rhino';

import { FiEdit } from 'react-icons/fi';

import Modal from '../../../utils/modal';
import Button from '../../../common/button';
import useForm from '../../../../hooks/useForm';
import TextInput from '../../../utils/textInput';
import useApiError from '../../../../hooks/useApiError';
import { editQuestion } from '../../../../Services/student';

const EditQuestion = ({ studentId, query, getForumQueries }) => {
  const { values, setValues, onChange, error, handleError } = useForm({
    question: '',
  });

  useEffect(() => {
    setValues({ question: query.question.question });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query.question]);

  const [buttonLoading, setButtonLoading] = useState(false);

  const [open, setOpen] = useState(false);

  const setToastMessage = useSetRhinoState('toastMessage');

  const { handleApiError } = useApiError();

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const submitQuestion = async () => {
    if (values.question === '') {
      setToastMessage({
        severity: 'error',
        message: 'Enter a question',
      });
    } else if (error.question === '') {
      const reqData = {
        id: query._id,
        question: values.question,
      };
      setButtonLoading(true);
      try {
        await editQuestion(reqData);
        setToastMessage({
          severity: 'success',
          message: 'Question posted successfully',
        });
        setButtonLoading(false);
        handleClose();
        getForumQueries();
      } catch (err) {
        handleApiError(err);
        setButtonLoading(false);
      }
    }
  };
  return (
    <div>
      {studentId === query.question.student_id ? (
        <button onClick={handleOpen} className="edit-question-button" type="button">
          <FiEdit className="icon" />
        </button>
      ) : null}
      <Modal open={open} handleClose={handleClose}>
        <div className="edit-question-modal">
          <h4 className="heading-5">Edit question</h4>
          <div className="question-content">
            <TextInput
              id="question"
              label="question"
              name="question"
              value={values.question}
              onChange={onChange}
              errorMsg={error.question}
              setErrorMsg={handleError}
            />
            <div className="button-container">
              <button type="button" className="cancel-button" onClick={handleClose}>
                Cancel
              </button>
              <Button loading={buttonLoading} onClick={submitQuestion}>
                Update
              </Button>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default EditQuestion;
