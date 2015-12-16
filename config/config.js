var path = require('path'),
    rootPath = path.normalize(__dirname + '/..'),
    env = process.env.NODE_ENV || 'development';

var config = {
  development: {
    root: rootPath,
    app: {
      name: 'expressmvc'
    },
    serviceTimeout: 3000,
    maxSockets: Infinity,
    port: 3000,
  },

  test: {
    root: rootPath,
    app: {
      name: 'expressmvc'
    },
    serviceTimeout: 3000,
    maxSockets: Infinity,
    port: 3000,
  },

  production: {
    root: rootPath,
    app: {
      name: 'expressmvc'
    },
    serviceTimeout: 30000,
    maxSockets: Infinity,
    port: 3000,
  }
};

module.exports = config[env];
