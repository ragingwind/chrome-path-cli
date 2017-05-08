# chrome-path-cli [![Build Status](https://travis-ci.org/ragingwind/chrome-path-cli.svg?branch=master)](https://travis-ci.org/ragingwind/chrome-path-cli)

> Getting path for chromium / chrome, it returns paths of chromium / chrome installed on your system


## Install

```
$ npm install --save chrome-path-cli
```


## Usage

```js
const chromePathCli = require('chrome-path-cli');

chromePathCli('unicorns');
//=> 'unicorns & rainbows'
```


## API

### chromePathCli(input, [options])

#### input

Type: `string`

Lorem ipsum.

#### options

##### foo

Type: `boolean`<br>
Default: `false`

Lorem ipsum.


## CLI

```
$ npm install --global chrome-path-cli
```

```
$ chrome-path-cli --help

  Usage
    chrome-path-cli [input]

  Options
    --foo  Lorem ipsum [Default: false]

  Examples
    $ chrome-path-cli
    unicorns & rainbows
    $ chrome-path-cli ponies
    ponies & rainbows
```


## License

MIT © [ragingwind](http://ragingwind.me)
