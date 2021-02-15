module.exports = {
    configureWebpack: {
        devtool: 'source-map'
    },
    pwa: {
        appleMobileWebAppCapable: 'yes',
        manifestOptions: {
            name: 'ChatiK',
            short_name: 'ChatiK',
            description: 'A messanger developed for practice'
        }
    }
}