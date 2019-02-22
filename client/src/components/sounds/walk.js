import React from 'react';
import ReactHowler from 'react-howler';

class Walk extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      playing: false
    };
    this.handlePlay = this.handlePlay.bind(this);
  }

  handlePlay() {
    this.setState({
      playing: true
    });
  }

  render() {
    const { playing } = this.state;
    return (
      <div>
        <ReactHowler src={['walk.wav']} playing={playing} />
        <img className="controlButtons" src="feet.png" onKeyDown={this.handlePlay} alt="Play" tabIndex="0" />
      </div>
    );
  }
}

export default Walk;
