// ? Buffers: Efficiently manage and process raw binary data, crucial for streams and large files.

// Buffers in Node.js are used to store raw binary data temporarily. They are especially useful when dealing with streams (e.g., reading a file, handling network requests) because streams transfer data in small chunks rather than all at once.

// ? Event Emitters: Simplify handling asynchronous, event-driven programming by allowing events to be published and subscribed to.



// Real-Life Example for Buffers:

// Scenario: Reading a large file in chunks.

// Imagine you have a video file of 1GB. Instead of loading the entire file into memory (which could crash the application), you can use a buffer to process it in smaller chunks.


const fs = require('fs');

// Read file in chunks
const readStream = fs.createReadStream('largeVideo.mp4');
readStream.on('data', (chunk) => {
  console.log(`Received ${chunk.length} bytes of data.`);
  // Process the chunk (Buffer)
});
readStream.on('end', () => {
  console.log('File reading completed.');
});

// ! Event Emitters

// Event Emitters in Node.js allow you to handle asynchronous events by subscribing to and triggering specific events. The events module provides the EventEmitter class for this purpose.

// Key Features of Event Emitters:
// Enable a pub-sub (publish-subscribe) mechanism.
// Listeners can be attached to handle specific events.
// Used extensively in Node.js APIs (e.g., streams, HTTP).



// Real-Life Example for Event Emitters:

// Scenario: Custom events in a chat application.
// Imagine a chat server that needs to broadcast a message whenever a user sends one.


// Combining Buffers and Event Emitters

// Scenario: Streaming video data to a client.
// You want to send video data to a user in chunks and notify when a chunk is sent.

// MS Teams , Chating application where we have multiple channels and people