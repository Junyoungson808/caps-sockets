'use strict';

const { io } = require('socket.io-client');
const socket = io('http://localhost:3002/caps');
const Chance = require('chance');
const chance = new Chance();
const MessageClient = require('../lib/messageClient');
const vendor = new MessageClient('ACME Widgets');

// flowerVendor.publish('GETALL', {queueId: '1-800-flowers'});

vendor.subscribe('DELIVERED', (payload) => {
  console.log(`Thank you for the delivery ${payload.orderId}`);
  vendor.publish('RECEIVED', payload);
});

setInterval(() => {
  console.log('---------ORDER READY FOR PICKUP----------');
  let payload = {
    store: 'acme-widgets',
    orderId: chance.string(),
    customer: chance.name(),
    address: `${chance.address()}, ${chance.city()}, ${chance.state}`,
  }
  vendor.publish('PICKUP', payload);
}, 3000);