//(function (exports, require, module, __filename, __dirname){
	
	// every module is wrapped in this function
	// with these parameters hidden in the background

	// var x =;

	console.log(__filename);
	console.log(__dirname);
	var url = 'http://mylogger.io/log';

	function log(message) {
		// Send an HTTP request
		console.log(message);
	}

	// module.exports.log = log; // exporting log as an object. useful for exporting multiple methods
	module.exports = log; // exporting as a single function
	// module.exports.endPoint = url;

	module.exports.log = log;
	exports.log = log;

	// cannot write
	//exports = log; // (exports) is a reference to module.exports
				   // it cannot be changed
//})

