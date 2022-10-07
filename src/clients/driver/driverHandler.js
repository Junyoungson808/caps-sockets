'use strict';

module.exports = (socket) => (payload) => {
  setTimeout(() => {
    console.log(`DRIVER: PICKED UP PACKAGE ${payload.orderId}`);
    socket.emit('IN_TRANSIT', payload); 
  }, 2000);
  setTimeout(() => {
    console.log(`DRIVER: DELIVERED PACKAGE ${payload.orderId}`);
    socket.emit('DELIVERED', payload);
  }, 2500);
};