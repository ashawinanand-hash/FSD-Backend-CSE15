// Using Node.js built in events module, create an eventemitter . register multiple listeners for a response event, the emit the event by passing name and id ad arguments and display them in the console


const EventEmitter = require('events');

const event = new EventEmitter();

event.on('response', (name, id) => {
    console.log("Listener 1:");
    console.log("Name:", name);
    console.log("ID:", id);
});

event.on('response', (name, id) => {
    console.log("Listener 2:");
    console.log("Name:", name);
    console.log("ID:", id);
});

event.emit('response', 'Ashwin', 101);