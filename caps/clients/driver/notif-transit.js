'use strict';

module.exports = (socket) => (payload) => {
    socket.on('PICKUP', payload);
    console.log(`DRIVER: PACKAGE PICKED UP ${payload.orderId}`);
    socket.emit('TRANSIT', payload);

};