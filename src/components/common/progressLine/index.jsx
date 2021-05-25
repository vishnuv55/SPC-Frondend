import React, { useEffect, useState } from 'react';

import './style.scss';

const ProgressLine = ({ label, percentage }) => {
  const [widths, setWidths] = useState(0);

  useEffect(() => {
    requestAnimationFrame(() => setWidths(percentage));
  }, [percentage]);

  return (
    <section className="progress-line">
      <span className="progress-line__label">{`${label}`}</span>
      <div className="progress-line__outer">
        <div
          style={{
            width: widths,
          }}
          className="progress-line__inner"
        />
      </div>
    </section>
  );
};

export default ProgressLine;
