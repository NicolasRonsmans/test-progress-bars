import React from 'react';
import ProgressBar from './ProgressBar';

const PprogressBars = props => (
  <div className="progress-bars">
    {props.progressBars.map((progress, index) => (
      <ProgressBar
        key={index}
        progress={progress} />
    ))}
  </div>
);

export default PprogressBars;
