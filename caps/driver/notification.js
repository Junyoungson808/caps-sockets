'use strict';

module.exports = (socket) => (payload) => {
  console.log('Driver -- Package IN_TRANSIT', payload);
  socket.emit('RECIEVED', payload);

};