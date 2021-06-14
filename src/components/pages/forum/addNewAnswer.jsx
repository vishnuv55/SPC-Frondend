import React, { useState } from 'react';

import { FiArrowRight } from 'react-icons/fi';
import { useSetRhinoState } from '../../../config/context';
import useApiError from '../../../hooks/useApiError';
import useForm from '../../../hooks/useForm';
import { addQueryAnswer } from '../../../Services/user';
import Button from '../../common/button';
import Modal from '../../utils/modal';
import TextInput from '../../utils/textInput';

const AddNewAnswer = ({ id, userType, getForumQueries }) => {
  const { values, onChange, error, handleError } = useForm({
    answer: '',
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

  const submitAnswer = async () => {
    if (values.answer === '') {
      setToastMessage({
        severity: 'error',
        message: 'Enter an answer',
      });
    } else if (error.answer === '') {
      setButtonLoading(true);
      try {
        const reqData = {
          id,
          answer: values.answer,
        };
        await addQueryAnswer(userType, reqData);
        setToastMessage({
          severity: 'success',
          message: 'Answer posted successfully',
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
    <div className="new-answer">
      <button type="button" className="answer-button" onClick={handleOpen}>
        Answer <FiArrowRight className="icon" />
      </button>
      <Modal open={open} handleClose={handleClose}>
        <div className="add-answer-modal">
          <h4 className="heading-5">Add a new answer</h4>
          <div className="answer-content">
            <p className="paragraph">Adding a new answer will remove previous answer if any.</p>
            <TextInput
              id="answer"
              label="answer"
              name="answer"
              value={values.answer}
              onChange={onChange}
              errorMsg={error.answer}
              setErrorMsg={handleError}
            />
            <div className="button-container">
              <button type="button" className="cancel-button" onClick={handleClose}>
                Cancel
              </button>
              <Button loading={buttonLoading} onClick={submitAnswer}>
                Answer
              </Button>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default AddNewAnswer;
