const EventEmitter = require('events');


const myEmitter = new EventEmitter();
const consoleB = () => {
  console.log('B');
}
// Only do this once so we don't loop forever
myEmitter.once('newListener', (event, listener) => {
  if (event === 'event') {
    // Insert a new listener in front
    myEmitter.on('event', consoleB);
    myEmitter.on('event', consoleB);
  }
});
myEmitter.on('event', () => {
  console.log('A');
});
myEmitter.emit('event');
myEmitter.removeListener('event', consoleB);
myEmitter.emit('event');