# caps-sockets - lab 12

## Author: Junyoung Son

## Problem Domain

  Creating a real-time application using socket.io, connecting clients (driver, vendor, etc) to a server. That would track packages from pickup, in-transit, to delivery. Tracking system for delivery of products or services.

As a vendor, I want to alert the system when I have a package to be picked up.
As a driver, I want to be notified when there is a package to be delivered.
As a driver, I want to alert the system when I have picked up a package and it is in transit.
As a driver, I want to alert the system when a package has been delivered.
As a vendor, I want to be notified when my package has been delivered.

## Dependencies

    "chance": "^1.1.8",
    "eslint": "^8.24.0",
    "socket.io": "^4.5.2",
    "socket.io-client": "^4.5.2"

## ![UML:](/Diagram%20-%20Untitled.png)

<!-- ## [Heroku:]() -->

# caps-Message-Queues - lab 13

## Author: Junyoung Son

## Problem Domain

  CAPS Phase 3: Complete work on a multi-day build of our delivery tracking system, adding queued delivery.

As a vendor, I want to “subscribe” to “delivered” notifications so that I know when my packages are delivered.
As a vendor, I want to “catch up” on any “delivered” notifications that I might have missed so that I can see a complete log.
As a driver, I want to “subscribe” to “pickup” notifications so that I know what packages to deliver.
As a driver, I want to “catch up” on any “pickup” notifications I may have missed so that I can deliver everything.
As a driver, I want a way to “scan” a delivery so that the vendors know when a package has been delivered.

## Dependencies

    "chance": "^1.1.8",
    "eslint": "^8.24.0",
    "socket.io": "^4.5.2",
    "socket.io-client": "^4.5.2"

## ![UML:](/Diagram%20-%20Untitled.png)

<!-- ## [Heroku:]() -->