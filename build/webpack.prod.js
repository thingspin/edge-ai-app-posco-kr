const baseWebpackConfig = require('./webpack.base');

var conf = baseWebpackConfig;
conf.mode = 'development';

module.exports = baseWebpackConfig;