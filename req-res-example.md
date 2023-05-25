const express = require('express');
const app = express();

// Middleware function
app.use((req, res) => {
  // Set the response status
  res.status(200);

  // Set the response content type
  res.setHeader('Content-Type', 'text/plain');

  // Send the response body
  res.send('Hello, World!');
});

// Start the server
app.listen(3000, () => {
  console.log('Server started on port 3000');
});


## Basically, req and res are creating the server side part of the web - server convo. 

