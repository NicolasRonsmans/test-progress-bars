import { connect } from 'react-redux';
import * as actions from '../../actions';
import Select from '../views/Select';

const mapStateToProps = store => ({
  selectedBar: store.selectedBar,
  progressBars: store.progressBars,
});

const mapDispatchToProps = dispatch => ({
  selectBar: e => {
    dispatch({
      type: actions.SELECT_BAR,
      value: parseInt(e.target.value, 10),
    });
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Select);
