var _ = require('lodash');
var DateFormat = require('dateformat');
var Colors = require('colors/safe');

/**
 * Logging for Servers
 *
 * @param {Object} settings - initialize with settings.
 * @example new Log({'err':ture,'info':false});
 */
function rmLog (settings) {

	this.settings(settings);
	this._colors = [ "black", "red", "green", "yellow", "blue", "magenta", "cyan", "white", "gray", "grey" ];

}

/**
 * Change settings for logging
 *
 * @param {Object} settings - change settings for default settings.
 * @example log.settings({'err':ture,'info':false});
 */
rmLog.prototype.settings = function (settings) {

	this._settings = {
		'err': true,
		'msg': true,
		'info': true,
		'debug': true,
		'datePattern': 'dd.MM.yyyy HH:mm:ss'
	};

	var colors = {
		'err': 'red',
		'msg': 'blue',
		'info': 'magenta',
		'debug': 'yellow'
	};

	if (!_.isUndefined(settings)) {

		if (!_.isUndefined(settings)) {
			_.extend(this._settings, settings);
		}

		if (!_.isUndefined(settings.colors)) {
			_.extend(colors, settings.colors);
		}
	}
	this._settings.colors = colors;
}

/**
 * Message output
 *
 * @param {string} info - information for the message.
 * @param {string} message - logging message.
 */
rmLog.prototype.msg = function (info, message) {
	if (this._settings.msg) {
		this._output('MSG', info, message, this._settings.colors.msg);
	}
}

/**
 * Information output
 *
 * @param {string} info - information for the message.
 * @param {string} message - logging message.
 */
rmLog.prototype.info = function (info, message) {
	if (this._settings.info) {
		this._output('INF', info, message, this._settings.colors.info);
	}
}

/**
 * Debugging output
 *
 * @param {string} info - information for the message.
 * @param {string} message - logging message.
 */
rmLog.prototype.debug = function (info, message) {
	if (this._settings.debug) {
		this._output('DEB', info, message, this._settings.colors.debug);
	}
}

/**
 * Error output
 *
 * @param {string} info - information for the message.
 * @param {string} message - logging message.
 */
rmLog.prototype.err = function (info, message) {
	if (this._settings.err) {
		this._output('ERR', info, message, this._settings.colors.err);
	}
}

rmLog.prototype._output = function (type, info, message, color) {
	if (_.isUndefined(message)) {
		message = '';
	}
	if (_.isUndefined(color)) {
		color = 'white';
	} else {
		if (_.indexOf(this._colors, color) === -1) {
			color = 'white';
		}
	}

	var memoryUsage = process.memoryUsage();

	function pad (num, size) {
		var s = num + "";
		while (s.length < size)
			s = " " + s;
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
	var date = new Date();
	var dateString = DateFormat(date, this._settings.datePattern);
	var messageString = "";

	if (typeof (message) == "object") {
		messageString = JSON.stringify(message);
	} else {
		messageString = message;
	}

	console.log(Colors[color](dateString), "|", Colors['gray'](memoryString), "|", Colors[color](type), "|", Colors[color](info), "|", Colors[color](messageString));
}

module.exports = rmLog;
