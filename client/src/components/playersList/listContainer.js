import * as React from 'react';
import { connect } from 'react-redux';
import PlayersList from './list';

class PlayersListContainer extends React.Component {
  render() {
    return <PlayersList players={this.props.players} />;
  }
}

const mapStateToProps = state => {
  return {
    players: state.players
  };
};

export default connect(mapStateToProps)(PlayersListContainer);
