var xmlrpc = require('xmlrpc')

function Client(options) {
	console.log('init Cleint with options : ' + options);
}


Client.prototype.UploadArtifact = function (params) {
	console.log('UploadArtifact', params);
}


Client.prototype.UploadArtifact = function methodCall(params) {
	console.log('UploadArtifact', params);
}


module.exports = Client;