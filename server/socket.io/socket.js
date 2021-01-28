// socket work
const app = require('express')();
const server = require('http').createServer(app);
const io = require('socket.io')(server);

io.on('connected', () => {
    console.log('Socket has been connected...');
});

module.exports = server;