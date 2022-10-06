'use strict';

const { Server } = require('socket.io');

const PORT = process.env.PORT || 3002;
const server = new Server(PORT); //instance of a listening event server at http:localhost:3002
const caps = server.of('/caps') // create namespace

caps.on('connection', (socket) => {
  console.log('Socket connected to caps !', socket.id);

  socket.on('JOIN', (room) => {   // how to join a room
    socket.join(room);
    console.log(`You've joined the ${room} room`);
  });
  
  socket.on('PICKUP', (payload) => {
    console.log('PICKUP', payload);
    socket.broadcast.emit('PICKUP', payload); // SEND to all parties in the socket EXCEPT sender -
  });

  socket.on('RECIEVED', (payload) => {
    console.log('Server RECIEVED EVENT', payload);
    socket.broadcast.emit('RECIEVED', payload);
  });
});

function logEvent(event, payload) {
  const date = new Date();
  const time = date.toTimeString();
  console.log('EVENT', { event, time, payload });
};