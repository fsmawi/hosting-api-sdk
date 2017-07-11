var xmlrpc = require('xmlrpc')

function HostingClient(options) {
	console.log('init Client with options : ' + options);
	this.client = xmlrpc.createClient(options);
}


HostingClient.prototype.UploadArtifact = function (params) {
	console.log('UploadArtifact');
	this.client.methodCall('UploadArtifact', ['aParam'], function (error, value) {
		if (error) {
			console.log(error);
		}

	    // Results of the method response 
		console.log('Method response for \'UploadArtifact\': ' + value);
	})
}


HostingClient.prototype.UpdateArtifact = function methodCall(params) {
	console.log('UpdateArtifact');
	this.client.methodCall('UpdateArtifact', ['aParam'], function (error, value) {
		if (error) {
			console.log(error);
		}

	    // Results of the method response 
		console.log('Method response for \'UpdateArtifact\': ' + value);
	})
}


module.exports = HostingClient;