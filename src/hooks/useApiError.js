import { useRhinoState } from '../config/context';

/**
 *
 * Custom hooks to handle api errors
 *
 * @returns {Array} Array containing errorMsg and handleApiError function respectively.
 */
const useApiError = () => {
  const [apiError, setApiError] = useRhinoState('apiError');

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
    setApiError(errMsg);
  };
  return { apiError, handleApiError };
};

export default useApiError;
