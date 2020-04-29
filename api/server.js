const express = require('express');
const helmet = require('helmet');
const userRouter = require('../routers/userRouter.js')
const experienceRouter = require('../routers/experienceRouter.js')


const server = express();

//Global middleware
server.use(express.json());
server.use(helmet());

//Routers
server.use('/user', userRouter);
server.use('/experience', experienceRouter);


server.use('/', (req, res) => {
  res.status(200).send(console.log(`API's Base GET endpoint`))
});

// Routers
// Auth
// Experiences
// Users
// Guides

module.exports = server;