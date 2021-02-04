const server = require('./socket.io/socket.js');
const mongoose = require('mongoose');
require('dotenv').config({ path: './.env' });

const PORT = process.env.PORT || 3000;
const uri = process.env.MONGO_DB;

async function start() {
    try {
        mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true }, (err) => {
        if (err) throw err;
            console.log('MongoDB succesfully connected');
        });
        server.listen(PORT, () => {
            console.log(`Server start work on port: ${PORT}`);
        });

    } catch (error) {
        console.log(error);
    }
}
start();