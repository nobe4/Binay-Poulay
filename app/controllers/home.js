var express = require('express');

module.exports = function (app, io) {
	require('../../config/socketio')(io, function(callback){
		poulayCallback = callback;
	});

	app.get('/', function (req, res, next) {
		res.render('index');
	});

	app.post('/', function(req, res, next){
		poulayCallback(req.body.text); // display message
		res.send('ok'); // response to slack
	});
};

