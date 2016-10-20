'use strict'
const path = require('path')
const pathExists = require('path-exists')

module.exports = function (cwd) {
  return __dirname.indexOf('.yarn-config/global') !== -1 ||
    pathExists.sync(path.resolve(cwd || process.cwd(), 'yarn.lock'))
}
