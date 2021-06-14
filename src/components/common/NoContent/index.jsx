import React from 'react';

import './style.scss';
import noDataImg from '../../../assets/noData.svg';

const NoContent = () => {
  return (
    <div className="no-content">
      <img src={noDataImg} alt="no content available" className="no-content-img" />
      <div className="content">
        <h5 className="heading-5">Sorry.. No content is currently available</h5>
        <h5 className="heading-5">Try after some time 😊</h5>
      </div>
    </div>
  );
};

export default NoContent;
