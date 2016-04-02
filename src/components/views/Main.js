import React from 'react';
import ProgressBarsContainer from '../containers/ProgressBarsContainer';
import SelectContainer from '../containers/SelectContainer';
import ButtonsContainer from '../containers/ButtonsContainer';
import '../styles/Main.scss';

const Main = () => (
  <div className="container">
    <h1>Progress Bar Demo</h1>
    <ProgressBarsContainer />
    <div className="controls">
      <SelectContainer />
      <ButtonsContainer />
    </div>
  </div>
);

export default Main;
