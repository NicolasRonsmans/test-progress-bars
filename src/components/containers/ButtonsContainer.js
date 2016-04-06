import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import { BUTTONS_CONFIG } from '../../config';
import Buttons from '../views/Buttons';

const mapStateToProps = store => ({
  selectedBar: store.selectedBar,
});

const mapDispatchToProps = dispatch => ({
  updateProgress: e => {
    dispatch({
      type: actions.UPDATE_PROGRESS,
      value: parseInt(e.target.getAttribute('data-value'), 10),
    });
  },
});

const ButtonsContainer = props => (
  <Buttons
    selectedBar={props.selectedBar}
    updateProgress={props.updateProgress}
    config={BUTTONS_CONFIG} />
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ButtonsContainer);
