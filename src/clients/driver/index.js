'use strict';

const { io } = require('socket.io-client');
const socket = io('http://localhost:3002/caps');

const handlePickup = require('./driverHandler')(socket);


socket.emit('GETALL', '1-800-flowers');
// socket.emit('JOIN', 'driver');

// flowerVendor.publish('GETALL', {queueId: '1-800-flowers'});

socket.on('PICKUP', handlePickup);
