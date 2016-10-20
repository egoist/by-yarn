# by-yarn

[![NPM version](https://img.shields.io/npm/v/by-yarn.svg?style=flat-square)](https://npmjs.com/package/by-yarn) [![NPM downloads](https://img.shields.io/npm/dm/by-yarn.svg?style=flat-square)](https://npmjs.com/package/by-yarn) [![Build Status](https://img.shields.io/circleci/project/egoist/by-yarn/master.svg?style=flat-square)](https://circleci.com/gh/egoist/by-yarn)

## Install

```bash
$ npm install --save by-yarn
```

## Usage

```js
// require it in your module
const byYarn = require('by-yarn')

if (byYarn()) {
  console.log('Woot, this module is installed by Yarn!')
}
```

## API

### byYarn(cwd)

#### cwd

Type: `string`<br>
Default: `process.cwd()`

The path to the directory that may contain a `yarn.lock`

## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D

## License

[MIT](https://egoist.mit-license.org/) © [EGOIST](https://github.com/egoist)
