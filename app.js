require('dotenv').config();
const { listen } = require('express/lib/application');
const Server = require('./models/server');

const server = new Server();
server.listen()