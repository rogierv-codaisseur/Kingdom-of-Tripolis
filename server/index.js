const express = require('express');
const http = require('http');
const socketIO = require('socket.io');

const port = 4000;
const app = express();
const server = http.createServer(app);
const io = socketIO(server);

app.get('/', (req, res) => console.log('test'));

io.on('connection', socket => {
  console.log('New client connected', socket.id);

  socket.on('move', _ => {
    console.log('Server: move received from', socket.id);
    io.sockets.emit('move');
  });

  socket.on('disconnect', () => {
    console.log('Client disconnected', socket.id);
  });
});

server.listen(port, () => console.log(`Listening on ${port}`));
