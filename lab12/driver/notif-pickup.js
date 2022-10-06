'use strict';

module.exports = (socket) => (payload) => {
  console.log('Driver -- Package IN_TRANSIT', payload);
  socket.emit('IN_TRANSIT', payload);
  setTimeout(() => {
    console.log('Driver -- Package DELIVERED', payload);
    socket.emit('DELIVERED', payload);
  }, 500);
};