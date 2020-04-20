const express = require('express');

const server = express();
const PORT = 7000;

server.use(express.json());

server.use('/', (req, res) => {
  res.status(200).send(console.log(`API's Base GET endpoint`))
});

server.listen(PORT, () => {
  console.log(`\n API Running on ${PORT} \n`)
});