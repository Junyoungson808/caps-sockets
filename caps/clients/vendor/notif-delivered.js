'use strict';

module.exports = (payload) => {
  console.log(`Thank you for for the delivery of ${payload.id}`, payload.id);
};