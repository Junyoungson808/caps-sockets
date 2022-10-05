'use strict';

const { Server } = require('socket.io');

const PORT = process.env.PORT || 3002;

//instance of a listening event server at http:localhost:3002
const server = new Server(PORT);

// create namespace
const caps = server.of('/caps')

// connect to server
caps.on('connection', (socket) => {
  console.log('Socket connected to Event Server!', socket.id);

  socket.on('MESSAGE', (payload) => {
    console.log('Server MESSAGE event', payload);
    socket.broadcast.emit('MESSAGE', payload); // SEND to all parties in the socket EXCEPT sender -
  });

  socket.on('RECIEVED', (payload) => {
    console.log('Server RECIEVED EVENT', payload);
    socket.broadcast.emit('RECIEVED', payload);
  });
});

caps.on('connection', (socket) => {
  console.log('Socket connected to caps !', socket.id);

  // how to join a room
  socket.on('JOIN', (room) => {
    socket.join(room);
    console.log(`You've joined the ${room} room`);
  });

  // socket.on('CAPS', (payload) => {
  //   logEvent('CAPS', payload);
  //   caps.emit('CAPS', payload);
  // });
});

// io.to("news").emit("hello");

function logEvent(event, payload){
  const date = new Date();
  const time = date.toTimeString();
  console.log('EVENT', {event, time, payload});
};