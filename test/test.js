// First, we require `expect` from Chai.
var chai = require('chai');
var expect = chai.expect;
var Log = require('./../index.js');

// `describe` makes a "suite" of tests; think of them as a group.
describe('create logging output', function () {

	// The tests have an English description...
	it('output msg', function () {
		var log = new Log();
		log.msg('msg test info', 'msg test message');
		expect(log).to.be.an('object');
	});

	it('output err', function () {
		var log = new Log();
		log.err('err test info', 'err test message');
		expect(log).to.be.an('object');
	});

	it('output debug', function () {
		var log = new Log();
		log.debug('debug test info', 'debug test message');
		expect(log).to.be.an('object');
	});

	it('output info', function () {
		var log = new Log();
		log.info('info test info', 'info test message');
		expect(log).to.be.an('object');
	});

});