'use strict';

module.exports = (socket) => (text) => {
  // console.log('Driver Picked up package', text);
  socket.emit('MESSAGE', { text });
};