const config = require('~/nuxt.config.js');
const app = require('express')();

const PORT = config.server.port;

app.listen(PORT, () => {
    console.log(`Server has been startes on url ${config.env.baseUrl} + ${PORT}`);
});