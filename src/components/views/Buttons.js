import React from 'react';

const Buttons = props => (
  <div className="controls__buttons">
    {props.config.map((button, index) => (
      <button
        key={index}
        className="controls__button"
        onClick={props.updateProgress}
        data-value={button.value}>
          {button.text}
      </button>
    ))}
  </div>
);

export default Buttons;
