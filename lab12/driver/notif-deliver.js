'use strict';

module.exports = (socket) => (payload) => {
  console.log('Driver -- Package DELIVERED', payload);
  socket.emit('DELIVERED', payload);
  setTimeout(() => {
    console.log('Driver -- Package DELIVERED', payload);
  })

};