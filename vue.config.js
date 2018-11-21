const path = require('path');

function resolve (dir) {
    return path.join(__dirname, dir);
}

module.exports = {
    devServer: {
        port: 12450
    },
    chainWebpack: config => {
        config.resolve.alias
            .set('styles', resolve('src/css'));
    },
    baseUrl: './'
}