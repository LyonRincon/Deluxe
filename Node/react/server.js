'use strict';

const express = require('express');

// Constants
const PORT = 8081;
const HOST = '0.0.0.0';

// App
const app = express();
// app.use(express.static('dist'));
app.get('/style.css', function(req, res) {
  res.sendFile("/app/dist/style.css");
});
app.get('/bundle.js', function(req, res) {
  res.sendFile("/app/dist/bundle.js");
});
app.get('/', (req, res) => {
  res.sendFile('/app/index.html');
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);