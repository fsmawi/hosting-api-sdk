var xmlrpc = require('xmlrpc')

function HostingClient(options) {
	
	console.log('init Client with options : ' + options);
	this.client = xmlrpc.createClient(options);
}


HostingClient.prototype.UploadArtifact = function (params, callback) {

	this.client.methodCall('UploadArtifact', params, function (error, value) {
		if (error) {
			callback(error);
		} else {
		    // Results of the method response 
			console.log('Method response for \'UploadArtifact\': ' + value);
			callback(error, value);
		}

	})
}


HostingClient.prototype.UpdateArtifact = function methodCall(params, callback) {

	this.client.methodCall('UpdateArtifact', params, function (error, value) {
		if (error) {
			callback(error);
		} else {
		    // Results of the method response 
			console.log('Method response for \'UpdateArtifact\': ' + value);
			callback(error, value);
		}
	    // Results of the method response 
	})
}


module.exports = HostingClient;