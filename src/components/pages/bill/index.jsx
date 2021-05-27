import React, { useEffect, useState } from 'react';
import './style.scss';
import { FiPlus } from 'react-icons/fi';
import { getBills } from '../../../Services/user';
import useApiError from '../../../hooks/useApiError';
import BillCard from './BillCard';
import Modal from '../../utils/modal';
import ModalContent from './addBill/ModalContent';
import { useSetRhinoState } from '../../../config/context';
import Loading from '../../common/loading';

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
  return (
    <div className="bill-wrapper">
      <div className="bills">
        {bills.map((item) => {
          return <BillCard key={item.date} bill={item} userType={userType} />;
        })}
      </div>
      <button type="button" className="new-bill-button" onClick={handleOpen}>
        <FiPlus className="icon" />
      </button>
      <Modal open={open} handleClose={handleClose}>
        <ModalContent handleClose={handleClose} userType={userType} />
      </Modal>
    </div>
  );
};

export default Bill;
