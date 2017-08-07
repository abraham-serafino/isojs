const express = require('express');
const app = express();
const server = require('http').createServer(app);
const io = require('socket.io')(server);
const browserify = require('express-browserify');

io.on('connection', () => {
  console.log('a user connected');
});

app.use(express.static(`${__dirname}/public`));
app.get('/client.js', browserify('./client.js'));

server.listen(8080, () => {
  console.log('listening on :8080...');
});
