import { connect } from 'react-redux';
import PlayersList from './list';

const mapStateToProps = state => {
  return {
    players: state.players
  };
};

export default connect(mapStateToProps)(PlayersList);
