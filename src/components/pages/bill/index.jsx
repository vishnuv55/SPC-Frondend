import React, { useEffect, useState } from 'react';

import { FiPlus } from 'react-icons/fi';
import { useSetRhinoState } from 'react-rhino';

import './style.scss';
import BillCard from './BillCard';
import Modal from '../../utils/modal';
import Loading from '../../common/loading';
import ModalContent from './addBill/ModalContent';
import { getBills } from '../../../Services/user';
import NoDrives from '../../common/noDrives/noDrive';
import useApiError from '../../../hooks/useApiError';

const Bill = ({ userType }) => {
  const [bills, setBills] = useState([]);
  const { handleApiError } = useApiError();
  const [open, setOpen] = useState(false);
  const setPageTitle = useSetRhinoState('pageTitle');
  const [loading, setLoading] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  useEffect(() => {
    fetchBills();
    setPageTitle('Bill Management');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [setPageTitle]);
  const fetchBills = async () => {
    setLoading(true);
    try {
      const res = await getBills(userType);
      setBills(res.data);
      setLoading(false);
    } catch (err) {
      handleApiError(err);
      setLoading(false);
    }
  };
  if (loading) {
    return <Loading />;
  }
  if (bills.length === 0) {
    return (
      <div className="no-drive-container">
        <NoDrives />
        <div className="bill-wrapper">
          <button type="button" className="new-bill-button" onClick={handleOpen}>
            <FiPlus className="icon" />
          </button>
          <Modal open={open} handleClose={handleClose}>
            <ModalContent handleClose={handleClose} userType={userType} fetchBills={fetchBills} />
          </Modal>
        </div>
      </div>
    );
  }
  return (
    <div className="bill-wrapper">
      <div className="bills">
        {bills.map((item) => {
          return (
            <BillCard key={item.date} bill={item} userType={userType} fetchBills={fetchBills} />
          );
        })}
      </div>
      <button type="button" className="new-bill-button" onClick={handleOpen}>
        <FiPlus className="icon" />
      </button>
      <Modal open={open} handleClose={handleClose}>
        <ModalContent handleClose={handleClose} userType={userType} fetchBills={fetchBills} />
      </Modal>
    </div>
  );
};

export default Bill;
