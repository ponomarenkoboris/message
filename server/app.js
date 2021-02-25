const app = require('express')();
const server = require('http').createServer(app);
const io = require('socket.io')(server);
const users = require('./users')();

const mess = (name, text, id) => ({ name, text, id });

io.on('connection', socket => {
    console.log('socket connected');
    socket.on('writeMessage', (msg, callback) => {
        if (!msg.text) return callback();

        const user = users.get(data.id);
        if (user) {
            io.to(user.room).emit('newMessage', mess(user.name, data.text, data.id))
        }
        callback();
    })
});

module.exports = {
    app, 
    server
};