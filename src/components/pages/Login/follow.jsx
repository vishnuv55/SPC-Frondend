/* eslint-disable jsx-a11y/alt-text */
import React from 'react';

import Gmail from '../../../assets/Gmail.svg';
import FaceBook from '../../../assets/Facebook.svg';
import LinkedIn from '../../../assets/LinkedIN.svg';

const Follow = () => {
  return (
    <div className="follow-us-container">
      <h5 className="heading-5">Follow Us</h5>
      <div className="follow-icons">
        <a href="http://" target="_blank" rel="noopener noreferrer" className="icon-link">
          <img src={FaceBook} className="icons" />
        </a>
        <a href="http://" target="_blank" rel="noopener noreferrer" className="icon-link">
          <img src={Gmail} className="icons" />
        </a>
        <a href="http://" target="_blank" rel="noopener noreferrer" className="icon-link">
          <img src={LinkedIn} className="icons" />
        </a>
      </div>
    </div>
  );
};

export default Follow;
