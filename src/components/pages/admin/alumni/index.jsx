import React from 'react';
import './style.scss';
import CreateAlumni from './CreateAlumni';
import DownloadAlumni from './DownloadAlumni';

const Alumni = () => {
  return (
    <div className="alumni-wrapper">
      <CreateAlumni />
      <DownloadAlumni />
    </div>
  );
};

export default Alumni;
