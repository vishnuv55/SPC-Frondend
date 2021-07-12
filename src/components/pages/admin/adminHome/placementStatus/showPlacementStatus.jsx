/* eslint-disable no-underscore-dangle */
import React, { useState } from 'react';
import Modal from '../../../../utils/modal';
import useApiError from '../../../../../hooks/useApiError';
import { getPlacementInfo } from '../../../../../Services/admin';
import Button from '../../../../common/button';

const ShowPlacementStatus = () => {
  const [buttonLoading, setButtonLoading] = useState(false);

  const [open, setOpen] = useState(false);

  const [placementInfo, setPlacementInfo] = useState([]);

  const { handleApiError } = useApiError();

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const showStatus = async () => {
    try {
      setButtonLoading(true);
      const response = await getPlacementInfo();
      setPlacementInfo(response.data);
      setButtonLoading(false);
      handleOpen();
    } catch (err) {
      handleApiError(err);
      setButtonLoading(false);
    }
  };

  return (
    <>
      <div className="view-button-container">
        <Button type="button" onClick={showStatus} className="view-button" loading={buttonLoading}>
          View Placement Details
        </Button>
      </div>
      <Modal open={open} handleClose={handleClose}>
        <div className="show-placement-details-modal">
          <h5 className="heading-5">Placement Info</h5>
          <table className="table">
            <tr>
              <th>Year</th>
              <th>No of Placements</th>
            </tr>
            {placementInfo.map((item) => (
              <tr className="table-row" key={item._id}>
                <td className="column">{item._id}</td>
                <td>{item.Placements}</td>
              </tr>
            ))}
          </table>
          <div className="footer">
            <button type="button" className="cancel-button" onClick={handleClose}>
              Cancel
            </button>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default ShowPlacementStatus;
