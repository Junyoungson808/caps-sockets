'use strict';

const { io } = require('socket.io-client');
const socket = io('http://localhost:3002/caps');

const handlePickup = require('./notif-transit')(socket);;
const handleDelivered = require('./notif-delivered')(socket);

socket.emit('JOIN', 'driver');

socket.on('PICKUP', handlePickup);
