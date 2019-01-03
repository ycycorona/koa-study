'use strict';
const fs = require('fs');
const net = require('net');
const path = require('path')
const filename = path.join(__dirname, 'file.txt');

net.createServer(connection => {
  // Reporting.
  console.log('log: Subscriber connected.');
  connection.write(JSON.stringify({msg: 'hello client'}));
  connection.on('data', (data) => {
    console.log(`from client: ${data.toString()}`);
  });
  // Cleanup.
  connection.on('close', () => {
    console.log('log: Subscriber disconnected.');
  });
}).listen(60300, () => console.log('Listening for subscribers...'));
