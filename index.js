var _ = require('lodash');
var DateFormat = require('dateformat');
var Colors = require('colors/safe');

function rmLog (settings) {
	this.settings = _.extend({
		_err: true,
		_msg: true,
		_info: true,
		_debug: true,
		_datePattern: "dd.mm.yyyy HH:mm:ss"
	}, settings);

	this.dateFormat = new DateFormat();

}

rmLog.prototype.msg = function (info, message) {
	if (this.settings._msg) {
		this._output('MSG:', info, message, 'cyan');
	}
}

rmLog.prototype.info = function (info, message) {
	if (this.settings._info) {
		this._output('INFO:', info, message, 'blue');
	}
}

rmLog.prototype.debug = function (info, message) {
	if (this.settings._debug) {
		this._output('DEBUG:', info, message, 'green');
	}
}

rmLog.prototype.err = function (info, message) {
	if (this.settings._err) {
		this._output('ERR:', info, message, 'red');
	}
}

rmLog.prototype._output = function (type, info, message, color) {
	if (_.isUndefined(message)) {
		message = '';
	}
	if (_.isUndefined(color)) {
		color = 'white';
	}
	var memoryUsage = process.memoryUsage();

	function pad (num, size) {
		var s = num + "";
		while (s.length < size)
			s = " " + s;
		return s;
	}

	function space (string, size) {
		var s = string + "";
		while (s.length < size)
			s = s + " ";
		return s;
	}

	function formatBytes (bytes, decimals) {
		if (bytes == 0) return '0 Byte';
		var k = 1000; // or 1024 for binary
		var dm = decimals + 1 || 3;
		var sizes = [ 'Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB' ];
		var i = Math.floor(Math.log(bytes) / Math.log(k));
		return parseFloat((bytes / Math.pow(k, i)).toFixed(1)) + ' ' + sizes[i];
	}

	var memoryString = pad(formatBytes(memoryUsage.heapUsed, 0), 10);
	var typeString = space(type, 6);
	var date = new Date();
	var dateString = DateFormat(date, this.settings._datePattern);
	var messageString = "";
	
	if (typeof(message) == "object") {
		messageString = JSON.stringify(message);
	} else {
		messageString = message;
	}

	console.log(Colors[color](dateString), Colors['gray'](memoryString), Colors[color](typeString), Colors[color](info), Colors[color](messageString));
}

module.exports = rmLog;
