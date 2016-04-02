import React from 'react';

const PprogressBar = props => {
  const progress = props.progress;
  const overLimit = progress > 100;

  return (
    <div className={`progress-bar ${overLimit ? 'progress-bar--overlimit' : ''}`}>
      <div
        className="progress-bar__gauge"
        style={{ width: `${overLimit ? 100 : progress}%` }} />
      <div className="progress-bar__indicator">
        {`${progress}%`}
      </div>
    </div>
  );
};

export default PprogressBar;
