import { connect } from 'react-redux';
import * as actions from '../../actions';
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

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Buttons);
