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
        <button 
          // onClick={this.handlePlay}
          onKeyDown={this.handlePlay} 
          tabIndex="0"
        >Switch on Footsteps</button>
      </div>
    )
  }
}


export default Walk


