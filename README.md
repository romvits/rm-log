# [rm-log.js](http://rm-log.appcomplete.at/)

A javascript library for simple logging outputs from servers. Also shows actual usage of used Memory.

[Website and documentation](http://rm-log.appcomplete.at/)

## Installation
```bash
$ npm install rm-log
```

## Example simple
```js
var Log = require('rm-log');
var log = new Log();

log.msg("HTTP-SERVER", "a message for test");
log.err("DB-SERVER", "a error for test");
log.debug("WS-SERVER", "a debugging for test");
log.info("generate PDF", "a infostring for test");

// logging of javascript json-object (helpful for rest or ws outputs) directly output of json-object
log.msg("OBJECT", {
	"var1": "val1",
	"var2": "val2"
});

```

## Example complex
```js
var Log = require('rm-log');
var log = new Log({
	'err': true,
	'info': false,
	'debug': true,
	'msg': false,
	'datePattern': 'yyyy/mm/dd HH:MM:ss', // dd.mm.yyyy HH:MM:ss
	'colors': {
		'err': 'green', // one of these [ 'black', 'red', 'green', 'yellow', 'blue', 'magenta', 'cyan', 'white', 'gray', 'grey' ]
		'info': 'blue', // one of these [ 'black', 'red', 'green', 'yellow', 'blue', 'magenta', 'cyan', 'white', 'gray', 'grey' ]
		'debug': 'cyan', // one of these [ 'black', 'red', 'green', 'yellow', 'blue', 'magenta', 'cyan', 'white', 'gray', 'grey' ]
		'err': 'gray' // one of these [ 'black', 'red', 'green', 'yellow', 'blue', 'magenta', 'cyan', 'white', 'gray', 'grey' ]
	}
});

console.log('Example: 1 - initial Settings from constructor');
log.msg('1 HTTP-SERVER', 'a message for test');
log.err('1 DB-SERVER', 'a error for test');
log.debug('1 WS-SERVER', 'a debugging for test');
log.info('1 generate PDF', 'a infostring for test');


console.log('Example: 2 - some Settings changed');
log.settings({
	'err': true,
	'info': true,
	'debug': true,
	'msg': true
});

log.msg('2 HTTP-SERVER', 'a message for test');
log.err('2 DB-SERVER', 'a error for test');
log.debug('2 WS-SERVER', 'a debugging for test');
log.info('2 generate PDF', 'a infostring for test');

console.log('Example: 3 - some Settings changed');
log.settings({
	'err': false,
	'info': false,
	'debug': false,
	'msg': false
});

log.msg('3 HTTP-SERVER', 'a message for test');
log.err('3 DB-SERVER', 'a error for test');
log.debug('3 WS-SERVER', 'a debugging for test');
log.info('3 generate PDF', 'a infostring for test');

console.log('Example: 4 - some Settings changed, output for logfile => colors are ignored');
log.settings({
    'logfile': true,
	'err': false,
	'info': false,
	'debug': false,
	'msg': true,
	'colors': {
		'msg': 'red', // one of these [ 'black', 'red', 'green', 'yellow', 'blue', 'magenta', 'cyan', 'white', 'gray', 'grey' ]
	}
});

log.msg('4 HTTP-SERVER', 'there was no output in example 3 because all debugging levels where set to \'false\'');
log.err('4 DB-SERVER', 'a error for test');
log.debug('4 WS-SERVER', 'a debugging for test');
log.info('4 generate PDF', 'a infostring for test');
```