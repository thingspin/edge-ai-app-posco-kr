const baseWebpackConfig = require('./webpack.base');

var conf = baseWebpackConfig;
conf.devtool = "source-map";
conf.mode = 'development';

module.exports = conf;