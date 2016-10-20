'use strict'
const path = require('path')
const pathExists = require('path-exists')

delete require.cache[__filename];
const parentDir = path.dirname(module.parent.filename);

module.exports = function (cwd) {
  return __dirname.indexOf('.yarn-config/global') !== -1 || // global
    (
      cwd && pathExists.sync(path.resolve(cwd, 'yarn.lock')) // local
    )
}
