'use strict';

const { io } = require('socket.io-client');
const socket = io('http://localhost:3002/caps');

const pickupHandler = require('./notif-pickup')(socket);
// const deliveredHandler = require('./notif-deliver')(socket);

socket.emit('JOIN', 'driver');

socket.on('PICKUP', pickupHandler);
// socket.on('IN_TRANSIT', deliveredHandler);