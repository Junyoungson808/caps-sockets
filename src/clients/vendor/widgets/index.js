'use strict';

const { io } = require('socket.io-client');
const socket = io('http://localhost:3002/caps');
const Chance = require('chance');
const chance = new Chance();
const MessageClient = require('../lib/messageClient');
const vendor = new MessageClient('acme-widgets');

// flowerVendor.publish('GETALL', {queueId: '1-800-flowers'});

vendor.subscribe('DELIVERED', (payload) => {
  console.log(`Thank you for the delivery ${payload.orderId}`);
  vendor.publish('vendor:MessageRecieved', payload);
});

setInterval(() => {
  let payload = {
    messageId: chance.guid(),
    store: 'acme-widgets',
    orderId: chance.string({ length: 8, casing: 'upper', alpha: true, numeric: true }),
    customer: chance.name(),
    address: `${chance.address()}, ${chance.city()}, ${chance.state()}`,
  };
  console.log(`------Acme-Widgets: Widgets Ready For Pick Up------`);
  socket.emit('PICKUP', payload);
}, 2000);

setInterval(() => {
  console.log(`----------Acme-Widgets: Widgets Delivered----------`);
}, 3000);
