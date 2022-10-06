'use strict';

module.exports = (socket) => (text) => {
  socket.emit('MESSAGE', { text });
};
