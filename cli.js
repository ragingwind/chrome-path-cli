#!/usr/bin/env node
'use strict';
const meow = require('meow');
const chromePathCli = require('.');

const cli = meow(`
	Usage
	  $ chrome-path-cli [input]

	Options
	  --foo  Lorem ipsum [Default: false]

	Examples
	  $ chrome-path-cli
	  unicorns & rainbows
	  $ chrome-path-cli ponies
	  ponies & rainbows
`);

console.log(chromePathCli(cli.input[0] || 'unicorns'));
