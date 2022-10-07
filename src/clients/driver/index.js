'use strict';

const { io } = require('socket.io-client');
const socket = io('http://localhost:3002/caps');

const handlePickup = require('./driverHandler')(socket);     // CONTAINS PICKUP // IN_TRANSIT // DELIVERED emits

socket.emit('GETALL', '1-800-flowers', 'acme-widgets');           
socket.on('PICKUP', handlePickup);                // Initial start (comes from server/index.js)
