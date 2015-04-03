// Example model

var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var UserSchema = new Schema({
	oauthid : String,
	name : String
});

mongoose.model('User', UserSchema);

