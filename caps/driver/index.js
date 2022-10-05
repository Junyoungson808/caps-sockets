'use strict';

const { io } = require('socket.io-client');
const socket = io('http://localhost:3002/caps');

const createHandleMessage = require('./notification');
const handleMessage = createHandleMessage(socket);

socket.emit('JOIN', 'driver');

socket.on('MESSAGE', handleMessage);