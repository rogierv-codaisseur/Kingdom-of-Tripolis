import { connect } from 'react-redux';
import ControlsComponent from './Controls';
import { sendMove } from '../actions';

const mapDispatchToProps = dispatch => ({
  dispatch: (direction, player) => {
    dispatch(sendMove(direction, player));
  }
});

export const Controls = connect(
  () => ({}),
  mapDispatchToProps
)(ControlsComponent);
