#!/usr/bin/env node
'use strict';
const meow = require('meow');
const chromePath = require('@moonandyou/chrome-path');

const cli = meow(`
	Usage
	  $ chrome-path [options]

	Options
	  --json      output path as json format [default: text]
	  --chrome    output path of chrome stable [default browser]
	  --canary    output path of chrome canary
	  --chromium  output path of chromium

	Examples
	  $ chrome-path --canary
	  /Applications/Google Chrome Canary.app/Contents/MacOS/Google Chrome Canary

	  $ chrome-path
	  /Applications/Google Chrome.app/Contents/MacOS/Google Chrome
	  /Applications/Google Chrome Canary.app/Contents/MacOS/Google Chrome Canary
	  /Applications/Chromium.app/Contents/MacOS/Chromium

	  $ chrome-path --json
	  {
	    "google-chrome": "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
	    "google-chrome-canary": "/Applications/Google Chrome Canary.app/Contents/MacOS/Google Chrome Canary",
	    "chromium": "/Applications/Chromium.app/Contents/MacOS/Chromium"
	  }
`);

const remapChromeType = chromes => {
	chromes['chrome'] = chromes['google-chrome'];
	chromes['canary'] = chromes['google-chrome-canary'];

	return chromes;
};

chromePath().then(chromes => {
	chromes = remapChromeType(chromes);

	// types in favor of flags existing
	const selectedChromes = ['chrome', 'canary', 'chromium'].reduce((p, t) => {
		if (cli.flags[t]) {
			p[t] = chromes[t];
		}
		return p;
	}, {});

	// set default chrome type if it's empty
	if (Object.keys(selectedChromes).length === 0 && chromes['chrome']) {
		selectedChromes['chrome'] = chromes['chrome'];
	}

	if (cli.flags.json) {
		console.log(JSON.stringify(selectedChromes, '', '  '));
	} else {
		Object.keys(selectedChromes).forEach(c => {
			console.log(selectedChromes[c]);
		});
	}
});

