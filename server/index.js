const server = require('./socket.io/socket.js');
const database = require('./database/mongodb.js');

const PORT = process.env.PORT || 3000;

async function start() {
    try {
        await database();
        server.listen(PORT, () => {
            console.log(`Server start work on port: ${PORT}`);
        });

    } catch (error) {
        console.log(error);
    }
}
start();