import { useRhinoState } from 'react-rhino';

/**
 *
 * Custom hooks to handle api errors
 *
 * @returns {Array} Array containing errorMsg and handleApiError function respectively.
 */
const useApiError = () => {
  const [toastMessage, setToastMessage] = useRhinoState('toastMessage');

  const handleApiError = (err) => {
    let errMsg;

    if (err.response) {
      const errResponse = err.response.data;
      if (errResponse) {
        errMsg = errResponse.message;
      }
    } else if (err.request) {
      errMsg = 'Network error !!!';
    } else {
      errMsg = 'Oops some error occurred';
    }
    setToastMessage({
      severity: 'error',
      message: errMsg,
    });
  };
  return { toastMessage, handleApiError };
};

export default useApiError;
