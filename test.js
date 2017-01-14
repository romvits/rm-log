var Log = require('./index.js');

var log = new Log();

log.msg("a msg", "a message for test");
log.err("a err", "a error for test");
log.debug("a debug", "a debugging for test");
log.info("a info", "a infostring for test");
