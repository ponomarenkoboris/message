// socket work
const app = require('express')();
const server = require('http').createServer(app);
const io = require('socket.io')(server);
const User = require('./database/models');



app.get('/msb', () => {
    // socket need to be connect on main layout  
    
});

io.on('connection', (socket) => {
    console.log('Socket has been connected...');
    socket.on('disconnect', () => {
        console.log('user disconnected');
    });
});

// change profile
app.post('/profile', async (req, res) => {
    try {
        const sendData = new Promise((resolve, reject) => {
            // send user data logic
            // if (true) { 
            //     // if data chenged successfully 
            //     resolve() // some statement
            // } else { 
            //     // if data not chenged
            //     reject() // some statement
            // }
        });
    } catch (error) {
        console.log(error.status + ': error to change user profile data:\n' + error.message);
    }
});

// login
app.post('/login', async (req, res) => {
    try {
        // try to find user in database 
    } catch (error) {
        console.log(error.status + ': error to login user\n' + error.message);
    }
});

// registration
app.post('/registration', async (req, res) => {
    // registartion new user
    try {
        const user = new User({...req.body});
        // search user with same email end username
        await user.save();
    } catch (error) {
        console.log(error.status + ': error to registate new user\n' + error.message);
        // send message to client that user not created
    }
});

// send message
// app.post('/msb/chat', async)

module.exports = server;