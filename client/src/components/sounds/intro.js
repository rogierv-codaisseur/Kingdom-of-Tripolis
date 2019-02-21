import React from 'react';
import ReactHowler from 'react-howler';

class Intro extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      playing: false
    };
    this.handlePlay = this.handlePlay.bind(this);
    this.handlePause = this.handlePause.bind(this);
  }

  handlePlay() {
    this.setState({
      playing: true
    });
  }

  handlePause() {
    this.setState({
      playing: false
    });
  }

  render() {
    return (
      <div className="buttonsDiv">
        <ReactHowler src={['intro.mp3']} playing={this.state.playing} />
        {/* <button onClick={this.handlePlay}>Play</button>
        <button onClick={this.handlePause}>Pause</button> */}

        <img className="controlButtons" src="play.png" onClick={this.handlePlay} alt="Play" />
        <img className="controlButtons" src="pause.png" onClick={this.handlePause} alt="Pause" />
      </div>
    );
  }
}

export default Intro;
