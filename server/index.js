const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http);

const Vue = require('vue'); // import vue library
const renderer = require('vue-server-renderer').createRenderer(); // import vue server renderer library

const PORT = process.env.PORT || 3000;

io.on('connection', (socket) => {
    console.log(socket, 'Socket connection sucsseed!');
});

app.listen(PORT, () => {
    console.log(`Server start work on port: ${PORT}`);
});