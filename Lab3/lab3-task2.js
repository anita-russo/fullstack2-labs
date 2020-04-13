const buf = Buffer.from([0x62, 0x75, 0x66, 0x66, 0x65, 0x72]);

const EventEmitter = require('events');
const myEmitter = new EventEmitter();


myEmitter.on('event', (buf) => {
  for (const b of buf) {
    console.log(b)
  }
});

myEmitter.emit('event', buf);
