import React, { useState } from 'react';
import { useSetRhinoState } from 'react-rhino';

import './billForm.scss';
import Button from '../../../common/button';
import TextArea from '../../../utils/textArea';
import useForm from '../../../../hooks/useForm';
import TextInput from '../../../utils/textInput';
import DateInput from '../../../utils/dateInput';
import NumberInput from '../../../utils/numberInput';
import { createBill } from '../../../../Services/user';
import useApiError from '../../../../hooks/useApiError';

const BillForm = ({ handleClose, userType, fetchBills }) => {
  const setToastMessage = useSetRhinoState('toastMessage');
  const { handleApiError } = useApiError();
  const [buttonLoading, setButtonLoading] = useState(false);

  const { values, onChange, error, handleError } = useForm({
    billTitle: '',
    billDate: '',
    billAmount: '',
    billDescription: '',
  });

  const handleAddBill = async () => {
    const isValuesEmpty = Object.values(values).some((value) => value === '');
    const isError = Object.values(error).some((err) => err !== '');
    const newBill = {
      bill_title: values.billTitle,
      bill_amount: parseInt(values.billAmount, 10),
      bill_date: values.billDate,
      bill_description: values.billDescription,
    };
    if (isError) {
      setToastMessage({
        severity: 'error',
        message: 'Invalid data found',
      });
    } else if (isValuesEmpty) {
      setToastMessage({
        severity: 'error',
        message: 'Please fill up all fields',
      });
    } else {
      setButtonLoading(true);
      try {
        await createBill(userType, newBill);
        setToastMessage({
          severity: 'success',
          message: 'Bill added successfully',
        });
        fetchBills();
        setButtonLoading(false);
        handleClose();
      } catch (err) {
        handleApiError(err);
        setButtonLoading(false);
      }
    }
  };
  return (
    <div className="bill-form">
      <div className="bill-input-wrapper">
        <div className="bill-form-col-1">
          <TextInput
            label="Bill Title"
            id="billTitle"
            name="billTitle"
            value={values.billTitle}
            errorMsg={error.billTitle}
            onChange={onChange}
            setErrorMsg={handleError}
          />
          <NumberInput
            label="Bill Amount"
            id="billAmount"
            name="billAmount"
            value={values.billAmount}
            errorMsg={error.billAmount}
            onChange={onChange}
            setErrorMsg={handleError}
          />
          <DateInput
            label="Bill Date"
            id="billDate"
            name="billDate"
            value={values.billDate}
            errorMsg={error.billDate}
            onChange={onChange}
            setErrorMsg={handleError}
          />
        </div>
        <div className="bill-form-col-2">
          <TextArea
            id="billDescription"
            label="Bill Description"
            name="billDescription"
            value={values.billDescription}
            onChange={onChange}
            errorMsg={error.billDescription}
            setErrorMsg={handleError}
            rows="8"
          />
        </div>
      </div>

      <div className="bill-button-wrapper">
        <Button onClick={handleAddBill} loading={buttonLoading}>
          Add Bill
        </Button>
      </div>
    </div>
  );
};

export default BillForm;
