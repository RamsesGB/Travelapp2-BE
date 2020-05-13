require('dotenv').config();

const server = require('./api/server.js');
const port = process.env.PORT || 7094;

server.listen(port, () => {
  console.log(`\n API Running on ${port} \n`);
});
