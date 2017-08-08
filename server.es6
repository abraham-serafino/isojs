import express from 'express';
import http from 'http';
import socket from 'socket.io';
import browserify from 'express-browserify';

const app = express();
const server = http.createServer(app);
const io = socket(server);

io.on('connection', () => {
  console.log('a user connected');
});

app.use(express.static(`${__dirname}/public`));
app.get('/client.js', browserify('./client.js'));

server.listen(8080, () => {
  console.log('listening on :8080...');
});
