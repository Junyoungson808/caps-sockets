'use strict';

const { Server } = require('socket.io');
const PORT = process.env.PORT || 3002;
const server = new Server(PORT);
// const uuid = require('uuid');

const Queue = require('../lib/queue'); // Queue brought in from ./lib/queue
const messageQueue = new Queue();

const caps = server.of('/caps');

caps.on('connection', (socket) => {
  console.log('Socket connected to CAPS server', socket.id);

  socket.onAny((event, payload) => {
    let date = new Date;
    let time = date.toTimeString();
    console.log('EVENT', { event, time, payload });
  });

  socket.on('JOIN', (queueId) => { //JOIN ROOM LISTENER
    socket.join(queueId);
    socket.emit('JOIN', queueId); // JOIN ROOM Signal to 
  });

  socket.on('PICKUP', (payload) => {        // PICKUP LISTENER
    let currentQueue = messageQueue.read(payload.queueId);
    if (!currentQueue) {
      let queueKey = messageQueue.store(payload.queueId, new Queue());
      currentQueue = messageQueue.read(queueKey);
    }
    currentQueue.store(payload.messageId, payload);
    caps.emit('PICKUP', payload);
  });

  socket.on('IN_TRANSIT', (payload) => {      // IN_TRANSIT LISTENER
    caps.emit('IN_TRANSIT', payload);               // IN_TRANSIT SIGNAL ---- Goes to 
  });

  socket.on('DELIVERED', (payload) => {       // DELIVERED LISTENER
    caps.emit('DELIVERED', payload);                // DELIVERED SIGNAL ---- Goes to 
  });

  socket.on('vendor:MessageRecieved', (payload) => { // Messages in queue that have been read
    let currentQueue = messageQueue.read(payload.queueId);
    if (!currentQueue) {
      throw new Error('No Queue Created, messaging error');
    }
    let deleteMessage = currentQueue.remove(payload.messageId);
    return deleteMessage;
  });

  socket.on('GETALL', (queueId) => {
    console.log(`Getting all message for ${queueId}`);

    let currentQueue = messageQueue.read(queueId);
    if(currentQueue && currentQueue.data){
      Object.keys(currentQueue.data).forEach(messageId => {
        socket.emit('DELIVERED', currentQueue.read(messageId));
      });
    }
  });
});
