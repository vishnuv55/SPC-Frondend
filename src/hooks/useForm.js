import { useState } from 'react';

/**
 *
 * Custom hook to create controlled form component.
 *
 * @param {Object} initialState State object with name of each form input as keys and
 * corresponding initial state as values.
 * @return {Object} Object containing values, apiError, onChange function and handleError function.
 */
const useForm = (initialValues) => {
  const [values, setValues] = useState(initialValues);

  const [error, setError] = useState(initialValues);

  const onChange = (event) => {
    setValues((previousValues) => ({ ...previousValues, [event.target.name]: event.target.value }));
  };

  const handleError = (event, message) => {
    setError((previousValues) => ({ ...previousValues, [event.target.name]: message }));
  };

  return { values, onChange, error, handleError, setValues };
};

export default useForm;
