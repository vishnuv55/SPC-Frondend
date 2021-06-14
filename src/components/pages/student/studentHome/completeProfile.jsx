import React from 'react';

import { Button } from '@material-ui/core';

import { useHistory } from 'react-router';
import noData from '../../../../assets/noData.svg';

const CompleteProfile = () => {
  const history = useHistory();

  const gotoProfile = () => {
    history.push('/student/profile');
  };

  return (
    <div className="complete-profile">
      <img src={noData} className="no-content-img" alt="No content" />
      <div className="content">
        <h5 className="heading-5">Complete your profile for viewing new drives</h5>
        <Button onClick={gotoProfile}>Profile</Button>
      </div>
    </div>
  );
};

export default CompleteProfile;
