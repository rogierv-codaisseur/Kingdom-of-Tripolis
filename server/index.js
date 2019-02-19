const WebSocket = require('ws');

const port = process.env.PORT || 4000;

const wss = new WebSocket.Server({ port });

const players = [];

const broadcast = (data, ws) => {
  wss.clients.forEach(client => {
    if (client.readyState === WebSocket.OPEN && client !== ws) {
      client.send(JSON.stringify(data));
    }
  });
};

wss.on('connection', ws => {
  let index;

  ws.on('message', message => {
    console.log(players);
    const data = JSON.parse(message);
    switch (data.type) {
      case 'ADD_PLAYER': {
        index = players.length;

        let highestId = Math.max.apply(Math, players.map(player => player.id));

        players.length === 0 ? (highestId = 0) : '';

        players.push({ name: data.name, id: index + 1 });

        ws.send(
          JSON.stringify({
            type: 'PLAYERS_LIST',
            players
          })
        );
        broadcast(
          {
            type: 'PLAYERS_LIST',
            players
          },
          ws
        );
        break;
      }
      case 'SEND_MOVE':
        broadcast(
          {
            type: 'SEND_MOVE',
            action: data.action,
            player: data.player,
            position: data.position,
            walkIndex: data.walkIndex,
            spriteLocation: data.spriteLocation
          },
          ws
        );
        break;
      case 'SEND_MOVE2':
        broadcast(
          {
            type: 'SEND_MOVE2',
            action: data.action,
            player: data.player,
            position: data.position,
            walkIndex: data.walkIndex,
            spriteLocation: data.spriteLocation
          },
          ws
        );
        break;
      case 'SEND_MOVE_ENEMY':
        broadcast(
          {
            type: 'SEND_MOVE_ENEMY',
            action: data.action,
            player: data.player,
            position: data.position,
            walkIndex: data.walkIndex,
            spriteLocation: data.spriteLocation
          },
          ws
        );
        break;
      case 'SEND_MOVE_ENEMY2':
        broadcast(
          {
            type: 'SEND_MOVE_ENEMY2',
            action: data.action,
            player: data.player,
            position: data.position,
            walkIndex: data.walkIndex,
            spriteLocation: data.spriteLocation
          },
          ws
        );
        break;
      default:
        break;
    }
  });

  ws.on('close', () => {
    players.splice(index, 1);
    broadcast(
      {
        type: 'PLAYERS_LIST',
        players
      },
      ws
    );
  });
});
