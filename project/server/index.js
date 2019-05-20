var http = require('http');
const express = require('express');
const cors = require('cors')
const routes = require('./src/routes');

const app = express();
const server = http.createServer(app);

app.use(cors());

routes.init(app);

server.listen(3003);