# [rm-log.js](http://rm-log.appcomplete.at/)

A javascript library for logging outputs from servers.

[Website and documentation](http://rm-log.appcomplete.at/)

## Installation

```bash
$ npm install rm-log
```

## Examples

```js
var Log = require('rm-log');
var log = new Log();

log.msg("a msg", "a message for test");
log.err("a err", "a error for test");
log.debug("a debug", "a debugging for test");
log.info("a info", "a infostring for test");

log.msg("a msg", {
	"var1": "val1",
	"var2": "val2"
});

```

```js
var Log = require('rm-log');
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


```