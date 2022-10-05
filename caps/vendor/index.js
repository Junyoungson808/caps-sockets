'use strict';

const { io } = require('socket.io-client');
const socket = io('http://localhost:3002/caps');
const Chance = require('chance');
const chance = new Chance();

const handleRecieved = require('./handlepickup');
const createSendMessage = require('./notificattion');
const sendMessage = createSendMessage(socket);

// join caps
socket.emit('JOIN', 'caps');

// 
socket.on('RECIEVED', handleRecieved);

setInterval(() => {
  const order = {
    store: chance.company(),
    orderID: chance.guid({version: 4}),
    customer: chance.name(),
    address: chance.address(),
  };
  sendMessage(`DRIVER-- Package ready for pickup ${chance.first()}`);
}, 3000);
