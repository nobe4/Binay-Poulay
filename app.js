var app = require('express')(),
	server = require('http').createServer(app),
	io = require('socket.io')(server),
  config = require('./config/config'),
  glob = require('glob');
  // mongoose = require('mongoose');

// mongoose.connect(config.db);
// var db = mongoose.connection;
// db.on('error', function () {
  // throw new Error('unable to connect to database at ' + config.db);
// });

// var models = glob.sync(config.root + '/app/models/*.js');
// models.forEach(function (model) {
  // require(model);
// });

require('./config/express')(app, config, io);
// require('./config/socketio')(io);

server.listen(config.port);
console.log('Magic on port ' + config.port);
