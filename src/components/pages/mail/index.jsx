import React, { useEffect } from 'react';

import './style.scss';
import SendMail from './sendMail';
import { useSetRhinoState } from '../../../config/context';

const Mail = ({ userType }) => {
  const setPageTitle = useSetRhinoState('pageTitle');

  useEffect(() => {
    setPageTitle('Send a new mail');
  }, [setPageTitle]);

  return (
    <div className="mail">
      <SendMail userType={userType} />
    </div>
  );
};

export default Mail;
