import React, { useState } from 'react';

import { FiAward } from 'react-icons/fi';
import Button from '../../../../common/button';
import TextInput from '../../../../utils/textInput';
import NumberInput from '../../../../utils/numberInput';
import useApiError from '../../../../../hooks/useApiError';
import { useSetRhinoState } from '../../../../../config/context';
import { updatePlacementDetails } from '../../../../../Services/student';

const PlacementDetails = ({ values, onChange, error, handleError }) => {
  const setToastMessage = useSetRhinoState('toastMessage');
  const { handleApiError } = useApiError();
  const [buttonLoading, setButtonLoading] = useState(false);

  const handleUpdate = async () => {
    const placementDetails = {
      placed_company: values.placed_company,
      ctc: parseInt(values.ctc, 10),
    };
    if (values.placed_company === '' || values.ctc === '') {
      setToastMessage({
        severity: 'Error',
        message: 'Please fill all the fields',
      });
    } else if (error.placed_company !== '' && error.ctc !== '') {
      setToastMessage({
        severity: 'Error',
        message: 'Invalid data found',
      });
    } else {
      try {
        setButtonLoading(true);
        await updatePlacementDetails(placementDetails);
        setToastMessage({
          severity: 'success',
          message: 'Placement Details update successful',
        });
        setButtonLoading(false);
      } catch (err) {
        handleApiError(err);
        setButtonLoading(false);
      }
    }
  };
  return (
    <div className="placement-form">
      <div className="heading-container">
        <FiAward className="icon" />
        <h5 className="heading-5">Placement Details</h5>
      </div>
      <p className="paragraph">Placement details cannot be removed once added</p>
      <TextInput
        id="placed_company"
        label="Placed Company"
        name="placed_company"
        value={values.placed_company}
        onChange={onChange}
        errorMsg={error.placed_company}
        setErrorMsg={handleError}
      />
      <NumberInput
        id="ctc"
        label="CTC"
        name="ctc"
        value={values.ctc}
        onChange={onChange}
        errorMsg={error.ctc}
        setErrorMsg={handleError}
      />
      <div className="button-wrapper">
        <Button onClick={handleUpdate} loading={buttonLoading}>
          Update
        </Button>
      </div>
    </div>
  );
};

export default PlacementDetails;
