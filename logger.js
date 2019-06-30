//(function (exports, require, module, __filename, __dirname){
	
	// every module is wrapped in this function
	// with these parameters hidden in the background

	// var x =;

	// console.log(__filename);
	// console.log(__dirname);
	var url = 'http://mylogger.io/log';

	const EventEmitter = require('events');
	// const emitter = new EventEmitter();

	class Logger extends EventEmitter {
		// log is no longer a function like on line 28 because it's in a class
		// it is now a method
		log(message) {
			// Send an HTTP request
			console.log(message);
	
			// Raise an event
			// instead of using the emitter object like on line 35 we use 'this'
			this.emit('messageLogged', {id: 1, url: 'http://'});
	
		}
	

	}

	module.exports = Logger;

	// function log(message) {
	// 	// Send an HTTP request
	// 	console.log(message);

	// 	// Raise an event
	// 	emitter.emit('messageLogged', {id: 1, url: 'http://'});

	// }

	
	

	// module.exports.log = log; // exporting log as an object. useful for exporting multiple methods
	// module.exports = log; // exporting as a single function
	// // module.exports.endPoint = url;

	// module.exports.log = log;
	// exports.log = log;

	// cannot write
	//exports = log; // (exports) is a reference to module.exports
				   // it cannot be changed
//})

