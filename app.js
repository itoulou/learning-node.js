// function sayHEllo(name) {
// 	console.log('Hello ' + name);
// }

// // sayHEllo('Ivan');
// console.log(window)
// in node we dont have window or document objects
// these are part of the runtime enviornemnt we get with the browser
// in node there are other objects to work with os, network and files

// 4 modules in node:
// os, fs, events, http

// console.log(module); // appears global but not

// const logger = require('./logger');

// console.log(logger);

// logger.log('Hello World') - calling exported method from module.exports.log

const log = require('./logger');
log('message');

const path = require('path');

var pathObj = path.parse(__filename);

console.log(pathObj);

const os = require('os');

var totalMemory =  os.totalmem();
var freeMemory = os.freemem();

// console.log('Total Memory: ' + totalMemory);

// Template string
// ES6 / ES2015 : ECMAScript 6
// basically another way of writing line 36 above without concatenation

console.log(`Total Memory: ${totalMemory}`);
console.log(`Free Memory: ${freeMemory}`);

const fs = require('fs');

// synchronous form of this method
// const files = fs.readdirSync('./');
// console.log(files)

// asynchronous form of this method
// fs.readdir('./', function(err, files) {
//     if (err) console.log('Error', err);
//     else console.log('Result', files);
// });

// line 51 to 55 with error (err)
// fs.readdir('$', function(err, files) {
//     if (err) console.log('Error', err);
//     else console.log('Result', files);
// });