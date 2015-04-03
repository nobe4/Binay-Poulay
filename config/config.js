var path = require('path'),
    rootPath = path.normalize(__dirname + '/..'),
    env = process.env.NODE_ENV || 'development';

var config = {
  development: {
    root: rootPath,
    app: {
      name: 'binay-poulay'
    },
    port: 3000,
    db: 'mongodb://localhost/binay-poulay-development'
  },

  test: {
    root: rootPath,
    app: {
      name: 'binay-poulay'
    },
    port: 3000,
    db: 'mongodb://localhost/binay-poulay-test'
  },

  production: {
    root: rootPath,
    app: {
      name: 'binay-poulay'
    },
    port: 3000,
    db: 'mongodb://localhost/binay-poulay-production'
  }
};

module.exports = config[env];
