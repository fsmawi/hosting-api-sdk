var xmlrpc = require('xmlrpc')

function Client(options) {
	console.log('init Cleint with options : ' + options);
}


Client.prototype.methodCall = function methodCall(method, params) {
	console.log(method, params);
}


module.exports = Client;