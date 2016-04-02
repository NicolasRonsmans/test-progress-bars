import { connect } from 'react-redux';
import ProgressBars from '../views/ProgressBars';

const mapStateToProps = store => ({
  progressBars: store.progressBars,
});

export default connect(
  mapStateToProps
)(ProgressBars);
