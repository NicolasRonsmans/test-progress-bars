import React, { Component } from 'react';

const Select = props => (
  <select
    className="controls__select"
    defaultValue={props.selectedBar}
    onChange={props.selectBar}>
      {props.progressBars.map((progressBar, index) => (
        <option
          key={index}
          value={index}>
            {`#progress${(index + 1)}`}
        </option>
      ))}
  </select>
);

export default Select;
