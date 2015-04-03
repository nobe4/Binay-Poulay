var http = require('http'),
		request = require('request');

module.exports = function(io, callback) {
	io.on('connection',function(socket){
		console.log('a wild poulay appears');
		init(socket);
		// TODO : load previous messages
		socket.on('disconnect', function(socket){
			console.log('the wild poulay flew away');
		});
		socket.on('poulay message', function(message){
			console.log('New poulay message :' , message);
			var response = sendMessageToBinay(message);
			if(response != 'ok'){
				socket.emit('error message', response);
			}
		});
	});

	function init(socket){
		callback(function(message){
			socket.emit('binay message', message);
		})
	}
	// send the binay message to the client-side poulay

	// send the client-side poulay message to the binay
	function sendMessageToBinay(message){
		var form = {
			text : message
		}
		var options = {
			uri: "https://hooks.slack.com/services/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",
			form: JSON.stringify(form)
		};
		console.log(options.form);
		request.post(options, function(error, response, body){
			if (!error && response.statusCode == 200) {
				return 'ok';
			} else {
				return response.statusCode + body;
			}
		});
	}
	return callback;
};
