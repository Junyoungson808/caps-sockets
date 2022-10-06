'use strict';

module.exports = (socket) => (text) => {
  socket.emit('PICKUP', { text });
};
