'use strict';

const { io } = require('socket.io-client');
const socket = io('http://localhost:3002/caps');
const Chance = require('chance');
const chance = new Chance();
const MessageClient = require('../lib/messageClient');
const flowerVendor = new MessageClient('1-800-flowers');

// flowerVendor.publish('GETALL', {queueId: '1-800-flowers'});

flowerVendor.subscribe('DELIVERED', (payload) => {
  console.log(`Thank you for the delivery ${payload.orderId}`);
  flowerVendor.publish('vendor:MessageRecieved', payload);
});

setInterval(() => {
  console.log('------1-800-flowers: Flowers Ready For Pick Up------');
  let payload = {
    messageId: chance.guid(),
    store: '1-800-flowers',
    orderId: chance.string({ length: 8, casing: 'upper', alpha: true, numeric: true }),
    customer: chance.name(),
    address: `${chance.address()}, ${chance.city()}, ${chance.state()}`,
  };
  socket.emit('PICKUP', payload);
}, 2000);

setInterval(() => {
  console.log(`----------1-800-flowers: Flowers Delivered----------`);
}, 3000);
