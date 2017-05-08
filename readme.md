# chrome-path-cli

> Getting path for chromium/chrome, it returns paths of chromium/chrome installed on your system

## Install

```sh
$ npm install --global @moonandyou/chrome-path-cli
```

## Usage

```sh
# path of chromes and output json
$ chrome-path --json --chrome --canary --chromium
{
  "chrome": "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
  "canary": "/Applications/Google Chrome Canary.app/Contents/MacOS/Google Chrome Canary",
  "chromium": "/Applications/Chromium.app/Contents/MacOS/Chromium"
}

# path of chrome canary only
$ chrome-path --chrome --canary --chromium
/Applications/Google Chrome.app/Contents/MacOS/Google Chrome
/Applications/Google Chrome Canary.app/Contents/MacOS/Google Chrome Canary
/Applications/Chromium.app/Contents/MacOS/Chromium

# chrome is default. output as json
$ chrome-path --json

# and more
$ chrome-path --help
```

## License

MIT © [Jimmy Moon](http://ragingwind.me)
