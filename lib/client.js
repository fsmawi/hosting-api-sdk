var xmlrpc = require('xmlrpc')

function HostingClient(options) {
	console.log('init Client with options : ' + options);
	this.client = xmlrpc.createClient(options);
}


HostingClient.prototype.UploadArtifact = function (params, callback) {
	console.log('UploadArtifact');
	this.client.methodCall('UploadArtifact', ['aParam'], function (error, value) {
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
	console.log('UpdateArtifact');
	this.client.methodCall('UpdateArtifact', ['aParam'], function (error, value) {
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