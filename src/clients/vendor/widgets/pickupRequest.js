'use strict';

const Chance = require('chance');
const chance = new Chance();

// const joinRoom = require('')

module.exports = (socket) => (store) => {
  console.log('---------ORDER READY FOR PICKUP----------');
  let payload = {
    store: '1-800-flowers',
    orderId: chance.guid(),
    customer: chance.name(),
    address: `${chance.address()}, ${chance.city()}, ${chance.state()}`,
  }
  socket.emit('PICKUP', payload);
}
