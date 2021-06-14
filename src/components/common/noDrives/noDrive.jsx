import React from 'react';

import './style.scss';
import noDataImg from '../../../assets/noData.svg';

const NoDrives = () => {
  return (
    <div className="no-drives">
      <img src={noDataImg} alt="no content available" className="no-content-img" />
      <div className="content">
        <h5 className="heading-5">Sorry.. There are no new active drives</h5>
        <h5 className="heading-5">Try after some time 😊</h5>
      </div>
    </div>
  );
};

export default NoDrives;
