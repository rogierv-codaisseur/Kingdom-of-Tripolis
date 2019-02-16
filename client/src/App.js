import React, { Component } from 'react';
import socketIOClient from 'socket.io-client';

class App extends Component {
  state = {
    endpoint: 'http://localhost:4000',
    color: 'white'
  };

  render() {
    const socket = socketIOClient(this.state.endpoint);
    socket.on('move', _ => console.log('Move received from ', socket.id));

    return (
      <div>
        <button id='move' onClick={() => socket.emit('move')}>
          Move
        </button>
      </div>
    );
  }
}

export default App;
