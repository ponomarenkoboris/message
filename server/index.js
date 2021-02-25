const consola = require('consola');
const { Nuxt, Builder } = require('nuxt');
const { app, server } = require('./app');

let config = require('../nuxt.config');
config.dev = !(process.env.NODE_ENV === 'production');

const start = async () => {
    const nuxt = new Nuxt(config);

    const { host, port } = nuxt.options.server;

    if (config.dev) {
        const builder = new Builder(nuxt);
        await builder.build();
    } else {
        await nuxt.ready();
    }

    app.use(nuxt.render);

    server.listen(port, () => {
        consola.ready({
            message: `Server has been started on http://${host}:${port}`,
            badge: true
        })
    })

}
start();