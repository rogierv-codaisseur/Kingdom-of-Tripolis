import { connect } from 'react-redux';
import HomeScreen from './home';


const mapStateToProps = state => {
  return {
    players: state.players,
  };
};

export default connect(mapStateToProps)(HomeScreen);
 