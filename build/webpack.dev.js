const baseWebpackConfig = require('./webpack.base');

var conf = baseWebpackConfig;
conf.devtool = "eval";
conf.mode = 'development';

module.exports = conf;