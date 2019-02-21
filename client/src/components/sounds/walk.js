import React from 'react'
import ReactHowler from 'react-howler'

class Walk extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      playing: false
    }
    this.handlePlay = this.handlePlay.bind(this)
  }

  handlePlay (event) {
    this.setState({
      playing: true
    })
  }

  render () {
    return (
      <div>
        <ReactHowler
          src={['walk.wav']}
          playing={this.state.playing}
        />
        <img 
          className="controlButtons" 
          src="feet.png" 
          onKeyDown={this.handlePlay} 
          alt="Play"
          tabIndex="0"
          />
      </div>
    )
  }
}


export default Walk


