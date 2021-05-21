import React, { useEffect, useState } from 'react';
import { Button } from '@material-ui/core';
import { getBills } from '../../../Services/user';
import useApiError from '../../../hooks/useApiError';
import BillCard from './BillCard';
import './style.scss';

const Bill = ({ userType }) => {
  const [bills, setBills] = useState([]);
  const { handleApiError } = useApiError();
  useEffect(() => {
    fetchBills();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const fetchBills = async () => {
    try {
      const res = await getBills(userType);
      setBills(res.data);
    } catch (err) {
      handleApiError(err);
    }
  };
  return (
    <div className="bill-wrapper">
      <div className="bills">
        {bills.map((item) => {
          return <BillCard key={item.date} bill={item} />;
        })}
      </div>
      <Button
        onClick={() => {
          console.log(bills);
        }}
      >
        Click
      </Button>
    </div>
  );
};

export default Bill;
