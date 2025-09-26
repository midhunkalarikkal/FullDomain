// Import the EventEmitter class from the 'events' module
const EventEmitter = require('events');

// Create a new event emitter instance
const eventEmitter = new EventEmitter();

// Define a listener for the 'userLoggedIn' event
eventEmitter.on('userLoggedIn', (username) => {
  console.log(`${username} has logged in successfully!`);
});

// Simulate a login function
function loginUser(username) {
  console.log("Verifying user credentials...");
  
  // After successful verification, trigger the event
  eventEmitter.emit('userLoggedIn', username);
}

// Call the login function
loginUser('midhun');