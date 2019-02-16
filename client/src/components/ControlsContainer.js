import { connect } from 'react-redux';
import ControlsComponent from './Controls';
import { sendMove } from '../actions';

const mapDispatchToProps = dispatch => ({
  dispatch: (action, player) => {
    dispatch(sendMove(action, player));
  }
});

export const Controls = connect(
  () => ({}),
  mapDispatchToProps
)(ControlsComponent);
