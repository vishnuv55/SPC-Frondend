import React, { useState } from 'react';

import { FiPlus } from 'react-icons/fi';
import useForm from '../../../../hooks/useForm';
import Modal from '../../../utils/modal';
import TextInput from '../../../utils/textInput';
import Button from '../../../common/button';
import { askQuestion } from '../../../../Services/student';
import useApiError from '../../../../hooks/useApiError';
import { useSetRhinoState } from '../../../../config/context';

const AddNewQuestion = ({ getForumQueries }) => {
  const { values, onChange, error, handleError } = useForm({
    question: '',
  });

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
      setButtonLoading(true);
      try {
        await askQuestion(values);
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
      <button type="button" className="new-question-button" onClick={handleOpen}>
        <FiPlus className="icon" />
      </button>
      <Modal open={open} handleClose={handleClose}>
        <div className="add-question-modal">
          <h4 className="heading-5">Add a new question</h4>
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
                Ask Question
              </Button>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default AddNewQuestion;
