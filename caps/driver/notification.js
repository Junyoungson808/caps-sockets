'use strict';

module.exports = (socket) => (payload) => {
  console.log('Message Recieved!', payload);
  socket.emit('RECIEVED', payload);
};