import React from 'react';
import { BUTTONS_CONFIG } from '../../config';

const Buttons = props => (
  <div className="controls__buttons">
    {BUTTONS_CONFIG.map((button, index) => (
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
