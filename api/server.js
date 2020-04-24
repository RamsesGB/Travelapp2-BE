const express = require('express');
const server = express();

server.use(express.json());

server.use('/', (req, res) => {
  res.status(200).send(console.log(`API's Base GET endpoint`))
});

// Routers
// Auth
// Experiences
// Users
// Guides

module.exports = server;