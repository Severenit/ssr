const webpackClientConfig = require('./webpack.client.config');
const webpackServerConfig = require('./webpack.server.config');

module.exports = [
  webpackClientConfig,
  webpackServerConfig
];
