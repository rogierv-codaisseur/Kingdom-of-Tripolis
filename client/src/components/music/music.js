import React from 'react'
import ReactHowler from 'react-howler'
// import Button from '../button/button'

class Music extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      playing: true
    }
    this.handlePlay = this.handlePlay.bind(this)
    this.handlePause = this.handlePause.bind(this)
  }

  handlePlay () {
    this.setState({
      playing: true
    })
  }

  handlePause () {
    this.setState({
      playing: false
    })
  }

  render () {
    return (
      <div>
        <ReactHowler
          src={['intro.mp3']}
          playing={this.state.playing}
        />
        <button onClick={this.handlePlay}>Play</button>
        <button onClick={this.handlePause}>Pause</button>
      </div>
    )
  }
}



export default Music


// render () {
//   return (
//     <ReactHowler
//       src='http://goldfirestudios.com/proj/howlerjs/sound.ogg'
//       playing={true}
//     />
//   )
// }

