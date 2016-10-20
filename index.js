'use strict'
const path = require('path')
const pathExists = require('path-exists')

module.exports = function (cwd) {
  return __dirname.indexOf('.yarn-config/global') !== -1 || // global
    (
      cwd && pathExists.sync(path.resolve(cwd, 'yarn.lock')) // local
    )
}
