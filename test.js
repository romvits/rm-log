var Log = require('./index.js');

var log = new Log({
	'err': true,
	'info': false,
	'debug': true,
	'msg': false,
	'colors': {
		'err': 'green',
		'debug': 'cyan'
	}
});

log.msg("a msg", "a message for test");
log.err("a err", "a error for test");
log.debug("a debug", "a debugging for test");
log.info("a info", "a infostring for test");

log.msg("a msg", {
	"var1": "val1",
	"var2": "val2"
});
