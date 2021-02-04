// socket work
const app = require('express')();
const server = require('http').createServer(app);
const io = require('socket.io')(server);
const User = require('../database/models');

app.get('/login', async (req, res) => {
    try {
        // try to find user in database 
    } catch (error) {
        console.log('Error: ', error.message);
    }
});
app.post('/registration', async (req, res) => {
    // registartion new user
    try {
        const user = new User({...req.body});
        // search user with same email end username
        await user.save();
    } catch (error) {
        console.log('Error: ', error.message);
        // send message to client that user not created
    }
});

io.on('connected', () => {
    console.log('Socket has been connected...');
});

module.exports = server;